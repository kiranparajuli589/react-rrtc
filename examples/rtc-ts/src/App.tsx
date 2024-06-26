import React from 'react';
import './App.scss';
import {useRecordRTC} from "react-rrtc";

function App() {
	const [timerStatus, setTimerStatus] = React.useState(false);
	const options = {
		countDownSec: 5, // Optional: Countdown before recording starts in seconds
		rtcOptions: {}, // Optional: Additional options for RecordRTC
		afterRecordingStartHook: async () => {
			setTimerStatus(false);
		},
	};

	const {
		blob,
		recorder,
		recorderState,
		previewVideoRef,
		audioPreviewRef,
		getScreenStream,
		getUserMediaStream,
		startRecording,
		pauseRecording,
		resumeRecording,
		stopRecording,
	} = useRecordRTC(options);

	// Your component logic here

	return (
		<div className="App">
			<div className="App--preview">
				<video ref={previewVideoRef} controls height={400} />
				<audio ref={audioPreviewRef} controls/>
			</div>
			<div className="App--actions">
				<button onClick={async () => {
					const stream = await getScreenStream({video: true});
					await startRecording(stream, 'video');
				}}>Start Recording
				</button>
				<button onClick={pauseRecording}>Pause Recording</button>
				<button onClick={resumeRecording}>Resume Recording</button>
				<button onClick={stopRecording}>Stop Recording</button>
			</div>
		</div>
	);
}

export default App;
