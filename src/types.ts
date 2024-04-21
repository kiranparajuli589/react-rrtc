import {type Options} from "recordrtc";

export interface IRecordRTCOptions {
	countDownSec?: number;
	beforeRecordingHook?: () => void | Promise<void>;
	afterRecordingHook?: () => void | Promise<void>;
	rtcOptions?: Options;
}

export interface IVideoPositionOption {
	width: number;
	height: number;
	top: number;
	left: number;
}
