/// <reference types="react" />
import * as react from 'react';
import { Options, RecordRTCPromisesHandler } from 'recordrtc';

interface IRecordRTCOptions {
    countDownSec?: number;
    beforeRecordingHook?: () => void | Promise<void>;
    afterRecordingHook?: () => void | Promise<void>;
    rtcOptions?: Options;
}

declare const useRecordRTC: (options: IRecordRTCOptions) => {
    blob: Blob;
    recorder: RecordRTCPromisesHandler;
    recorderState: string;
    previewVideoRef: react.MutableRefObject<HTMLVideoElement>;
    audioPreviewRef: react.MutableRefObject<HTMLAudioElement>;
    getScreenStream: (constraints: DisplayMediaStreamOptions) => Promise<MediaStream>;
    getUserMediaStream: (constraints: DisplayMediaStreamOptions) => Promise<MediaStream>;
    startRecording: (stream: MediaStream, type?: "audio" | "video") => Promise<void>;
    pauseRecording: () => Promise<void>;
    resumeRecording: () => Promise<void>;
    stopRecording: () => Promise<void>;
};

export { useRecordRTC };
