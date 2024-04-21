import {type Options} from "recordrtc";

export interface IRecordRTCOptions {
	countDownSec?: number;
	rtcOptions?: Options;
	afterRecordingStartHook?: () => void | Promise<void>;
}
