/// <reference types="react" />
import { RecordRTCPromisesHandler } from "recordrtc";
import { IRecordRTCOptions } from "./types";
export declare const useRecordRTC: (options: IRecordRTCOptions) => {
    blob: Blob;
    recorder: RecordRTCPromisesHandler;
    recorderState: string;
    previewVideoRef: import("react").MutableRefObject<HTMLVideoElement>;
    audioPreviewRef: import("react").MutableRefObject<HTMLAudioElement>;
    getScreenStream: (constraints: DisplayMediaStreamOptions) => Promise<MediaStream>;
    getUserMediaStream: (constraints: DisplayMediaStreamOptions) => Promise<MediaStream>;
    startRecording: (stream: MediaStream, type?: "audio" | "video") => Promise<void>;
    pauseRecording: () => Promise<void>;
    resumeRecording: () => Promise<void>;
    stopRecording: () => Promise<void>;
};
