# react-rrtc

## Overview

`react-rrtc` is a ReactJS plugin that provides a convenient hook for recording audio and video
streams using the [RecordRTC](https://recordrtc.org/) library. This plugin simplifies the process of
recording media streams
within your React applications.

## Features

- Record audio, screen and video streams with ease.
- Pause and resume recording functionality.
- Access to recorded media as Blob objects.
- Compatibility with various media stream configurations.
- Flexibility to customize recording options.

## Installation

To install `react-rrtc`, simply run:

```bash
npm install react-rrtc
```

or

```bash
yarn add react-rrtc
```

## Usage

### Importing the Hook

```javascript
import {useRecordRTC} from "react-rrtc";
```

### Example Usage

```jsx
import React from 'react';
import {useRecordRTC} from 'react-rrtc';

const MyComponent = () => {
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
		<div>
			<button onClick={async () => {
				setTimerStatus(true);
				const stream = await getScreenStream({video: true});
				await startRecording(stream, 'video');
			}}>Start Recording
			</button>
			<button onClick={pauseRecording}>Pause Recording</button>
			<button onClick={resumeRecording}>Resume Recording</button>
			<button onClick={stopRecording}>Stop Recording</button>
			<video ref={previewVideoRef} controls/>
			<audio ref={audioPreviewRef} controls/>
		</div>
	);
};

export default MyComponent;
```

## API

### States

- `blob`: The recorded media as a Blob object.
- `recorder`: The RecordRTCPromisesHandler instance.
- `recorderState`: The current state of the recorder (e.g., "inactive", "recording", "paused").
- `previewVideoRef`: Ref for previewing video.
- `audioPreviewRef`: Ref for previewing audio.

### Methods

- `getScreenStream(constraints: DisplayMediaStreamOptions): Promise<MediaStream>`: Get a media
	stream from the screen.
- `getUserMediaStream(constraints: MediaStreamConstraints): Promise<MediaStream>`: Get a user media
	stream.
- `startRecording(stream: MediaStream, type: "audio"|"video" = "audio"): Promise<void>`: Start
	recording from a media stream.
- `pauseRecording(): Promise<void>`: Pause the current recording.
- `resumeRecording(): Promise<void>`: Resume a paused recording.
- `stopRecording(): Promise<void>`: Stop the recording and retrieve the recorded media.

And many more to come...

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
