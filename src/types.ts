import {type Options} from "recordrtc";

export interface IRecordRTCOptions {
	countDownSec?: number;
	beforeRecordingStartHook?: () => void | Promise<void>;
	afterRecordingStartHook?: () => void | Promise<void>;
	rtcOptions?: Options;
}

export interface IVideoPositionOption {
	width: number;
	height: number;
	top: number;
	left: number;
}
