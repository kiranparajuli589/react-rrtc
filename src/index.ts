import {RecordRTCPromisesHandler} from "recordrtc";
import {useEffect, useRef, useState} from 'react';
import {IRecordRTCOptions} from "./types";

export const useRecordRTC = (options: IRecordRTCOptions) => {
	const previewVideoRef = useRef<HTMLVideoElement | null>(null);
	const audioPreviewRef = useRef<HTMLAudioElement | null>(null);

	const [blob, setBlob] = useState<Blob | null>(null);
	const [recorder, setRecorder] = useState<RecordRTCPromisesHandler | null>(null);
	const [recorderState, setRecorderState] = useState<string>('inactive');

	const [recordStream, setRecordStream] = useState<MediaStream | null>(null);


	if (!options.countDownSec) {
		options.countDownSec = 0;
	}

	const getUserMediaStream = async (constraints: DisplayMediaStreamOptions): Promise<MediaStream> => {
		try {
			const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
			if (!constraints.audio) {
				mediaStream.getAudioTracks().forEach(track => track.stop());
			}
			return mediaStream;
		} catch (error) {
			console.error("Error accessing media devices:", error);
			throw error;
		}
	};

	const getScreenStream = async (constraints: DisplayMediaStreamOptions): Promise<MediaStream> => {
		try {
			const screenStream = await navigator.mediaDevices.getDisplayMedia(constraints);
			if (constraints.audio) {
				const audioStream = await getUserMediaStream({audio: true, video: false});
				screenStream.addTrack(audioStream.getAudioTracks()[0]);
			}
			return screenStream;
		} catch (error) {
			console.error("Error accessing screen media devices:", error);
			throw error;
		}
	}

	const addStreamStopListener = (stream: MediaStream, callback: () => void) => {
		if (!stream) return;
		const stopListener = () => {
			callback();
		};
		stream.addEventListener('ended', stopListener);
		stream.addEventListener('inactive', stopListener);
		stream.getTracks().forEach(track => track.addEventListener('ended', stopListener));
	};

	useEffect(() => {
		if (recordStream) {
			addStreamStopListener(recordStream, stopRecording);
		}
	}, [recordStream]);

	useEffect(() => {
		console.log(recorder);
	}, [recorder])

	const startRecording = async (stream: MediaStream, type: "audio"|"video" = "audio") => {
		setRecordStream(stream);
		await new Promise((resolve) => setTimeout(async () => {
			options.afterRecordingStartHook && await options.afterRecordingStartHook();
			const recorder = new RecordRTCPromisesHandler(stream, {
				...options.rtcOptions || {},
				type,
			})
			setRecorder(recorder);
			await recorder.startRecording();
			resolve(recorder);
		}, options.countDownSec * 1000));
	};

	const stopRecording = async () => {
		if (!recorder) return;

		if (recorder) {
			await recorder.stopRecording();
			const blob = await recorder.getBlob();
			setBlob(blob);
			setRecorderState('stopped');
		}
	}

	const pauseRecording = async () => {
		if (!recorder || await (recorder.getState()) !== "recording") return;
		if (previewVideoRef.current) {
			previewVideoRef.current.pause();
		}
		if (audioPreviewRef.current) {
			audioPreviewRef.current.pause();
		}
		await recorder.pauseRecording();
	}

	const resumeRecording = async () => {
		if (!recorder || await (recorder.getState()) !== "paused") return;
		if (previewVideoRef.current) {
			await previewVideoRef.current.play();
		}
		if (audioPreviewRef.current) {
			await audioPreviewRef.current.play();
		}
		await recorder.resumeRecording();
	}

	return {
		// States
		blob,
		recorder,
		recorderState,
		previewVideoRef,
		audioPreviewRef,
		// APIs
		getScreenStream,
		getUserMediaStream,

		startRecording,
		pauseRecording,
		resumeRecording,
		stopRecording,
	}
}
