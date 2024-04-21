'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var RecordRTC = {exports: {}};

(function (module) {

	// Last time updated: 2021-03-09 3:20:22 AM UTC

	// ________________
	// RecordRTC v5.6.2

	// Open-Sourced: https://github.com/muaz-khan/RecordRTC

	// --------------------------------------------------
	// Muaz Khan     - www.MuazKhan.com
	// MIT License   - www.WebRTC-Experiment.com/licence
	// --------------------------------------------------

	// ____________
	// RecordRTC.js

	/**
	 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows. 
	 * @summary Record audio, video or screen inside the browser.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef RecordRTC
	 * @class
	 * @example
	 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
	 *     type: 'video', // audio or video or gif or canvas
	 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
	 * });
	 * recorder.startRecording();
	 * @see For further information:
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
	 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
	 */

	function RecordRTC(mediaStream, config) {
	    if (!mediaStream) {
	        throw 'First parameter is required.';
	    }

	    config = config || {
	        type: 'video'
	    };

	    config = new RecordRTCConfiguration(mediaStream, config);

	    // a reference to user's recordRTC object
	    var self = this;

	    function startRecording(config2) {
	        if (!config.disableLogs) {
	            console.log('RecordRTC version: ', self.version);
	        }

	        if (!!config2) {
	            // allow users to set options using startRecording method
	            // config2 is similar to main "config" object (second parameter over RecordRTC constructor)
	            config = new RecordRTCConfiguration(mediaStream, config2);
	        }

	        if (!config.disableLogs) {
	            console.log('started recording ' + config.type + ' stream.');
	        }

	        if (mediaRecorder) {
	            mediaRecorder.clearRecordedData();
	            mediaRecorder.record();

	            setState('recording');

	            if (self.recordingDuration) {
	                handleRecordingDuration();
	            }
	            return self;
	        }

	        initRecorder(function() {
	            if (self.recordingDuration) {
	                handleRecordingDuration();
	            }
	        });

	        return self;
	    }

	    function initRecorder(initCallback) {
	        if (initCallback) {
	            config.initCallback = function() {
	                initCallback();
	                initCallback = config.initCallback = null; // recorder.initRecorder should be call-backed once.
	            };
	        }

	        var Recorder = new GetRecorderType(mediaStream, config);

	        mediaRecorder = new Recorder(mediaStream, config);
	        mediaRecorder.record();

	        setState('recording');

	        if (!config.disableLogs) {
	            console.log('Initialized recorderType:', mediaRecorder.constructor.name, 'for output-type:', config.type);
	        }
	    }

	    function stopRecording(callback) {
	        callback = callback || function() {};

	        if (!mediaRecorder) {
	            warningLog();
	            return;
	        }

	        if (self.state === 'paused') {
	            self.resumeRecording();

	            setTimeout(function() {
	                stopRecording(callback);
	            }, 1);
	            return;
	        }

	        if (self.state !== 'recording' && !config.disableLogs) {
	            console.warn('Recording state should be: "recording", however current state is: ', self.state);
	        }

	        if (!config.disableLogs) {
	            console.log('Stopped recording ' + config.type + ' stream.');
	        }

	        if (config.type !== 'gif') {
	            mediaRecorder.stop(_callback);
	        } else {
	            mediaRecorder.stop();
	            _callback();
	        }

	        setState('stopped');

	        function _callback(__blob) {
	            if (!mediaRecorder) {
	                if (typeof callback.call === 'function') {
	                    callback.call(self, '');
	                } else {
	                    callback('');
	                }
	                return;
	            }

	            Object.keys(mediaRecorder).forEach(function(key) {
	                if (typeof mediaRecorder[key] === 'function') {
	                    return;
	                }

	                self[key] = mediaRecorder[key];
	            });

	            var blob = mediaRecorder.blob;

	            if (!blob) {
	                if (__blob) {
	                    mediaRecorder.blob = blob = __blob;
	                } else {
	                    throw 'Recording failed.';
	                }
	            }

	            if (blob && !config.disableLogs) {
	                console.log(blob.type, '->', bytesToSize(blob.size));
	            }

	            if (callback) {
	                var url;

	                try {
	                    url = URL.createObjectURL(blob);
	                } catch (e) {}

	                if (typeof callback.call === 'function') {
	                    callback.call(self, url);
	                } else {
	                    callback(url);
	                }
	            }

	            if (!config.autoWriteToDisk) {
	                return;
	            }

	            getDataURL(function(dataURL) {
	                var parameter = {};
	                parameter[config.type + 'Blob'] = dataURL;
	                DiskStorage.Store(parameter);
	            });
	        }
	    }

	    function pauseRecording() {
	        if (!mediaRecorder) {
	            warningLog();
	            return;
	        }

	        if (self.state !== 'recording') {
	            if (!config.disableLogs) {
	                console.warn('Unable to pause the recording. Recording state: ', self.state);
	            }
	            return;
	        }

	        setState('paused');

	        mediaRecorder.pause();

	        if (!config.disableLogs) {
	            console.log('Paused recording.');
	        }
	    }

	    function resumeRecording() {
	        if (!mediaRecorder) {
	            warningLog();
	            return;
	        }

	        if (self.state !== 'paused') {
	            if (!config.disableLogs) {
	                console.warn('Unable to resume the recording. Recording state: ', self.state);
	            }
	            return;
	        }

	        setState('recording');

	        // not all libs have this method yet
	        mediaRecorder.resume();

	        if (!config.disableLogs) {
	            console.log('Resumed recording.');
	        }
	    }

	    function readFile(_blob) {
	        postMessage(new FileReaderSync().readAsDataURL(_blob));
	    }

	    function getDataURL(callback, _mediaRecorder) {
	        if (!callback) {
	            throw 'Pass a callback function over getDataURL.';
	        }

	        var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;

	        if (!blob) {
	            if (!config.disableLogs) {
	                console.warn('Blob encoder did not finish its job yet.');
	            }

	            setTimeout(function() {
	                getDataURL(callback, _mediaRecorder);
	            }, 1000);
	            return;
	        }

	        if (typeof Worker !== 'undefined' && !navigator.mozGetUserMedia) {
	            var webWorker = processInWebWorker(readFile);

	            webWorker.onmessage = function(event) {
	                callback(event.data);
	            };

	            webWorker.postMessage(blob);
	        } else {
	            var reader = new FileReader();
	            reader.readAsDataURL(blob);
	            reader.onload = function(event) {
	                callback(event.target.result);
	            };
	        }

	        function processInWebWorker(_function) {
	            try {
	                var blob = URL.createObjectURL(new Blob([_function.toString(),
	                    'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
	                ], {
	                    type: 'application/javascript'
	                }));

	                var worker = new Worker(blob);
	                URL.revokeObjectURL(blob);
	                return worker;
	            } catch (e) {}
	        }
	    }

	    function handleRecordingDuration(counter) {
	        counter = counter || 0;

	        if (self.state === 'paused') {
	            setTimeout(function() {
	                handleRecordingDuration(counter);
	            }, 1000);
	            return;
	        }

	        if (self.state === 'stopped') {
	            return;
	        }

	        if (counter >= self.recordingDuration) {
	            stopRecording(self.onRecordingStopped);
	            return;
	        }

	        counter += 1000; // 1-second

	        setTimeout(function() {
	            handleRecordingDuration(counter);
	        }, 1000);
	    }

	    function setState(state) {
	        if (!self) {
	            return;
	        }

	        self.state = state;

	        if (typeof self.onStateChanged.call === 'function') {
	            self.onStateChanged.call(self, state);
	        } else {
	            self.onStateChanged(state);
	        }
	    }

	    var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + ' recorder.';

	    function warningLog() {
	        if (config.disableLogs === true) {
	            return;
	        }

	        console.warn(WARNING);
	    }

	    var mediaRecorder;

	    var returnObject = {
	        /**
	         * This method starts the recording.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * var recorder = RecordRTC(mediaStream, {
	         *     type: 'video'
	         * });
	         * recorder.startRecording();
	         */
	        startRecording: startRecording,

	        /**
	         * This method stops the recording. It is strongly recommended to get "blob" or "URI" inside the callback to make sure all recorders finished their job.
	         * @param {function} callback - Callback to get the recorded blob.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.stopRecording(function() {
	         *     // use either "this" or "recorder" object; both are identical
	         *     video.src = this.toURL();
	         *     var blob = this.getBlob();
	         * });
	         */
	        stopRecording: stopRecording,

	        /**
	         * This method pauses the recording. You can resume recording using "resumeRecording" method.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @todo Firefox is unable to pause the recording. Fix it.
	         * @example
	         * recorder.pauseRecording();  // pause the recording
	         * recorder.resumeRecording(); // resume again
	         */
	        pauseRecording: pauseRecording,

	        /**
	         * This method resumes the recording.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.pauseRecording();  // first of all, pause the recording
	         * recorder.resumeRecording(); // now resume it
	         */
	        resumeRecording: resumeRecording,

	        /**
	         * This method initializes the recording.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @todo This method should be deprecated.
	         * @example
	         * recorder.initRecorder();
	         */
	        initRecorder: initRecorder,

	        /**
	         * Ask RecordRTC to auto-stop the recording after 5 minutes.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * var fiveMinutes = 5 * 1000 * 60;
	         * recorder.setRecordingDuration(fiveMinutes, function() {
	         *    var blob = this.getBlob();
	         *    video.src = this.toURL();
	         * });
	         * 
	         * // or otherwise
	         * recorder.setRecordingDuration(fiveMinutes).onRecordingStopped(function() {
	         *    var blob = this.getBlob();
	         *    video.src = this.toURL();
	         * });
	         */
	        setRecordingDuration: function(recordingDuration, callback) {
	            if (typeof recordingDuration === 'undefined') {
	                throw 'recordingDuration is required.';
	            }

	            if (typeof recordingDuration !== 'number') {
	                throw 'recordingDuration must be a number.';
	            }

	            self.recordingDuration = recordingDuration;
	            self.onRecordingStopped = callback || function() {};

	            return {
	                onRecordingStopped: function(callback) {
	                    self.onRecordingStopped = callback;
	                }
	            };
	        },

	        /**
	         * This method can be used to clear/reset all the recorded data.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @todo Figure out the difference between "reset" and "clearRecordedData" methods.
	         * @example
	         * recorder.clearRecordedData();
	         */
	        clearRecordedData: function() {
	            if (!mediaRecorder) {
	                warningLog();
	                return;
	            }

	            mediaRecorder.clearRecordedData();

	            if (!config.disableLogs) {
	                console.log('Cleared old recorded data.');
	            }
	        },

	        /**
	         * Get the recorded blob. Use this method inside the "stopRecording" callback.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.stopRecording(function() {
	         *     var blob = this.getBlob();
	         *
	         *     var file = new File([blob], 'filename.webm', {
	         *         type: 'video/webm'
	         *     });
	         *
	         *     var formData = new FormData();
	         *     formData.append('file', file); // upload "File" object rather than a "Blob"
	         *     uploadToServer(formData);
	         * });
	         * @returns {Blob} Returns recorded data as "Blob" object.
	         */
	        getBlob: function() {
	            if (!mediaRecorder) {
	                warningLog();
	                return;
	            }

	            return mediaRecorder.blob;
	        },

	        /**
	         * Get data-URI instead of Blob.
	         * @param {function} callback - Callback to get the Data-URI.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.stopRecording(function() {
	         *     recorder.getDataURL(function(dataURI) {
	         *         video.src = dataURI;
	         *     });
	         * });
	         */
	        getDataURL: getDataURL,

	        /**
	         * Get virtual/temporary URL. Usage of this URL is limited to current tab.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.stopRecording(function() {
	         *     video.src = this.toURL();
	         * });
	         * @returns {String} Returns a virtual/temporary URL for the recorded "Blob".
	         */
	        toURL: function() {
	            if (!mediaRecorder) {
	                warningLog();
	                return;
	            }

	            return URL.createObjectURL(mediaRecorder.blob);
	        },

	        /**
	         * Get internal recording object (i.e. internal module) e.g. MutliStreamRecorder, MediaStreamRecorder, StereoAudioRecorder or WhammyRecorder etc.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * var internalRecorder = recorder.getInternalRecorder();
	         * if(internalRecorder instanceof MultiStreamRecorder) {
	         *     internalRecorder.addStreams([newAudioStream]);
	         *     internalRecorder.resetVideoStreams([screenStream]);
	         * }
	         * @returns {Object} Returns internal recording object.
	         */
	        getInternalRecorder: function() {
	            return mediaRecorder;
	        },

	        /**
	         * Invoke save-as dialog to save the recorded blob into your disk.
	         * @param {string} fileName - Set your own file name.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.stopRecording(function() {
	         *     this.save('file-name');
	         *
	         *     // or manually:
	         *     invokeSaveAsDialog(this.getBlob(), 'filename.webm');
	         * });
	         */
	        save: function(fileName) {
	            if (!mediaRecorder) {
	                warningLog();
	                return;
	            }

	            invokeSaveAsDialog(mediaRecorder.blob, fileName);
	        },

	        /**
	         * This method gets a blob from indexed-DB storage.
	         * @param {function} callback - Callback to get the recorded blob.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.getFromDisk(function(dataURL) {
	         *     video.src = dataURL;
	         * });
	         */
	        getFromDisk: function(callback) {
	            if (!mediaRecorder) {
	                warningLog();
	                return;
	            }

	            RecordRTC.getFromDisk(config.type, callback);
	        },

	        /**
	         * This method appends an array of webp images to the recorded video-blob. It takes an "array" object.
	         * @type {Array.<Array>}
	         * @param {Array} arrayOfWebPImages - Array of webp images.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @todo This method should be deprecated.
	         * @example
	         * var arrayOfWebPImages = [];
	         * arrayOfWebPImages.push({
	         *     duration: index,
	         *     image: 'data:image/webp;base64,...'
	         * });
	         * recorder.setAdvertisementArray(arrayOfWebPImages);
	         */
	        setAdvertisementArray: function(arrayOfWebPImages) {
	            config.advertisement = [];

	            var length = arrayOfWebPImages.length;
	            for (var i = 0; i < length; i++) {
	                config.advertisement.push({
	                    duration: i,
	                    image: arrayOfWebPImages[i]
	                });
	            }
	        },

	        /**
	         * It is equivalent to <code class="str">"recorder.getBlob()"</code> method. Usage of "getBlob" is recommended, though.
	         * @property {Blob} blob - Recorded Blob can be accessed using this property.
	         * @memberof RecordRTC
	         * @instance
	         * @readonly
	         * @example
	         * recorder.stopRecording(function() {
	         *     var blob = this.blob;
	         *
	         *     // below one is recommended
	         *     var blob = this.getBlob();
	         * });
	         */
	        blob: null,

	        /**
	         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
	         * @property {number} bufferSize - Buffer-size used to encode the WAV container
	         * @memberof RecordRTC
	         * @instance
	         * @readonly
	         * @example
	         * recorder.stopRecording(function() {
	         *     alert('Recorder used this buffer-size: ' + this.bufferSize);
	         * });
	         */
	        bufferSize: 0,

	        /**
	         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
	         * @property {number} sampleRate - Sample-rates used to encode the WAV container
	         * @memberof RecordRTC
	         * @instance
	         * @readonly
	         * @example
	         * recorder.stopRecording(function() {
	         *     alert('Recorder used these sample-rates: ' + this.sampleRate);
	         * });
	         */
	        sampleRate: 0,

	        /**
	         * {recorderType:StereoAudioRecorder} returns ArrayBuffer object.
	         * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
	         * @memberof RecordRTC
	         * @instance
	         * @readonly
	         * @example
	         * recorder.stopRecording(function() {
	         *     var arrayBuffer = this.buffer;
	         *     alert(arrayBuffer.byteLength);
	         * });
	         */
	        buffer: null,

	        /**
	         * This method resets the recorder. So that you can reuse single recorder instance many times.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.reset();
	         * recorder.startRecording();
	         */
	        reset: function() {
	            if (self.state === 'recording' && !config.disableLogs) {
	                console.warn('Stop an active recorder.');
	            }

	            if (mediaRecorder && typeof mediaRecorder.clearRecordedData === 'function') {
	                mediaRecorder.clearRecordedData();
	            }
	            mediaRecorder = null;
	            setState('inactive');
	            self.blob = null;
	        },

	        /**
	         * This method is called whenever recorder's state changes. Use this as an "event".
	         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recorder.onStateChanged = function(state) {
	         *     console.log('Recorder state: ', state);
	         * };
	         */
	        onStateChanged: function(state) {
	            if (!config.disableLogs) {
	                console.log('Recorder state changed:', state);
	            }
	        },

	        /**
	         * A recorder can have inactive, recording, paused or stopped states.
	         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
	         * @memberof RecordRTC
	         * @static
	         * @readonly
	         * @example
	         * // this looper function will keep you updated about the recorder's states.
	         * (function looper() {
	         *     document.querySelector('h1').innerHTML = 'Recorder\'s state is: ' + recorder.state;
	         *     if(recorder.state === 'stopped') return; // ignore+stop
	         *     setTimeout(looper, 1000); // update after every 3-seconds
	         * })();
	         * recorder.startRecording();
	         */
	        state: 'inactive',

	        /**
	         * Get recorder's readonly state.
	         * @method
	         * @memberof RecordRTC
	         * @example
	         * var state = recorder.getState();
	         * @returns {String} Returns recording state.
	         */
	        getState: function() {
	            return self.state;
	        },

	        /**
	         * Destroy RecordRTC instance. Clear all recorders and objects.
	         * @method
	         * @memberof RecordRTC
	         * @example
	         * recorder.destroy();
	         */
	        destroy: function() {
	            var disableLogsCache = config.disableLogs;

	            config = {
	                disableLogs: true
	            };
	            self.reset();
	            setState('destroyed');
	            returnObject = self = null;

	            if (Storage.AudioContextConstructor) {
	                Storage.AudioContextConstructor.close();
	                Storage.AudioContextConstructor = null;
	            }

	            config.disableLogs = disableLogsCache;

	            if (!config.disableLogs) {
	                console.log('RecordRTC is destroyed.');
	            }
	        },

	        /**
	         * RecordRTC version number
	         * @property {String} version - Release version number.
	         * @memberof RecordRTC
	         * @static
	         * @readonly
	         * @example
	         * alert(recorder.version);
	         */
	        version: '5.6.2'
	    };

	    if (!this) {
	        self = returnObject;
	        return returnObject;
	    }

	    // if someone wants to use RecordRTC with the "new" keyword.
	    for (var prop in returnObject) {
	        this[prop] = returnObject[prop];
	    }

	    self = this;

	    return returnObject;
	}

	RecordRTC.version = '5.6.2';

	{
	    module.exports = RecordRTC;
	}

	RecordRTC.getFromDisk = function(type, callback) {
	    if (!callback) {
	        throw 'callback is mandatory.';
	    }

	    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
	    DiskStorage.Fetch(function(dataURL, _type) {
	        if (type !== 'all' && _type === type + 'Blob' && callback) {
	            callback(dataURL);
	        }

	        if (type === 'all' && callback) {
	            callback(dataURL, _type.replace('Blob', ''));
	        }
	    });
	};

	/**
	 * This method can be used to store recorded blobs into IndexedDB storage.
	 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
	 * @method
	 * @memberof RecordRTC
	 * @example
	 * RecordRTC.writeToDisk({
	 *     audio: audioBlob,
	 *     video: videoBlob,
	 *     gif  : gifBlob
	 * });
	 */
	RecordRTC.writeToDisk = function(options) {
	    console.log('Writing recorded blob(s) to disk!');
	    options = options || {};
	    if (options.audio && options.video && options.gif) {
	        options.audio.getDataURL(function(audioDataURL) {
	            options.video.getDataURL(function(videoDataURL) {
	                options.gif.getDataURL(function(gifDataURL) {
	                    DiskStorage.Store({
	                        audioBlob: audioDataURL,
	                        videoBlob: videoDataURL,
	                        gifBlob: gifDataURL
	                    });
	                });
	            });
	        });
	    } else if (options.audio && options.video) {
	        options.audio.getDataURL(function(audioDataURL) {
	            options.video.getDataURL(function(videoDataURL) {
	                DiskStorage.Store({
	                    audioBlob: audioDataURL,
	                    videoBlob: videoDataURL
	                });
	            });
	        });
	    } else if (options.audio && options.gif) {
	        options.audio.getDataURL(function(audioDataURL) {
	            options.gif.getDataURL(function(gifDataURL) {
	                DiskStorage.Store({
	                    audioBlob: audioDataURL,
	                    gifBlob: gifDataURL
	                });
	            });
	        });
	    } else if (options.video && options.gif) {
	        options.video.getDataURL(function(videoDataURL) {
	            options.gif.getDataURL(function(gifDataURL) {
	                DiskStorage.Store({
	                    videoBlob: videoDataURL,
	                    gifBlob: gifDataURL
	                });
	            });
	        });
	    } else if (options.audio) {
	        options.audio.getDataURL(function(audioDataURL) {
	            DiskStorage.Store({
	                audioBlob: audioDataURL
	            });
	        });
	    } else if (options.video) {
	        options.video.getDataURL(function(videoDataURL) {
	            DiskStorage.Store({
	                videoBlob: videoDataURL
	            });
	        });
	    } else if (options.gif) {
	        options.gif.getDataURL(function(gifDataURL) {
	            DiskStorage.Store({
	                gifBlob: gifDataURL
	            });
	        });
	    }
	};

	// __________________________
	// RecordRTC-Configuration.js

	/**
	 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
	 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef RecordRTCConfiguration
	 * @class
	 * @example
	 * var options = RecordRTCConfiguration(mediaStream, options);
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
	 */

	function RecordRTCConfiguration(mediaStream, config) {
	    if (!config.recorderType && !config.type) {
	        if (!!config.audio && !!config.video) {
	            config.type = 'video';
	        } else if (!!config.audio && !config.video) {
	            config.type = 'audio';
	        }
	    }

	    if (config.recorderType && !config.type) {
	        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder || (typeof WebAssemblyRecorder !== 'undefined' && config.recorderType === WebAssemblyRecorder)) {
	            config.type = 'video';
	        } else if (config.recorderType === GifRecorder) {
	            config.type = 'gif';
	        } else if (config.recorderType === StereoAudioRecorder) {
	            config.type = 'audio';
	        } else if (config.recorderType === MediaStreamRecorder) {
	            if (getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
	                config.type = 'video';
	            } else if (!getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
	                config.type = 'video';
	            } else if (getTracks(mediaStream, 'audio').length && !getTracks(mediaStream, 'video').length) {
	                config.type = 'audio';
	            } else ;
	        }
	    }

	    if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
	        if (!config.mimeType) {
	            config.mimeType = 'video/webm';
	        }

	        if (!config.type) {
	            config.type = config.mimeType.split('/')[0];
	        }

	        if (!config.bitsPerSecond) ;
	    }

	    // consider default type=audio
	    if (!config.type) {
	        if (config.mimeType) {
	            config.type = config.mimeType.split('/')[0];
	        }
	        if (!config.type) {
	            config.type = 'audio';
	        }
	    }

	    return config;
	}

	// __________________
	// GetRecorderType.js

	/**
	 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
	 * @summary It returns best recorder-type available for your browser.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef GetRecorderType
	 * @class
	 * @example
	 * var RecorderType = GetRecorderType(options);
	 * var recorder = new RecorderType(options);
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
	 */

	function GetRecorderType(mediaStream, config) {
	    var recorder;

	    // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
	    // todo: detect if it is Edge, then auto use: StereoAudioRecorder
	    if (isChrome || isEdge || isOpera) {
	        // Media Stream Recording API has not been implemented in chrome yet;
	        // That's why using WebAudio API to record stereo audio in WAV format
	        recorder = StereoAudioRecorder;
	    }

	    if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
	        recorder = MediaStreamRecorder;
	    }

	    // video recorder (in WebM format)
	    if (config.type === 'video' && (isChrome || isOpera)) {
	        recorder = WhammyRecorder;

	        if (typeof WebAssemblyRecorder !== 'undefined' && typeof ReadableStream !== 'undefined') {
	            recorder = WebAssemblyRecorder;
	        }
	    }

	    // video recorder (in Gif format)
	    if (config.type === 'gif') {
	        recorder = GifRecorder;
	    }

	    // html2canvas recording!
	    if (config.type === 'canvas') {
	        recorder = CanvasRecorder;
	    }

	    if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
	        if (getTracks(mediaStream, 'video').length || getTracks(mediaStream, 'audio').length) {
	            // audio-only recording
	            if (config.type === 'audio') {
	                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('audio/webm')) {
	                    recorder = MediaStreamRecorder;
	                }
	                // else recorder = StereoAudioRecorder;
	            } else {
	                // video or screen tracks
	                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('video/webm')) {
	                    recorder = MediaStreamRecorder;
	                }
	            }
	        }
	    }

	    if (mediaStream instanceof Array && mediaStream.length) {
	        recorder = MultiStreamRecorder;
	    }

	    if (config.recorderType) {
	        recorder = config.recorderType;
	    }

	    if (!config.disableLogs && !!recorder && !!recorder.name) {
	        console.log('Using recorderType:', recorder.name || recorder.constructor.name);
	    }

	    if (!recorder && isSafari) {
	        recorder = MediaStreamRecorder;
	    }

	    return recorder;
	}

	// _____________
	// MRecordRTC.js

	/**
	 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
	 * @summary MRecordRTC stands for "Multiple-RecordRTC".
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef MRecordRTC
	 * @class
	 * @example
	 * var recorder = new MRecordRTC();
	 * recorder.addStream(MediaStream);
	 * recorder.mediaType = {
	 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
	 *     video: true, // or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
	 *     gif: true    // or GifRecorder
	 * };
	 * // mimeType is optional and should be set only in advance cases.
	 * recorder.mimeType = {
	 *     audio: 'audio/wav',
	 *     video: 'video/webm',
	 *     gif:   'image/gif'
	 * };
	 * recorder.startRecording();
	 * @see For further information:
	 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @requires {@link RecordRTC}
	 */

	function MRecordRTC(mediaStream) {

	    /**
	     * This method attaches MediaStream object to {@link MRecordRTC}.
	     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.addStream(MediaStream);
	     */
	    this.addStream = function(_mediaStream) {
	        if (_mediaStream) {
	            mediaStream = _mediaStream;
	        }
	    };

	    /**
	     * This property can be used to set the recording type e.g. audio, or video, or gif, or canvas.
	     * @property {object} mediaType - {audio: true, video: true, gif: true}
	     * @memberof MRecordRTC
	     * @example
	     * var recorder = new MRecordRTC();
	     * recorder.mediaType = {
	     *     audio: true, // TRUE or StereoAudioRecorder or MediaStreamRecorder
	     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
	     *     gif  : true  // TRUE or GifRecorder
	     * };
	     */
	    this.mediaType = {
	        audio: true,
	        video: true
	    };

	    /**
	     * This method starts recording.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.startRecording();
	     */
	    this.startRecording = function() {
	        var mediaType = this.mediaType;
	        var recorderType;
	        var mimeType = this.mimeType || {
	            audio: null,
	            video: null,
	            gif: null
	        };

	        if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'audio').length) {
	            mediaType.audio = false;
	        }

	        if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
	            mediaType.video = false;
	        }

	        if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
	            mediaType.gif = false;
	        }

	        if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
	            throw 'MediaStream must have either audio or video tracks.';
	        }

	        if (!!mediaType.audio) {
	            recorderType = null;
	            if (typeof mediaType.audio === 'function') {
	                recorderType = mediaType.audio;
	            }

	            this.audioRecorder = new RecordRTC(mediaStream, {
	                type: 'audio',
	                bufferSize: this.bufferSize,
	                sampleRate: this.sampleRate,
	                numberOfAudioChannels: this.numberOfAudioChannels || 2,
	                disableLogs: this.disableLogs,
	                recorderType: recorderType,
	                mimeType: mimeType.audio,
	                timeSlice: this.timeSlice,
	                onTimeStamp: this.onTimeStamp
	            });

	            if (!mediaType.video) {
	                this.audioRecorder.startRecording();
	            }
	        }

	        if (!!mediaType.video) {
	            recorderType = null;
	            if (typeof mediaType.video === 'function') {
	                recorderType = mediaType.video;
	            }

	            var newStream = mediaStream;

	            if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === 'function') {
	                var videoTrack = getTracks(mediaStream, 'video')[0];

	                if (isFirefox) {
	                    newStream = new MediaStream();
	                    newStream.addTrack(videoTrack);

	                    if (recorderType && recorderType === WhammyRecorder) {
	                        // Firefox does NOT supports webp-encoding yet
	                        // But Firefox do supports WebAssemblyRecorder
	                        recorderType = MediaStreamRecorder;
	                    }
	                } else {
	                    newStream = new MediaStream();
	                    newStream.addTrack(videoTrack);
	                }
	            }

	            this.videoRecorder = new RecordRTC(newStream, {
	                type: 'video',
	                video: this.video,
	                canvas: this.canvas,
	                frameInterval: this.frameInterval || 10,
	                disableLogs: this.disableLogs,
	                recorderType: recorderType,
	                mimeType: mimeType.video,
	                timeSlice: this.timeSlice,
	                onTimeStamp: this.onTimeStamp,
	                workerPath: this.workerPath,
	                webAssemblyPath: this.webAssemblyPath,
	                frameRate: this.frameRate, // used by WebAssemblyRecorder; values: usually 30; accepts any.
	                bitrate: this.bitrate // used by WebAssemblyRecorder; values: 0 to 1000+
	            });

	            if (!mediaType.audio) {
	                this.videoRecorder.startRecording();
	            }
	        }

	        if (!!mediaType.audio && !!mediaType.video) {
	            var self = this;

	            var isSingleRecorder = isMediaRecorderCompatible() === true;

	            if (mediaType.audio instanceof StereoAudioRecorder && !!mediaType.video) {
	                isSingleRecorder = false;
	            } else if (mediaType.audio !== true && mediaType.video !== true && mediaType.audio !== mediaType.video) {
	                isSingleRecorder = false;
	            }

	            if (isSingleRecorder === true) {
	                self.audioRecorder = null;
	                self.videoRecorder.startRecording();
	            } else {
	                self.videoRecorder.initRecorder(function() {
	                    self.audioRecorder.initRecorder(function() {
	                        // Both recorders are ready to record things accurately
	                        self.videoRecorder.startRecording();
	                        self.audioRecorder.startRecording();
	                    });
	                });
	            }
	        }

	        if (!!mediaType.gif) {
	            recorderType = null;
	            if (typeof mediaType.gif === 'function') {
	                recorderType = mediaType.gif;
	            }
	            this.gifRecorder = new RecordRTC(mediaStream, {
	                type: 'gif',
	                frameRate: this.frameRate || 200,
	                quality: this.quality || 10,
	                disableLogs: this.disableLogs,
	                recorderType: recorderType,
	                mimeType: mimeType.gif
	            });
	            this.gifRecorder.startRecording();
	        }
	    };

	    /**
	     * This method stops recording.
	     * @param {function} callback - Callback function is invoked when all encoders finished their jobs.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.stopRecording(function(recording){
	     *     var audioBlob = recording.audio;
	     *     var videoBlob = recording.video;
	     *     var gifBlob   = recording.gif;
	     * });
	     */
	    this.stopRecording = function(callback) {
	        callback = callback || function() {};

	        if (this.audioRecorder) {
	            this.audioRecorder.stopRecording(function(blobURL) {
	                callback(blobURL, 'audio');
	            });
	        }

	        if (this.videoRecorder) {
	            this.videoRecorder.stopRecording(function(blobURL) {
	                callback(blobURL, 'video');
	            });
	        }

	        if (this.gifRecorder) {
	            this.gifRecorder.stopRecording(function(blobURL) {
	                callback(blobURL, 'gif');
	            });
	        }
	    };

	    /**
	     * This method pauses recording.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.pauseRecording();
	     */
	    this.pauseRecording = function() {
	        if (this.audioRecorder) {
	            this.audioRecorder.pauseRecording();
	        }

	        if (this.videoRecorder) {
	            this.videoRecorder.pauseRecording();
	        }

	        if (this.gifRecorder) {
	            this.gifRecorder.pauseRecording();
	        }
	    };

	    /**
	     * This method resumes recording.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.resumeRecording();
	     */
	    this.resumeRecording = function() {
	        if (this.audioRecorder) {
	            this.audioRecorder.resumeRecording();
	        }

	        if (this.videoRecorder) {
	            this.videoRecorder.resumeRecording();
	        }

	        if (this.gifRecorder) {
	            this.gifRecorder.resumeRecording();
	        }
	    };

	    /**
	     * This method can be used to manually get all recorded blobs.
	     * @param {function} callback - All recorded blobs are passed back to the "callback" function.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.getBlob(function(recording){
	     *     var audioBlob = recording.audio;
	     *     var videoBlob = recording.video;
	     *     var gifBlob   = recording.gif;
	     * });
	     * // or
	     * var audioBlob = recorder.getBlob().audio;
	     * var videoBlob = recorder.getBlob().video;
	     */
	    this.getBlob = function(callback) {
	        var output = {};

	        if (this.audioRecorder) {
	            output.audio = this.audioRecorder.getBlob();
	        }

	        if (this.videoRecorder) {
	            output.video = this.videoRecorder.getBlob();
	        }

	        if (this.gifRecorder) {
	            output.gif = this.gifRecorder.getBlob();
	        }

	        if (callback) {
	            callback(output);
	        }

	        return output;
	    };

	    /**
	     * Destroy all recorder instances.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.destroy();
	     */
	    this.destroy = function() {
	        if (this.audioRecorder) {
	            this.audioRecorder.destroy();
	            this.audioRecorder = null;
	        }

	        if (this.videoRecorder) {
	            this.videoRecorder.destroy();
	            this.videoRecorder = null;
	        }

	        if (this.gifRecorder) {
	            this.gifRecorder.destroy();
	            this.gifRecorder = null;
	        }
	    };

	    /**
	     * This method can be used to manually get all recorded blobs' DataURLs.
	     * @param {function} callback - All recorded blobs' DataURLs are passed back to the "callback" function.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.getDataURL(function(recording){
	     *     var audioDataURL = recording.audio;
	     *     var videoDataURL = recording.video;
	     *     var gifDataURL   = recording.gif;
	     * });
	     */
	    this.getDataURL = function(callback) {
	        this.getBlob(function(blob) {
	            if (blob.audio && blob.video) {
	                getDataURL(blob.audio, function(_audioDataURL) {
	                    getDataURL(blob.video, function(_videoDataURL) {
	                        callback({
	                            audio: _audioDataURL,
	                            video: _videoDataURL
	                        });
	                    });
	                });
	            } else if (blob.audio) {
	                getDataURL(blob.audio, function(_audioDataURL) {
	                    callback({
	                        audio: _audioDataURL
	                    });
	                });
	            } else if (blob.video) {
	                getDataURL(blob.video, function(_videoDataURL) {
	                    callback({
	                        video: _videoDataURL
	                    });
	                });
	            }
	        });

	        function getDataURL(blob, callback00) {
	            if (typeof Worker !== 'undefined') {
	                var webWorker = processInWebWorker(function readFile(_blob) {
	                    postMessage(new FileReaderSync().readAsDataURL(_blob));
	                });

	                webWorker.onmessage = function(event) {
	                    callback00(event.data);
	                };

	                webWorker.postMessage(blob);
	            } else {
	                var reader = new FileReader();
	                reader.readAsDataURL(blob);
	                reader.onload = function(event) {
	                    callback00(event.target.result);
	                };
	            }
	        }

	        function processInWebWorker(_function) {
	            var blob = URL.createObjectURL(new Blob([_function.toString(),
	                'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
	            ], {
	                type: 'application/javascript'
	            }));

	            var worker = new Worker(blob);
	            var url;
	            if (typeof URL !== 'undefined') {
	                url = URL;
	            } else if (typeof webkitURL !== 'undefined') {
	                url = webkitURL;
	            } else {
	                throw 'Neither URL nor webkitURL detected.';
	            }
	            url.revokeObjectURL(blob);
	            return worker;
	        }
	    };

	    /**
	     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.writeToDisk();
	     */
	    this.writeToDisk = function() {
	        RecordRTC.writeToDisk({
	            audio: this.audioRecorder,
	            video: this.videoRecorder,
	            gif: this.gifRecorder
	        });
	    };

	    /**
	     * This method can be used to invoke a save-as dialog for all recorded blobs.
	     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.save({
	     *     audio: 'audio-file-name',
	     *     video: 'video-file-name',
	     *     gif  : 'gif-file-name'
	     * });
	     */
	    this.save = function(args) {
	        args = args || {
	            audio: true,
	            video: true,
	            gif: true
	        };

	        if (!!args.audio && this.audioRecorder) {
	            this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
	        }

	        if (!!args.video && this.videoRecorder) {
	            this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
	        }
	        if (!!args.gif && this.gifRecorder) {
	            this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
	        }
	    };
	}

	/**
	 * This method can be used to get all recorded blobs from IndexedDB storage.
	 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
	 * @param {function} callback - Callback function to get all stored blobs.
	 * @method
	 * @memberof MRecordRTC
	 * @example
	 * MRecordRTC.getFromDisk('all', function(dataURL, type){
	 *     if(type === 'audio') { }
	 *     if(type === 'video') { }
	 *     if(type === 'gif')   { }
	 * });
	 */
	MRecordRTC.getFromDisk = RecordRTC.getFromDisk;

	/**
	 * This method can be used to store recorded blobs into IndexedDB storage.
	 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
	 * @method
	 * @memberof MRecordRTC
	 * @example
	 * MRecordRTC.writeToDisk({
	 *     audio: audioBlob,
	 *     video: videoBlob,
	 *     gif  : gifBlob
	 * });
	 */
	MRecordRTC.writeToDisk = RecordRTC.writeToDisk;

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.MRecordRTC = MRecordRTC;
	}

	var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

	(function(that) {
	    if (!that) {
	        return;
	    }

	    if (typeof window !== 'undefined') {
	        return;
	    }

	    if (typeof commonjsGlobal === 'undefined') {
	        return;
	    }

	    commonjsGlobal.navigator = {
	        userAgent: browserFakeUserAgent,
	        getUserMedia: function() {}
	    };

	    if (!commonjsGlobal.console) {
	        commonjsGlobal.console = {};
	    }

	    if (typeof commonjsGlobal.console.log === 'undefined' || typeof commonjsGlobal.console.error === 'undefined') {
	        commonjsGlobal.console.error = commonjsGlobal.console.log = commonjsGlobal.console.log || function() {
	            console.log(arguments);
	        };
	    }

	    if (typeof document === 'undefined') {
	        /*global document:true */
	        that.document = {
	            documentElement: {
	                appendChild: function() {
	                    return '';
	                }
	            }
	        };

	        document.createElement = document.captureStream = document.mozCaptureStream = function() {
	            var obj = {
	                getContext: function() {
	                    return obj;
	                },
	                play: function() {},
	                pause: function() {},
	                drawImage: function() {},
	                toDataURL: function() {
	                    return '';
	                },
	                style: {}
	            };
	            return obj;
	        };

	        that.HTMLVideoElement = function() {};
	    }

	    if (typeof location === 'undefined') {
	        /*global location:true */
	        that.location = {
	            protocol: 'file:',
	            href: '',
	            hash: ''
	        };
	    }

	    if (typeof screen === 'undefined') {
	        /*global screen:true */
	        that.screen = {
	            width: 0,
	            height: 0
	        };
	    }

	    if (typeof URL === 'undefined') {
	        /*global screen:true */
	        that.URL = {
	            createObjectURL: function() {
	                return '';
	            },
	            revokeObjectURL: function() {
	                return '';
	            }
	        };
	    }

	    /*global window:true */
	    that.window = commonjsGlobal;
	})(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : null);

	// _____________________________
	// Cross-Browser-Declarations.js

	// animation-frame used in WebM recording

	/*jshint -W079 */
	var requestAnimationFrame = window.requestAnimationFrame;
	if (typeof requestAnimationFrame === 'undefined') {
	    if (typeof webkitRequestAnimationFrame !== 'undefined') {
	        /*global requestAnimationFrame:true */
	        requestAnimationFrame = webkitRequestAnimationFrame;
	    } else if (typeof mozRequestAnimationFrame !== 'undefined') {
	        /*global requestAnimationFrame:true */
	        requestAnimationFrame = mozRequestAnimationFrame;
	    } else if (typeof msRequestAnimationFrame !== 'undefined') {
	        /*global requestAnimationFrame:true */
	        requestAnimationFrame = msRequestAnimationFrame;
	    } else if (typeof requestAnimationFrame === 'undefined') {
	        // via: https://gist.github.com/paulirish/1579671
	        var lastTime = 0;

	        /*global requestAnimationFrame:true */
	        requestAnimationFrame = function(callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = setTimeout(function() {
	                callback(currTime + timeToCall);
	            }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	    }
	}

	/*jshint -W079 */
	var cancelAnimationFrame = window.cancelAnimationFrame;
	if (typeof cancelAnimationFrame === 'undefined') {
	    if (typeof webkitCancelAnimationFrame !== 'undefined') {
	        /*global cancelAnimationFrame:true */
	        cancelAnimationFrame = webkitCancelAnimationFrame;
	    } else if (typeof mozCancelAnimationFrame !== 'undefined') {
	        /*global cancelAnimationFrame:true */
	        cancelAnimationFrame = mozCancelAnimationFrame;
	    } else if (typeof msCancelAnimationFrame !== 'undefined') {
	        /*global cancelAnimationFrame:true */
	        cancelAnimationFrame = msCancelAnimationFrame;
	    } else if (typeof cancelAnimationFrame === 'undefined') {
	        /*global cancelAnimationFrame:true */
	        cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
	    }
	}

	// WebAudio API representer
	var AudioContext = window.AudioContext;

	if (typeof AudioContext === 'undefined') {
	    if (typeof webkitAudioContext !== 'undefined') {
	        /*global AudioContext:true */
	        AudioContext = webkitAudioContext;
	    }

	    if (typeof mozAudioContext !== 'undefined') {
	        /*global AudioContext:true */
	        AudioContext = mozAudioContext;
	    }
	}

	/*jshint -W079 */
	var URL = window.URL;

	if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
	    /*global URL:true */
	    URL = webkitURL;
	}

	if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
	    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
	        navigator.getUserMedia = navigator.webkitGetUserMedia;
	    }

	    if (typeof navigator.mozGetUserMedia !== 'undefined') {
	        navigator.getUserMedia = navigator.mozGetUserMedia;
	    }
	}

	var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
	var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && ('netscape' in window) && / rv:/.test(navigator.userAgent);
	var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron() || navigator.userAgent.toLowerCase().indexOf('chrome/') !== -1;

	var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

	if (isSafari && !isChrome && navigator.userAgent.indexOf('CriOS') !== -1) {
	    isSafari = false;
	    isChrome = true;
	}

	var MediaStream = window.MediaStream;

	if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
	    MediaStream = webkitMediaStream;
	}

	/*global MediaStream:true */
	if (typeof MediaStream !== 'undefined') {
	    // override "stop" method for all browsers
	    if (typeof MediaStream.prototype.stop === 'undefined') {
	        MediaStream.prototype.stop = function() {
	            this.getTracks().forEach(function(track) {
	                track.stop();
	            });
	        };
	    }
	}

	// below function via: http://goo.gl/B3ae8c
	/**
	 * Return human-readable file size.
	 * @param {number} bytes - Pass bytes and get formatted string.
	 * @returns {string} - formatted string
	 * @example
	 * bytesToSize(1024*1024*5) === '5 GB'
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */
	function bytesToSize(bytes) {
	    var k = 1000;
	    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	    if (bytes === 0) {
	        return '0 Bytes';
	    }
	    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
	    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
	}

	/**
	 * @param {Blob} file - File or Blob object. This parameter is required.
	 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
	 * @example
	 * invokeSaveAsDialog(blob or file, [optional] fileName);
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */
	function invokeSaveAsDialog(file, fileName) {
	    if (!file) {
	        throw 'Blob object is required.';
	    }

	    if (!file.type) {
	        try {
	            file.type = 'video/webm';
	        } catch (e) {}
	    }

	    var fileExtension = (file.type || 'video/webm').split('/')[1];
	    if (fileExtension.indexOf(';') !== -1) {
	        // extended mimetype, e.g. 'video/webm;codecs=vp8,opus'
	        fileExtension = fileExtension.split(';')[0];
	    }
	    if (fileName && fileName.indexOf('.') !== -1) {
	        var splitted = fileName.split('.');
	        fileName = splitted[0];
	        fileExtension = splitted[1];
	    }

	    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

	    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
	        return navigator.msSaveOrOpenBlob(file, fileFullName);
	    } else if (typeof navigator.msSaveBlob !== 'undefined') {
	        return navigator.msSaveBlob(file, fileFullName);
	    }

	    var hyperlink = document.createElement('a');
	    hyperlink.href = URL.createObjectURL(file);
	    hyperlink.download = fileFullName;

	    hyperlink.style = 'display:none;opacity:0;color:transparent;';
	    (document.body || document.documentElement).appendChild(hyperlink);

	    if (typeof hyperlink.click === 'function') {
	        hyperlink.click();
	    } else {
	        hyperlink.target = '_blank';
	        hyperlink.dispatchEvent(new MouseEvent('click', {
	            view: window,
	            bubbles: true,
	            cancelable: true
	        }));
	    }

	    URL.revokeObjectURL(hyperlink.href);
	}

	/**
	 * from: https://github.com/cheton/is-electron/blob/master/index.js
	 **/
	function isElectron() {
	    // Renderer process
	    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
	        return true;
	    }

	    // Main process
	    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
	        return true;
	    }

	    // Detect the user agent when the `nodeIntegration` option is set to true
	    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
	        return true;
	    }

	    return false;
	}

	function getTracks(stream, kind) {
	    if (!stream || !stream.getTracks) {
	        return [];
	    }

	    return stream.getTracks().filter(function(t) {
	        return t.kind === (kind || 'audio');
	    });
	}

	function setSrcObject(stream, element) {
	    if ('srcObject' in element) {
	        element.srcObject = stream;
	    } else if ('mozSrcObject' in element) {
	        element.mozSrcObject = stream;
	    } else {
	        element.srcObject = stream;
	    }
	}

	/**
	 * @param {Blob} file - File or Blob object.
	 * @param {function} callback - Callback function.
	 * @example
	 * getSeekableBlob(blob or file, callback);
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */
	function getSeekableBlob(inputBlob, callback) {
	    // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
	    if (typeof EBML === 'undefined') {
	        throw new Error('Please link: https://www.webrtc-experiment.com/EBML.js');
	    }

	    var reader = new EBML.Reader();
	    var decoder = new EBML.Decoder();
	    var tools = EBML.tools;

	    var fileReader = new FileReader();
	    fileReader.onload = function(e) {
	        var ebmlElms = decoder.decode(this.result);
	        ebmlElms.forEach(function(element) {
	            reader.read(element);
	        });
	        reader.stop();
	        var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
	        var body = this.result.slice(reader.metadataSize);
	        var newBlob = new Blob([refinedMetadataBuf, body], {
	            type: 'video/webm'
	        });

	        callback(newBlob);
	    };
	    fileReader.readAsArrayBuffer(inputBlob);
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.invokeSaveAsDialog = invokeSaveAsDialog;
	    RecordRTC.getTracks = getTracks;
	    RecordRTC.getSeekableBlob = getSeekableBlob;
	    RecordRTC.bytesToSize = bytesToSize;
	    RecordRTC.isElectron = isElectron;
	}

	// __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
	// Storage.js

	/**
	 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @example
	 * Storage.AudioContext === webkitAudioContext
	 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */

	var Storage = {};

	if (typeof AudioContext !== 'undefined') {
	    Storage.AudioContext = AudioContext;
	} else if (typeof webkitAudioContext !== 'undefined') {
	    Storage.AudioContext = webkitAudioContext;
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.Storage = Storage;
	}

	function isMediaRecorderCompatible() {
	    if (isFirefox || isSafari || isEdge) {
	        return true;
	    }
	    var nAgt = navigator.userAgent;
	    var fullVersion = '' + parseFloat(navigator.appVersion);
	    var majorVersion = parseInt(navigator.appVersion, 10);
	    var verOffset, ix;

	    if (isChrome || isOpera) {
	        verOffset = nAgt.indexOf('Chrome');
	        fullVersion = nAgt.substring(verOffset + 7);
	    }

	    // trim the fullVersion string at semicolon/space if present
	    if ((ix = fullVersion.indexOf(';')) !== -1) {
	        fullVersion = fullVersion.substring(0, ix);
	    }

	    if ((ix = fullVersion.indexOf(' ')) !== -1) {
	        fullVersion = fullVersion.substring(0, ix);
	    }

	    majorVersion = parseInt('' + fullVersion, 10);

	    if (isNaN(majorVersion)) {
	        fullVersion = '' + parseFloat(navigator.appVersion);
	        majorVersion = parseInt(navigator.appVersion, 10);
	    }

	    return majorVersion >= 49;
	}

	// ______________________
	// MediaStreamRecorder.js

	/**
	 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
	 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://github.com/muaz-khan|Muaz Khan}
	 * @typedef MediaStreamRecorder
	 * @class
	 * @example
	 * var config = {
	 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
	 *     audioBitsPerSecond : 256 * 8 * 1024,
	 *     videoBitsPerSecond : 256 * 8 * 1024,
	 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
	 *     checkForInactiveTracks: true,
	 *     timeSlice: 1000, // concatenate intervals based blobs
	 *     ondataavailable: function() {} // get intervals based blobs
	 * }
	 * var recorder = new MediaStreamRecorder(mediaStream, config);
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 *
	 *     // or
	 *     var blob = recorder.blob;
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
	 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
	 */

	function MediaStreamRecorder(mediaStream, config) {
	    var self = this;

	    if (typeof mediaStream === 'undefined') {
	        throw 'First argument "MediaStream" is required.';
	    }

	    if (typeof MediaRecorder === 'undefined') {
	        throw 'Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
	    }

	    config = config || {
	        // bitsPerSecond: 256 * 8 * 1024,
	        mimeType: 'video/webm'
	    };

	    if (config.type === 'audio') {
	        if (getTracks(mediaStream, 'video').length && getTracks(mediaStream, 'audio').length) {
	            var stream;
	            if (!!navigator.mozGetUserMedia) {
	                stream = new MediaStream();
	                stream.addTrack(getTracks(mediaStream, 'audio')[0]);
	            } else {
	                // webkitMediaStream
	                stream = new MediaStream(getTracks(mediaStream, 'audio'));
	            }
	            mediaStream = stream;
	        }

	        if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf('audio') === -1) {
	            config.mimeType = isChrome ? 'audio/webm' : 'audio/ogg';
	        }

	        if (config.mimeType && config.mimeType.toString().toLowerCase() !== 'audio/ogg' && !!navigator.mozGetUserMedia) {
	            // forcing better codecs on Firefox (via #166)
	            config.mimeType = 'audio/ogg';
	        }
	    }

	    var arrayOfBlobs = [];

	    /**
	     * This method returns array of blobs. Use only with "timeSlice". Its useful to preview recording anytime, without using the "stop" method.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * var arrayOfBlobs = recorder.getArrayOfBlobs();
	     * @returns {Array} Returns array of recorded blobs.
	     */
	    this.getArrayOfBlobs = function() {
	        return arrayOfBlobs;
	    };

	    /**
	     * This method records MediaStream.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        // set defaults
	        self.blob = null;
	        self.clearRecordedData();
	        self.timestamps = [];
	        allStates = [];
	        arrayOfBlobs = [];

	        var recorderHints = config;

	        if (!config.disableLogs) {
	            console.log('Passing following config over MediaRecorder API.', recorderHints);
	        }

	        if (mediaRecorder) {
	            // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
	            mediaRecorder = null;
	        }

	        if (isChrome && !isMediaRecorderCompatible()) {
	            // to support video-only recording on stable
	            recorderHints = 'video/vp8';
	        }

	        if (typeof MediaRecorder.isTypeSupported === 'function' && recorderHints.mimeType) {
	            if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
	                if (!config.disableLogs) {
	                    console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
	                }

	                recorderHints.mimeType = config.type === 'audio' ? 'audio/webm' : 'video/webm';
	            }
	        }

	        // using MediaRecorder API here
	        try {
	            mediaRecorder = new MediaRecorder(mediaStream, recorderHints);

	            // reset
	            config.mimeType = recorderHints.mimeType;
	        } catch (e) {
	            // chrome-based fallback
	            mediaRecorder = new MediaRecorder(mediaStream);
	        }

	        // old hack?
	        if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && 'canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
	            if (!config.disableLogs) {
	                console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
	            }
	        }

	        // Dispatching OnDataAvailable Handler
	        mediaRecorder.ondataavailable = function(e) {
	            if (e.data) {
	                allStates.push('ondataavailable: ' + bytesToSize(e.data.size));
	            }

	            if (typeof config.timeSlice === 'number') {
	                if (e.data && e.data.size) {
	                    arrayOfBlobs.push(e.data);
	                    updateTimeStamp();

	                    if (typeof config.ondataavailable === 'function') {
	                        // intervals based blobs
	                        var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
	                            type: getMimeType(recorderHints)
	                        });
	                        config.ondataavailable(blob);
	                    }
	                }
	                return;
	            }

	            if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
	                // make sure that stopRecording always getting fired
	                // even if there is invalid data
	                if (self.recordingCallback) {
	                    self.recordingCallback(new Blob([], {
	                        type: getMimeType(recorderHints)
	                    }));
	                    self.recordingCallback = null;
	                }
	                return;
	            }

	            self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
	                type: getMimeType(recorderHints)
	            });

	            if (self.recordingCallback) {
	                self.recordingCallback(self.blob);
	                self.recordingCallback = null;
	            }
	        };

	        mediaRecorder.onstart = function() {
	            allStates.push('started');
	        };

	        mediaRecorder.onpause = function() {
	            allStates.push('paused');
	        };

	        mediaRecorder.onresume = function() {
	            allStates.push('resumed');
	        };

	        mediaRecorder.onstop = function() {
	            allStates.push('stopped');
	        };

	        mediaRecorder.onerror = function(error) {
	            if (!error) {
	                return;
	            }

	            if (!error.name) {
	                error.name = 'UnknownError';
	            }

	            allStates.push('error: ' + error);

	            if (!config.disableLogs) {
	                // via: https://w3c.github.io/mediacapture-record/MediaRecorder.html#exception-summary
	                if (error.name.toString().toLowerCase().indexOf('invalidstate') !== -1) {
	                    console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.', error);
	                } else if (error.name.toString().toLowerCase().indexOf('notsupported') !== -1) {
	                    console.error('MIME type (', recorderHints.mimeType, ') is not supported.', error);
	                } else if (error.name.toString().toLowerCase().indexOf('security') !== -1) {
	                    console.error('MediaRecorder security error', error);
	                }

	                // older code below
	                else if (error.name === 'OutOfMemory') {
	                    console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
	                } else if (error.name === 'IllegalStreamModification') {
	                    console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
	                } else if (error.name === 'OtherRecordingError') {
	                    console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
	                } else if (error.name === 'GenericError') {
	                    console.error('The UA cannot provide the codec or recording option that has been requested.', error);
	                } else {
	                    console.error('MediaRecorder Error', error);
	                }
	            }

	            (function(looper) {
	                if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === 'inactive') {
	                    delete config.timeslice;

	                    // 10 minutes, enough?
	                    mediaRecorder.start(10 * 60 * 1000);
	                    return;
	                }

	                setTimeout(looper, 1000);
	            })();

	            if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
	                mediaRecorder.stop();
	            }
	        };

	        if (typeof config.timeSlice === 'number') {
	            updateTimeStamp();
	            mediaRecorder.start(config.timeSlice);
	        } else {
	            // default is 60 minutes; enough?
	            // use config => {timeSlice: 1000} otherwise

	            mediaRecorder.start(3.6e+6);
	        }

	        if (config.initCallback) {
	            config.initCallback(); // old code
	        }
	    };

	    /**
	     * @property {Array} timestamps - Array of time stamps
	     * @memberof MediaStreamRecorder
	     * @example
	     * console.log(recorder.timestamps);
	     */
	    this.timestamps = [];

	    function updateTimeStamp() {
	        self.timestamps.push(new Date().getTime());

	        if (typeof config.onTimeStamp === 'function') {
	            config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
	        }
	    }

	    function getMimeType(secondObject) {
	        if (mediaRecorder && mediaRecorder.mimeType) {
	            return mediaRecorder.mimeType;
	        }

	        return secondObject.mimeType || 'video/webm';
	    }

	    /**
	     * This method stops recording MediaStream.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        callback = callback || function() {};

	        self.manuallyStopped = true; // used inside the mediaRecorder.onerror

	        if (!mediaRecorder) {
	            return;
	        }

	        this.recordingCallback = callback;

	        if (mediaRecorder.state === 'recording') {
	            mediaRecorder.stop();
	        }

	        if (typeof config.timeSlice === 'number') {
	            setTimeout(function() {
	                self.blob = new Blob(arrayOfBlobs, {
	                    type: getMimeType(config)
	                });

	                self.recordingCallback(self.blob);
	            }, 100);
	        }
	    };

	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        if (!mediaRecorder) {
	            return;
	        }

	        if (mediaRecorder.state === 'recording') {
	            mediaRecorder.pause();
	        }
	    };

	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        if (!mediaRecorder) {
	            return;
	        }

	        if (mediaRecorder.state === 'paused') {
	            mediaRecorder.resume();
	        }
	    };

	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        if (mediaRecorder && mediaRecorder.state === 'recording') {
	            self.stop(clearRecordedDataCB);
	        }

	        clearRecordedDataCB();
	    };

	    function clearRecordedDataCB() {
	        arrayOfBlobs = [];
	        mediaRecorder = null;
	        self.timestamps = [];
	    }

	    // Reference to "MediaRecorder" object
	    var mediaRecorder;

	    /**
	     * Access to native MediaRecorder API
	     * @method
	     * @memberof MediaStreamRecorder
	     * @instance
	     * @example
	     * var internal = recorder.getInternalRecorder();
	     * internal.ondataavailable = function() {}; // override
	     * internal.stream, internal.onpause, internal.onstop, etc.
	     * @returns {Object} Returns internal recording object.
	     */
	    this.getInternalRecorder = function() {
	        return mediaRecorder;
	    };

	    function isMediaStreamActive() {
	        if ('active' in mediaStream) {
	            if (!mediaStream.active) {
	                return false;
	            }
	        } else if ('ended' in mediaStream) { // old hack
	            if (mediaStream.ended) {
	                return false;
	            }
	        }
	        return true;
	    }

	    /**
	     * @property {Blob} blob - Recorded data as "Blob" object.
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.stop(function() {
	     *     var blob = recorder.blob;
	     * });
	     */
	    this.blob = null;


	    /**
	     * Get MediaRecorder readonly state.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * var state = recorder.getState();
	     * @returns {String} Returns recording state.
	     */
	    this.getState = function() {
	        if (!mediaRecorder) {
	            return 'inactive';
	        }

	        return mediaRecorder.state || 'inactive';
	    };

	    // list of all recording states
	    var allStates = [];

	    /**
	     * Get MediaRecorder all recording states.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * var state = recorder.getAllStates();
	     * @returns {Array} Returns all recording states
	     */
	    this.getAllStates = function() {
	        return allStates;
	    };

	    // if any Track within the MediaStream is muted or not enabled at any time, 
	    // the browser will only record black frames 
	    // or silence since that is the content produced by the Track
	    // so we need to stopRecording as soon as any single track ends.
	    if (typeof config.checkForInactiveTracks === 'undefined') {
	        config.checkForInactiveTracks = false; // disable to minimize CPU usage
	    }

	    var self = this;

	    // this method checks if media stream is stopped
	    // or if any track is ended.
	    (function looper() {
	        if (!mediaRecorder || config.checkForInactiveTracks === false) {
	            return;
	        }

	        if (isMediaStreamActive() === false) {
	            if (!config.disableLogs) {
	                console.log('MediaStream seems stopped.');
	            }
	            self.stop();
	            return;
	        }

	        setTimeout(looper, 1000); // check every second
	    })();

	    // for debugging
	    this.name = 'MediaStreamRecorder';
	    this.toString = function() {
	        return this.name;
	    };
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
	}

	// source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
	// https://github.com/mattdiamond/Recorderjs#license-mit
	// ______________________
	// StereoAudioRecorder.js

	/**
	 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
	 * @summary JavaScript standalone object for stereo audio recording.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef StereoAudioRecorder
	 * @class
	 * @example
	 * var recorder = new StereoAudioRecorder(MediaStream, {
	 *     sampleRate: 44100,
	 *     bufferSize: 4096
	 * });
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
	 */

	function StereoAudioRecorder(mediaStream, config) {
	    if (!getTracks(mediaStream, 'audio').length) {
	        throw 'Your stream has no audio tracks.';
	    }

	    config = config || {};

	    var self = this;

	    // variables
	    var leftchannel = [];
	    var rightchannel = [];
	    var recording = false;
	    var recordingLength = 0;
	    var jsAudioNode;

	    var numberOfAudioChannels = 2;

	    /**
	     * Set sample rates such as 8K or 16K. Reference: http://stackoverflow.com/a/28977136/552182
	     * @property {number} desiredSampRate - Desired Bits per sample * 1000
	     * @memberof StereoAudioRecorder
	     * @instance
	     * @example
	     * var recorder = StereoAudioRecorder(mediaStream, {
	     *   desiredSampRate: 16 * 1000 // bits-per-sample * 1000
	     * });
	     */
	    var desiredSampRate = config.desiredSampRate;

	    // backward compatibility
	    if (config.leftChannel === true) {
	        numberOfAudioChannels = 1;
	    }

	    if (config.numberOfAudioChannels === 1) {
	        numberOfAudioChannels = 1;
	    }

	    if (!numberOfAudioChannels || numberOfAudioChannels < 1) {
	        numberOfAudioChannels = 2;
	    }

	    if (!config.disableLogs) {
	        console.log('StereoAudioRecorder is set to record number of channels: ' + numberOfAudioChannels);
	    }

	    // if any Track within the MediaStream is muted or not enabled at any time, 
	    // the browser will only record black frames 
	    // or silence since that is the content produced by the Track
	    // so we need to stopRecording as soon as any single track ends.
	    if (typeof config.checkForInactiveTracks === 'undefined') {
	        config.checkForInactiveTracks = true;
	    }

	    function isMediaStreamActive() {
	        if (config.checkForInactiveTracks === false) {
	            // always return "true"
	            return true;
	        }

	        if ('active' in mediaStream) {
	            if (!mediaStream.active) {
	                return false;
	            }
	        } else if ('ended' in mediaStream) { // old hack
	            if (mediaStream.ended) {
	                return false;
	            }
	        }
	        return true;
	    }

	    /**
	     * This method records MediaStream.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        if (isMediaStreamActive() === false) {
	            throw 'Please make sure MediaStream is active.';
	        }

	        resetVariables();

	        isAudioProcessStarted = isPaused = false;
	        recording = true;

	        if (typeof config.timeSlice !== 'undefined') {
	            looper();
	        }
	    };

	    function mergeLeftRightBuffers(config, callback) {
	        function mergeAudioBuffers(config, cb) {
	            var numberOfAudioChannels = config.numberOfAudioChannels;

	            // todo: "slice(0)" --- is it causes loop? Should be removed?
	            var leftBuffers = config.leftBuffers.slice(0);
	            var rightBuffers = config.rightBuffers.slice(0);
	            var sampleRate = config.sampleRate;
	            var internalInterleavedLength = config.internalInterleavedLength;
	            var desiredSampRate = config.desiredSampRate;

	            if (numberOfAudioChannels === 2) {
	                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
	                rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);

	                if (desiredSampRate) {
	                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
	                    rightBuffers = interpolateArray(rightBuffers, desiredSampRate, sampleRate);
	                }
	            }

	            if (numberOfAudioChannels === 1) {
	                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);

	                if (desiredSampRate) {
	                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
	                }
	            }

	            // set sample rate as desired sample rate
	            if (desiredSampRate) {
	                sampleRate = desiredSampRate;
	            }

	            // for changing the sampling rate, reference:
	            // http://stackoverflow.com/a/28977136/552182
	            function interpolateArray(data, newSampleRate, oldSampleRate) {
	                var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
	                var newData = [];
	                var springFactor = Number((data.length - 1) / (fitCount - 1));
	                newData[0] = data[0];
	                for (var i = 1; i < fitCount - 1; i++) {
	                    var tmp = i * springFactor;
	                    var before = Number(Math.floor(tmp)).toFixed();
	                    var after = Number(Math.ceil(tmp)).toFixed();
	                    var atPoint = tmp - before;
	                    newData[i] = linearInterpolate(data[before], data[after], atPoint);
	                }
	                newData[fitCount - 1] = data[data.length - 1];
	                return newData;
	            }

	            function linearInterpolate(before, after, atPoint) {
	                return before + (after - before) * atPoint;
	            }

	            function mergeBuffers(channelBuffer, rLength) {
	                var result = new Float64Array(rLength);
	                var offset = 0;
	                var lng = channelBuffer.length;

	                for (var i = 0; i < lng; i++) {
	                    var buffer = channelBuffer[i];
	                    result.set(buffer, offset);
	                    offset += buffer.length;
	                }

	                return result;
	            }

	            function interleave(leftChannel, rightChannel) {
	                var length = leftChannel.length + rightChannel.length;

	                var result = new Float64Array(length);

	                var inputIndex = 0;

	                for (var index = 0; index < length;) {
	                    result[index++] = leftChannel[inputIndex];
	                    result[index++] = rightChannel[inputIndex];
	                    inputIndex++;
	                }
	                return result;
	            }

	            function writeUTFBytes(view, offset, string) {
	                var lng = string.length;
	                for (var i = 0; i < lng; i++) {
	                    view.setUint8(offset + i, string.charCodeAt(i));
	                }
	            }

	            // interleave both channels together
	            var interleaved;

	            if (numberOfAudioChannels === 2) {
	                interleaved = interleave(leftBuffers, rightBuffers);
	            }

	            if (numberOfAudioChannels === 1) {
	                interleaved = leftBuffers;
	            }

	            var interleavedLength = interleaved.length;

	            // create wav file
	            var resultingBufferLength = 44 + interleavedLength * 2;

	            var buffer = new ArrayBuffer(resultingBufferLength);

	            var view = new DataView(buffer);

	            // RIFF chunk descriptor/identifier 
	            writeUTFBytes(view, 0, 'RIFF');

	            // RIFF chunk length
	            // changed "44" to "36" via #401
	            view.setUint32(4, 36 + interleavedLength * 2, true);

	            // RIFF type 
	            writeUTFBytes(view, 8, 'WAVE');

	            // format chunk identifier 
	            // FMT sub-chunk
	            writeUTFBytes(view, 12, 'fmt ');

	            // format chunk length 
	            view.setUint32(16, 16, true);

	            // sample format (raw)
	            view.setUint16(20, 1, true);

	            // stereo (2 channels)
	            view.setUint16(22, numberOfAudioChannels, true);

	            // sample rate 
	            view.setUint32(24, sampleRate, true);

	            // byte rate (sample rate * block align)
	            view.setUint32(28, sampleRate * numberOfAudioChannels * 2, true);

	            // block align (channel count * bytes per sample) 
	            view.setUint16(32, numberOfAudioChannels * 2, true);

	            // bits per sample 
	            view.setUint16(34, 16, true);

	            // data sub-chunk
	            // data chunk identifier 
	            writeUTFBytes(view, 36, 'data');

	            // data chunk length 
	            view.setUint32(40, interleavedLength * 2, true);

	            // write the PCM samples
	            var lng = interleavedLength;
	            var index = 44;
	            var volume = 1;
	            for (var i = 0; i < lng; i++) {
	                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
	                index += 2;
	            }

	            if (cb) {
	                return cb({
	                    buffer: buffer,
	                    view: view
	                });
	            }

	            postMessage({
	                buffer: buffer,
	                view: view
	            });
	        }

	        if (config.noWorker) {
	            mergeAudioBuffers(config, function(data) {
	                callback(data.buffer, data.view);
	            });
	            return;
	        }


	        var webWorker = processInWebWorker(mergeAudioBuffers);

	        webWorker.onmessage = function(event) {
	            callback(event.data.buffer, event.data.view);

	            // release memory
	            URL.revokeObjectURL(webWorker.workerURL);

	            // kill webworker (or Chrome will kill your page after ~25 calls)
	            webWorker.terminate();
	        };

	        webWorker.postMessage(config);
	    }

	    function processInWebWorker(_function) {
	        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
	            ';this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
	        ], {
	            type: 'application/javascript'
	        }));

	        var worker = new Worker(workerURL);
	        worker.workerURL = workerURL;
	        return worker;
	    }

	    /**
	     * This method stops recording MediaStream.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        callback = callback || function() {};

	        // stop recording
	        recording = false;

	        mergeLeftRightBuffers({
	            desiredSampRate: desiredSampRate,
	            sampleRate: sampleRate,
	            numberOfAudioChannels: numberOfAudioChannels,
	            internalInterleavedLength: recordingLength,
	            leftBuffers: leftchannel,
	            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel,
	            noWorker: config.noWorker
	        }, function(buffer, view) {
	            /**
	             * @property {Blob} blob - The recorded blob object.
	             * @memberof StereoAudioRecorder
	             * @example
	             * recorder.stop(function(){
	             *     var blob = recorder.blob;
	             * });
	             */
	            self.blob = new Blob([view], {
	                type: 'audio/wav'
	            });

	            /**
	             * @property {ArrayBuffer} buffer - The recorded buffer object.
	             * @memberof StereoAudioRecorder
	             * @example
	             * recorder.stop(function(){
	             *     var buffer = recorder.buffer;
	             * });
	             */
	            self.buffer = new ArrayBuffer(view.buffer.byteLength);

	            /**
	             * @property {DataView} view - The recorded data-view object.
	             * @memberof StereoAudioRecorder
	             * @example
	             * recorder.stop(function(){
	             *     var view = recorder.view;
	             * });
	             */
	            self.view = view;

	            self.sampleRate = desiredSampRate || sampleRate;
	            self.bufferSize = bufferSize;

	            // recorded audio length
	            self.length = recordingLength;

	            isAudioProcessStarted = false;

	            if (callback) {
	                callback(self.blob);
	            }
	        });
	    };

	    if (typeof RecordRTC.Storage === 'undefined') {
	        RecordRTC.Storage = {
	            AudioContextConstructor: null,
	            AudioContext: window.AudioContext || window.webkitAudioContext
	        };
	    }

	    if (!RecordRTC.Storage.AudioContextConstructor || RecordRTC.Storage.AudioContextConstructor.state === 'closed') {
	        RecordRTC.Storage.AudioContextConstructor = new RecordRTC.Storage.AudioContext();
	    }

	    var context = RecordRTC.Storage.AudioContextConstructor;

	    // creates an audio node from the microphone incoming stream
	    var audioInput = context.createMediaStreamSource(mediaStream);

	    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];

	    /**
	     * From the spec: This value controls how frequently the audioprocess event is
	     * dispatched and how many sample-frames need to be processed each call.
	     * Lower values for buffer size will result in a lower (better) latency.
	     * Higher values will be necessary to avoid audio breakup and glitches
	     * The size of the buffer (in sample-frames) which needs to
	     * be processed each time onprocessaudio is called.
	     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
	     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder = new StereoAudioRecorder(mediaStream, {
	     *     bufferSize: 4096
	     * });
	     */

	    // "0" means, let chrome decide the most accurate buffer-size for current platform.
	    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

	    if (legalBufferValues.indexOf(bufferSize) === -1) {
	        if (!config.disableLogs) {
	            console.log('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
	        }
	    }

	    if (context.createJavaScriptNode) {
	        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
	    } else if (context.createScriptProcessor) {
	        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
	    } else {
	        throw 'WebAudio API has no support on this browser.';
	    }

	    // connect the stream to the script processor
	    audioInput.connect(jsAudioNode);

	    if (!config.bufferSize) {
	        bufferSize = jsAudioNode.bufferSize; // device buffer-size
	    }

	    /**
	     * The sample rate (in sample-frames per second) at which the
	     * AudioContext handles audio. It is assumed that all AudioNodes
	     * in the context run at this rate. In making this assumption,
	     * sample-rate converters or "varispeed" processors are not supported
	     * in real-time processing.
	     * The sampleRate parameter describes the sample-rate of the
	     * linear PCM audio data in the buffer in sample-frames per second.
	     * An implementation must support sample-rates in at least
	     * the range 22050 to 96000.
	     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder = new StereoAudioRecorder(mediaStream, {
	     *     sampleRate: 44100
	     * });
	     */
	    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

	    if (sampleRate < 22050 || sampleRate > 96000) {
	        // Ref: http://stackoverflow.com/a/26303918/552182
	        if (!config.disableLogs) {
	            console.log('sample-rate must be under range 22050 and 96000.');
	        }
	    }

	    if (!config.disableLogs) {
	        if (config.desiredSampRate) {
	            console.log('Desired sample-rate: ' + config.desiredSampRate);
	        }
	    }

	    var isPaused = false;
	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPaused = true;
	    };

	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        if (isMediaStreamActive() === false) {
	            throw 'Please make sure MediaStream is active.';
	        }

	        if (!recording) {
	            if (!config.disableLogs) {
	                console.log('Seems recording has been restarted.');
	            }
	            this.record();
	            return;
	        }

	        isPaused = false;
	    };

	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        config.checkForInactiveTracks = false;

	        if (recording) {
	            this.stop(clearRecordedDataCB);
	        }

	        clearRecordedDataCB();
	    };

	    function resetVariables() {
	        leftchannel = [];
	        rightchannel = [];
	        recordingLength = 0;
	        isAudioProcessStarted = false;
	        recording = false;
	        isPaused = false;
	        context = null;

	        self.leftchannel = leftchannel;
	        self.rightchannel = rightchannel;
	        self.numberOfAudioChannels = numberOfAudioChannels;
	        self.desiredSampRate = desiredSampRate;
	        self.sampleRate = sampleRate;
	        self.recordingLength = recordingLength;

	        intervalsBasedBuffers = {
	            left: [],
	            right: [],
	            recordingLength: 0
	        };
	    }

	    function clearRecordedDataCB() {
	        if (jsAudioNode) {
	            jsAudioNode.onaudioprocess = null;
	            jsAudioNode.disconnect();
	            jsAudioNode = null;
	        }

	        if (audioInput) {
	            audioInput.disconnect();
	            audioInput = null;
	        }

	        resetVariables();
	    }

	    // for debugging
	    this.name = 'StereoAudioRecorder';
	    this.toString = function() {
	        return this.name;
	    };

	    var isAudioProcessStarted = false;

	    function onAudioProcessDataAvailable(e) {
	        if (isPaused) {
	            return;
	        }

	        if (isMediaStreamActive() === false) {
	            if (!config.disableLogs) {
	                console.log('MediaStream seems stopped.');
	            }
	            jsAudioNode.disconnect();
	            recording = false;
	        }

	        if (!recording) {
	            if (audioInput) {
	                audioInput.disconnect();
	                audioInput = null;
	            }
	            return;
	        }

	        /**
	         * This method is called on "onaudioprocess" event's first invocation.
	         * @method {function} onAudioProcessStarted
	         * @memberof StereoAudioRecorder
	         * @example
	         * recorder.onAudioProcessStarted: function() { };
	         */
	        if (!isAudioProcessStarted) {
	            isAudioProcessStarted = true;
	            if (config.onAudioProcessStarted) {
	                config.onAudioProcessStarted();
	            }

	            if (config.initCallback) {
	                config.initCallback();
	            }
	        }

	        var left = e.inputBuffer.getChannelData(0);

	        // we clone the samples
	        var chLeft = new Float32Array(left);
	        leftchannel.push(chLeft);

	        if (numberOfAudioChannels === 2) {
	            var right = e.inputBuffer.getChannelData(1);
	            var chRight = new Float32Array(right);
	            rightchannel.push(chRight);
	        }

	        recordingLength += bufferSize;

	        // export raw PCM
	        self.recordingLength = recordingLength;

	        if (typeof config.timeSlice !== 'undefined') {
	            intervalsBasedBuffers.recordingLength += bufferSize;
	            intervalsBasedBuffers.left.push(chLeft);

	            if (numberOfAudioChannels === 2) {
	                intervalsBasedBuffers.right.push(chRight);
	            }
	        }
	    }

	    jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;

	    // to prevent self audio to be connected with speakers
	    if (context.createMediaStreamDestination) {
	        jsAudioNode.connect(context.createMediaStreamDestination());
	    } else {
	        jsAudioNode.connect(context.destination);
	    }

	    // export raw PCM
	    this.leftchannel = leftchannel;
	    this.rightchannel = rightchannel;
	    this.numberOfAudioChannels = numberOfAudioChannels;
	    this.desiredSampRate = desiredSampRate;
	    this.sampleRate = sampleRate;
	    self.recordingLength = recordingLength;

	    // helper for intervals based blobs
	    var intervalsBasedBuffers = {
	        left: [],
	        right: [],
	        recordingLength: 0
	    };

	    // this looper is used to support intervals based blobs (via timeSlice+ondataavailable)
	    function looper() {
	        if (!recording || typeof config.ondataavailable !== 'function' || typeof config.timeSlice === 'undefined') {
	            return;
	        }

	        if (intervalsBasedBuffers.left.length) {
	            mergeLeftRightBuffers({
	                desiredSampRate: desiredSampRate,
	                sampleRate: sampleRate,
	                numberOfAudioChannels: numberOfAudioChannels,
	                internalInterleavedLength: intervalsBasedBuffers.recordingLength,
	                leftBuffers: intervalsBasedBuffers.left,
	                rightBuffers: numberOfAudioChannels === 1 ? [] : intervalsBasedBuffers.right
	            }, function(buffer, view) {
	                var blob = new Blob([view], {
	                    type: 'audio/wav'
	                });
	                config.ondataavailable(blob);

	                setTimeout(looper, config.timeSlice);
	            });

	            intervalsBasedBuffers = {
	                left: [],
	                right: [],
	                recordingLength: 0
	            };
	        } else {
	            setTimeout(looper, config.timeSlice);
	        }
	    }
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.StereoAudioRecorder = StereoAudioRecorder;
	}

	// _________________
	// CanvasRecorder.js

	/**
	 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
	 * @summary HTML2Canvas recording into video WebM.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef CanvasRecorder
	 * @class
	 * @example
	 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
	 * @param {object} config - {disableLogs:true, initCallback: function}
	 */

	function CanvasRecorder(htmlElement, config) {
	    if (typeof html2canvas === 'undefined') {
	        throw 'Please link: https://www.webrtc-experiment.com/screenshot.js';
	    }

	    config = config || {};
	    if (!config.frameInterval) {
	        config.frameInterval = 10;
	    }

	    // via DetectRTC.js
	    var isCanvasSupportsStreamCapturing = false;
	    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
	        if (item in document.createElement('canvas')) {
	            isCanvasSupportsStreamCapturing = true;
	        }
	    });

	    var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;

	    var chromeVersion = 50;
	    var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	    if (_isChrome && matchArray && matchArray[2]) {
	        chromeVersion = parseInt(matchArray[2], 10);
	    }

	    if (_isChrome && chromeVersion < 52) {
	        isCanvasSupportsStreamCapturing = false;
	    }

	    if (config.useWhammyRecorder) {
	        isCanvasSupportsStreamCapturing = false;
	    }

	    var globalCanvas, mediaStreamRecorder;

	    if (isCanvasSupportsStreamCapturing) {
	        if (!config.disableLogs) {
	            console.log('Your browser supports both MediRecorder API and canvas.captureStream!');
	        }

	        if (htmlElement instanceof HTMLCanvasElement) {
	            globalCanvas = htmlElement;
	        } else if (htmlElement instanceof CanvasRenderingContext2D) {
	            globalCanvas = htmlElement.canvas;
	        } else {
	            throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
	        }
	    } else if (!!navigator.mozGetUserMedia) {
	        if (!config.disableLogs) {
	            console.error('Canvas recording is NOT supported in Firefox.');
	        }
	    }

	    var isRecording;

	    /**
	     * This method records Canvas.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        isRecording = true;

	        if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
	            // CanvasCaptureMediaStream
	            var canvasMediaStream;
	            if ('captureStream' in globalCanvas) {
	                canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
	            } else if ('mozCaptureStream' in globalCanvas) {
	                canvasMediaStream = globalCanvas.mozCaptureStream(25);
	            } else if ('webkitCaptureStream' in globalCanvas) {
	                canvasMediaStream = globalCanvas.webkitCaptureStream(25);
	            }

	            try {
	                var mdStream = new MediaStream();
	                mdStream.addTrack(getTracks(canvasMediaStream, 'video')[0]);
	                canvasMediaStream = mdStream;
	            } catch (e) {}

	            if (!canvasMediaStream) {
	                throw 'captureStream API are NOT available.';
	            }

	            // Note: Jan 18, 2016 status is that, 
	            // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.
	            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
	                mimeType: config.mimeType || 'video/webm'
	            });
	            mediaStreamRecorder.record();
	        } else {
	            whammy.frames = [];
	            lastTime = new Date().getTime();
	            drawCanvasFrame();
	        }

	        if (config.initCallback) {
	            config.initCallback();
	        }
	    };

	    this.getWebPImages = function(callback) {
	        if (htmlElement.nodeName.toLowerCase() !== 'canvas') {
	            callback();
	            return;
	        }

	        var framesLength = whammy.frames.length;
	        whammy.frames.forEach(function(frame, idx) {
	            var framesRemaining = framesLength - idx;
	            if (!config.disableLogs) {
	                console.log(framesRemaining + '/' + framesLength + ' frames remaining');
	            }

	            if (config.onEncodingCallback) {
	                config.onEncodingCallback(framesRemaining, framesLength);
	            }

	            var webp = frame.image.toDataURL('image/webp', 1);
	            whammy.frames[idx].image = webp;
	        });

	        if (!config.disableLogs) {
	            console.log('Generating WebM');
	        }

	        callback();
	    };

	    /**
	     * This method stops recording Canvas.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        isRecording = false;

	        var that = this;

	        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
	            mediaStreamRecorder.stop(callback);
	            return;
	        }

	        this.getWebPImages(function() {
	            /**
	             * @property {Blob} blob - Recorded frames in video/webm blob.
	             * @memberof CanvasRecorder
	             * @example
	             * recorder.stop(function() {
	             *     var blob = recorder.blob;
	             * });
	             */
	            whammy.compile(function(blob) {
	                if (!config.disableLogs) {
	                    console.log('Recording finished!');
	                }

	                that.blob = blob;

	                if (that.blob.forEach) {
	                    that.blob = new Blob([], {
	                        type: 'video/webm'
	                    });
	                }

	                if (callback) {
	                    callback(that.blob);
	                }

	                whammy.frames = [];
	            });
	        });
	    };

	    var isPausedRecording = false;

	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPausedRecording = true;

	        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
	            mediaStreamRecorder.pause();
	            return;
	        }
	    };

	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        isPausedRecording = false;

	        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
	            mediaStreamRecorder.resume();
	            return;
	        }

	        if (!isRecording) {
	            this.record();
	        }
	    };

	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        if (isRecording) {
	            this.stop(clearRecordedDataCB);
	        }
	        clearRecordedDataCB();
	    };

	    function clearRecordedDataCB() {
	        whammy.frames = [];
	        isRecording = false;
	        isPausedRecording = false;
	    }

	    // for debugging
	    this.name = 'CanvasRecorder';
	    this.toString = function() {
	        return this.name;
	    };

	    function cloneCanvas() {
	        //create a new canvas
	        var newCanvas = document.createElement('canvas');
	        var context = newCanvas.getContext('2d');

	        //set dimensions
	        newCanvas.width = htmlElement.width;
	        newCanvas.height = htmlElement.height;

	        //apply the old canvas to the new one
	        context.drawImage(htmlElement, 0, 0);

	        //return the new canvas
	        return newCanvas;
	    }

	    function drawCanvasFrame() {
	        if (isPausedRecording) {
	            lastTime = new Date().getTime();
	            return setTimeout(drawCanvasFrame, 500);
	        }

	        if (htmlElement.nodeName.toLowerCase() === 'canvas') {
	            var duration = new Date().getTime() - lastTime;
	            // via #206, by Jack i.e. @Seymourr
	            lastTime = new Date().getTime();

	            whammy.frames.push({
	                image: cloneCanvas(),
	                duration: duration
	            });

	            if (isRecording) {
	                setTimeout(drawCanvasFrame, config.frameInterval);
	            }
	            return;
	        }

	        html2canvas(htmlElement, {
	            grabMouse: typeof config.showMousePointer === 'undefined' || config.showMousePointer,
	            onrendered: function(canvas) {
	                var duration = new Date().getTime() - lastTime;
	                if (!duration) {
	                    return setTimeout(drawCanvasFrame, config.frameInterval);
	                }

	                // via #206, by Jack i.e. @Seymourr
	                lastTime = new Date().getTime();

	                whammy.frames.push({
	                    image: canvas.toDataURL('image/webp', 1),
	                    duration: duration
	                });

	                if (isRecording) {
	                    setTimeout(drawCanvasFrame, config.frameInterval);
	                }
	            }
	        });
	    }

	    var lastTime = new Date().getTime();

	    var whammy = new Whammy.Video(100);
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.CanvasRecorder = CanvasRecorder;
	}

	// _________________
	// WhammyRecorder.js

	/**
	 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
	 * @summary Video recording feature in Chrome.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef WhammyRecorder
	 * @class
	 * @example
	 * var recorder = new WhammyRecorder(mediaStream);
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
	 */

	function WhammyRecorder(mediaStream, config) {

	    config = config || {};

	    if (!config.frameInterval) {
	        config.frameInterval = 10;
	    }

	    if (!config.disableLogs) {
	        console.log('Using frames-interval:', config.frameInterval);
	    }

	    /**
	     * This method records video.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        if (!config.width) {
	            config.width = 320;
	        }

	        if (!config.height) {
	            config.height = 240;
	        }

	        if (!config.video) {
	            config.video = {
	                width: config.width,
	                height: config.height
	            };
	        }

	        if (!config.canvas) {
	            config.canvas = {
	                width: config.width,
	                height: config.height
	            };
	        }

	        canvas.width = config.canvas.width || 320;
	        canvas.height = config.canvas.height || 240;

	        context = canvas.getContext('2d');

	        // setting defaults
	        if (config.video && config.video instanceof HTMLVideoElement) {
	            video = config.video.cloneNode();

	            if (config.initCallback) {
	                config.initCallback();
	            }
	        } else {
	            video = document.createElement('video');

	            setSrcObject(mediaStream, video);

	            video.onloadedmetadata = function() { // "onloadedmetadata" may NOT work in FF?
	                if (config.initCallback) {
	                    config.initCallback();
	                }
	            };

	            video.width = config.video.width;
	            video.height = config.video.height;
	        }

	        video.muted = true;
	        video.play();

	        lastTime = new Date().getTime();
	        whammy = new Whammy.Video();

	        if (!config.disableLogs) {
	            console.log('canvas resolutions', canvas.width, '*', canvas.height);
	            console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
	        }

	        drawFrames(config.frameInterval);
	    };

	    /**
	     * Draw and push frames to Whammy
	     * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
	     */
	    function drawFrames(frameInterval) {
	        frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;

	        var duration = new Date().getTime() - lastTime;
	        if (!duration) {
	            return setTimeout(drawFrames, frameInterval, frameInterval);
	        }

	        if (isPausedRecording) {
	            lastTime = new Date().getTime();
	            return setTimeout(drawFrames, 100);
	        }

	        // via #206, by Jack i.e. @Seymourr
	        lastTime = new Date().getTime();

	        if (video.paused) {
	            // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
	            // Tweak for Android Chrome
	            video.play();
	        }

	        context.drawImage(video, 0, 0, canvas.width, canvas.height);
	        whammy.frames.push({
	            duration: duration,
	            image: canvas.toDataURL('image/webp')
	        });

	        if (!isStopDrawing) {
	            setTimeout(drawFrames, frameInterval, frameInterval);
	        }
	    }

	    function asyncLoop(o) {
	        var i = -1,
	            length = o.length;

	        (function loop() {
	            i++;
	            if (i === length) {
	                o.callback();
	                return;
	            }

	            // "setTimeout" added by Jim McLeod
	            setTimeout(function() {
	                o.functionToLoop(loop, i);
	            }, 1);
	        })();
	    }


	    /**
	     * remove black frames from the beginning to the specified frame
	     * @param {Array} _frames - array of frames to be checked
	     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
	     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
	     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
	     * @returns {Array} - array of frames
	     */
	    // pull#293 by @volodalexey
	    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, callback) {
	        var localCanvas = document.createElement('canvas');
	        localCanvas.width = canvas.width;
	        localCanvas.height = canvas.height;
	        var context2d = localCanvas.getContext('2d');
	        var resultFrames = [];
	        var endCheckFrame = _frames.length;
	        var sampleColor = {
	            r: 0,
	            g: 0,
	            b: 0
	        };
	        var maxColorDifference = Math.sqrt(
	            Math.pow(255, 2) +
	            Math.pow(255, 2) +
	            Math.pow(255, 2)
	        );
	        var pixTolerance = 0;
	        var frameTolerance = 0;
	        var doNotCheckNext = false;

	        asyncLoop({
	            length: endCheckFrame,
	            functionToLoop: function(loop, f) {
	                var matchPixCount, endPixCheck, maxPixCount;

	                var finishImage = function() {
	                    if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) ; else {
	                        // console.log('frame is passed : ' + f);
	                        {
	                            doNotCheckNext = true;
	                        }
	                        resultFrames.push(_frames[f]);
	                    }
	                    loop();
	                };

	                if (!doNotCheckNext) {
	                    var image = new Image();
	                    image.onload = function() {
	                        context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
	                        var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
	                        matchPixCount = 0;
	                        endPixCheck = imageData.data.length;
	                        maxPixCount = imageData.data.length / 4;

	                        for (var pix = 0; pix < endPixCheck; pix += 4) {
	                            var currentColor = {
	                                r: imageData.data[pix],
	                                g: imageData.data[pix + 1],
	                                b: imageData.data[pix + 2]
	                            };
	                            var colorDifference = Math.sqrt(
	                                Math.pow(currentColor.r - sampleColor.r, 2) +
	                                Math.pow(currentColor.g - sampleColor.g, 2) +
	                                Math.pow(currentColor.b - sampleColor.b, 2)
	                            );
	                            // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)
	                            if (colorDifference <= maxColorDifference * pixTolerance) {
	                                matchPixCount++;
	                            }
	                        }
	                        finishImage();
	                    };
	                    image.src = _frames[f].image;
	                } else {
	                    finishImage();
	                }
	            },
	            callback: function() {
	                resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

	                if (resultFrames.length <= 0) {
	                    // at least one last frame should be available for next manipulation
	                    // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
	                    resultFrames.push(_frames[_frames.length - 1]);
	                }
	                callback(resultFrames);
	            }
	        });
	    }

	    var isStopDrawing = false;

	    /**
	     * This method stops recording video.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        callback = callback || function() {};

	        isStopDrawing = true;

	        var _this = this;
	        // analyse of all frames takes some time!
	        setTimeout(function() {
	            // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
	            // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
	            // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
	            dropBlackFrames(whammy.frames, -1, null, null, function(frames) {
	                whammy.frames = frames;

	                // to display advertisement images!
	                if (config.advertisement && config.advertisement.length) {
	                    whammy.frames = config.advertisement.concat(whammy.frames);
	                }

	                /**
	                 * @property {Blob} blob - Recorded frames in video/webm blob.
	                 * @memberof WhammyRecorder
	                 * @example
	                 * recorder.stop(function() {
	                 *     var blob = recorder.blob;
	                 * });
	                 */
	                whammy.compile(function(blob) {
	                    _this.blob = blob;

	                    if (_this.blob.forEach) {
	                        _this.blob = new Blob([], {
	                            type: 'video/webm'
	                        });
	                    }

	                    if (callback) {
	                        callback(_this.blob);
	                    }
	                });
	            });
	        }, 10);
	    };

	    var isPausedRecording = false;

	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPausedRecording = true;
	    };

	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        isPausedRecording = false;

	        if (isStopDrawing) {
	            this.record();
	        }
	    };

	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        if (!isStopDrawing) {
	            this.stop(clearRecordedDataCB);
	        }
	        clearRecordedDataCB();
	    };

	    function clearRecordedDataCB() {
	        whammy.frames = [];
	        isStopDrawing = true;
	        isPausedRecording = false;
	    }

	    // for debugging
	    this.name = 'WhammyRecorder';
	    this.toString = function() {
	        return this.name;
	    };

	    var canvas = document.createElement('canvas');
	    var context = canvas.getContext('2d');

	    var video;
	    var lastTime;
	    var whammy;
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.WhammyRecorder = WhammyRecorder;
	}

	// https://github.com/antimatter15/whammy/blob/master/LICENSE
	// _________
	// Whammy.js

	// todo: Firefox now supports webp for webm containers!
	// their MediaRecorder implementation works well!
	// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

	/**
	 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
	 * @summary A real time javascript webm encoder based on a canvas hack.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef Whammy
	 * @class
	 * @example
	 * var recorder = new Whammy().Video(15);
	 * recorder.add(context || canvas || dataURL);
	 * var output = recorder.compile();
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */

	var Whammy = (function() {
	    // a more abstract-ish API

	    function WhammyVideo(duration) {
	        this.frames = [];
	        this.duration = duration || 1;
	        this.quality = 0.8;
	    }

	    /**
	     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
	     * @method
	     * @memberof Whammy
	     * @example
	     * recorder = new Whammy().Video(0.8, 100);
	     * recorder.add(canvas || context || 'image/webp');
	     * @param {string} frame - Canvas || Context || image/webp
	     * @param {number} duration - Stick a duration (in milliseconds)
	     */
	    WhammyVideo.prototype.add = function(frame, duration) {
	        if ('canvas' in frame) { //CanvasRenderingContext2D
	            frame = frame.canvas;
	        }

	        if ('toDataURL' in frame) {
	            frame = frame.toDataURL('image/webp', this.quality);
	        }

	        if (!(/^data:image\/webp;base64,/ig).test(frame)) {
	            throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
	        }
	        this.frames.push({
	            image: frame,
	            duration: duration || this.duration
	        });
	    };

	    function processInWebWorker(_function) {
	        var blob = URL.createObjectURL(new Blob([_function.toString(),
	            'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
	        ], {
	            type: 'application/javascript'
	        }));

	        var worker = new Worker(blob);
	        URL.revokeObjectURL(blob);
	        return worker;
	    }

	    function whammyInWebWorker(frames) {
	        function ArrayToWebM(frames) {
	            var info = checkFrames(frames);
	            if (!info) {
	                return [];
	            }

	            var clusterMaxDuration = 30000;

	            var EBML = [{
	                'id': 0x1a45dfa3, // EBML
	                'data': [{
	                    'data': 1,
	                    'id': 0x4286 // EBMLVersion
	                }, {
	                    'data': 1,
	                    'id': 0x42f7 // EBMLReadVersion
	                }, {
	                    'data': 4,
	                    'id': 0x42f2 // EBMLMaxIDLength
	                }, {
	                    'data': 8,
	                    'id': 0x42f3 // EBMLMaxSizeLength
	                }, {
	                    'data': 'webm',
	                    'id': 0x4282 // DocType
	                }, {
	                    'data': 2,
	                    'id': 0x4287 // DocTypeVersion
	                }, {
	                    'data': 2,
	                    'id': 0x4285 // DocTypeReadVersion
	                }]
	            }, {
	                'id': 0x18538067, // Segment
	                'data': [{
	                    'id': 0x1549a966, // Info
	                    'data': [{
	                        'data': 1e6, //do things in millisecs (num of nanosecs for duration scale)
	                        'id': 0x2ad7b1 // TimecodeScale
	                    }, {
	                        'data': 'whammy',
	                        'id': 0x4d80 // MuxingApp
	                    }, {
	                        'data': 'whammy',
	                        'id': 0x5741 // WritingApp
	                    }, {
	                        'data': doubleToString(info.duration),
	                        'id': 0x4489 // Duration
	                    }]
	                }, {
	                    'id': 0x1654ae6b, // Tracks
	                    'data': [{
	                        'id': 0xae, // TrackEntry
	                        'data': [{
	                            'data': 1,
	                            'id': 0xd7 // TrackNumber
	                        }, {
	                            'data': 1,
	                            'id': 0x73c5 // TrackUID
	                        }, {
	                            'data': 0,
	                            'id': 0x9c // FlagLacing
	                        }, {
	                            'data': 'und',
	                            'id': 0x22b59c // Language
	                        }, {
	                            'data': 'V_VP8',
	                            'id': 0x86 // CodecID
	                        }, {
	                            'data': 'VP8',
	                            'id': 0x258688 // CodecName
	                        }, {
	                            'data': 1,
	                            'id': 0x83 // TrackType
	                        }, {
	                            'id': 0xe0, // Video
	                            'data': [{
	                                'data': info.width,
	                                'id': 0xb0 // PixelWidth
	                            }, {
	                                'data': info.height,
	                                'id': 0xba // PixelHeight
	                            }]
	                        }]
	                    }]
	                }]
	            }];

	            //Generate clusters (max duration)
	            var frameNumber = 0;
	            var clusterTimecode = 0;
	            while (frameNumber < frames.length) {

	                var clusterFrames = [];
	                var clusterDuration = 0;
	                do {
	                    clusterFrames.push(frames[frameNumber]);
	                    clusterDuration += frames[frameNumber].duration;
	                    frameNumber++;
	                } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

	                var clusterCounter = 0;
	                var cluster = {
	                    'id': 0x1f43b675, // Cluster
	                    'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
	                }; //Add cluster to segment
	                EBML[1].data.push(cluster);
	                clusterTimecode += clusterDuration;
	            }

	            return generateEBML(EBML);
	        }

	        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
	            return [{
	                'data': clusterTimecode,
	                'id': 0xe7 // Timecode
	            }].concat(clusterFrames.map(function(webp) {
	                var block = makeSimpleBlock({
	                    discardable: 0,
	                    frame: webp.data.slice(4),
	                    invisible: 0,
	                    keyframe: 1,
	                    lacing: 0,
	                    trackNum: 1,
	                    timecode: Math.round(clusterCounter)
	                });
	                clusterCounter += webp.duration;
	                return {
	                    data: block,
	                    id: 0xa3
	                };
	            }));
	        }

	        // sums the lengths of all the frames and gets the duration

	        function checkFrames(frames) {
	            if (!frames[0]) {
	                postMessage({
	                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
	                });
	                return;
	            }

	            var width = frames[0].width,
	                height = frames[0].height,
	                duration = frames[0].duration;

	            for (var i = 1; i < frames.length; i++) {
	                duration += frames[i].duration;
	            }
	            return {
	                duration: duration,
	                width: width,
	                height: height
	            };
	        }

	        function numToBuffer(num) {
	            var parts = [];
	            while (num > 0) {
	                parts.push(num & 0xff);
	                num = num >> 8;
	            }
	            return new Uint8Array(parts.reverse());
	        }

	        function strToBuffer(str) {
	            return new Uint8Array(str.split('').map(function(e) {
	                return e.charCodeAt(0);
	            }));
	        }

	        function bitsToBuffer(bits) {
	            var data = [];
	            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
	            bits = pad + bits;
	            for (var i = 0; i < bits.length; i += 8) {
	                data.push(parseInt(bits.substr(i, 8), 2));
	            }
	            return new Uint8Array(data);
	        }

	        function generateEBML(json) {
	            var ebml = [];
	            for (var i = 0; i < json.length; i++) {
	                var data = json[i].data;

	                if (typeof data === 'object') {
	                    data = generateEBML(data);
	                }

	                if (typeof data === 'number') {
	                    data = bitsToBuffer(data.toString(2));
	                }

	                if (typeof data === 'string') {
	                    data = strToBuffer(data);
	                }

	                var len = data.size || data.byteLength || data.length;
	                var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
	                var sizeToString = len.toString(2);
	                var padded = (new Array((zeroes * 7 + 7 + 1) - sizeToString.length)).join('0') + sizeToString;
	                var size = (new Array(zeroes)).join('0') + '1' + padded;

	                ebml.push(numToBuffer(json[i].id));
	                ebml.push(bitsToBuffer(size));
	                ebml.push(data);
	            }

	            return new Blob(ebml, {
	                type: 'video/webm'
	            });
	        }

	        function makeSimpleBlock(data) {
	            var flags = 0;

	            {
	                flags |= 128;
	            }

	            if (data.trackNum > 127) {
	                throw 'TrackNumber > 127 not supported';
	            }

	            var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
	                return String.fromCharCode(e);
	            }).join('') + data.frame;

	            return out;
	        }

	        function parseWebP(riff) {
	            var VP8 = riff.RIFF[0].WEBP[0];

	            var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header
	            for (var i = 0, c = []; i < 4; i++) {
	                c[i] = VP8.charCodeAt(frameStart + 3 + i);
	            }

	            var width, height, tmp;

	            //the code below is literally copied verbatim from the bitstream spec
	            tmp = (c[1] << 8) | c[0];
	            width = tmp & 0x3FFF;
	            tmp = (c[3] << 8) | c[2];
	            height = tmp & 0x3FFF;
	            return {
	                width: width,
	                height: height,
	                data: VP8,
	                riff: riff
	            };
	        }

	        function getStrLength(string, offset) {
	            return parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
	                var unpadded = i.charCodeAt(0).toString(2);
	                return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
	            }).join(''), 2);
	        }

	        function parseRIFF(string) {
	            var offset = 0;
	            var chunks = {};

	            while (offset < string.length) {
	                var id = string.substr(offset, 4);
	                var len = getStrLength(string, offset);
	                var data = string.substr(offset + 4 + 4, len);
	                offset += 4 + 4 + len;
	                chunks[id] = chunks[id] || [];

	                if (id === 'RIFF' || id === 'LIST') {
	                    chunks[id].push(parseRIFF(data));
	                } else {
	                    chunks[id].push(data);
	                }
	            }
	            return chunks;
	        }

	        function doubleToString(num) {
	            return [].slice.call(
	                new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
	                return String.fromCharCode(e);
	            }).reverse().join('');
	        }

	        var webm = new ArrayToWebM(frames.map(function(frame) {
	            var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
	            webp.duration = frame.duration;
	            return webp;
	        }));

	        postMessage(webm);
	    }

	    /**
	     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof Whammy
	     * @example
	     * recorder = new Whammy().Video(0.8, 100);
	     * recorder.compile(function(blob) {
	     *    // blob.size - blob.type
	     * });
	     */
	    WhammyVideo.prototype.compile = function(callback) {
	        var webWorker = processInWebWorker(whammyInWebWorker);

	        webWorker.onmessage = function(event) {
	            if (event.data.error) {
	                console.error(event.data.error);
	                return;
	            }
	            callback(event.data);
	        };

	        webWorker.postMessage(this.frames);
	    };

	    return {
	        /**
	         * A more abstract-ish API.
	         * @method
	         * @memberof Whammy
	         * @example
	         * recorder = new Whammy().Video(0.8, 100);
	         * @param {?number} speed - 0.8
	         * @param {?number} quality - 100
	         */
	        Video: WhammyVideo
	    };
	})();

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.Whammy = Whammy;
	}

	// ______________ (indexed-db)
	// DiskStorage.js

	/**
	 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
	 * @summary Writing blobs into IndexedDB.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @example
	 * DiskStorage.Store({
	 *     audioBlob: yourAudioBlob,
	 *     videoBlob: yourVideoBlob,
	 *     gifBlob  : yourGifBlob
	 * });
	 * DiskStorage.Fetch(function(dataURL, type) {
	 *     if(type === 'audioBlob') { }
	 *     if(type === 'videoBlob') { }
	 *     if(type === 'gifBlob')   { }
	 * });
	 * // DiskStorage.dataStoreName = 'recordRTC';
	 * // DiskStorage.onError = function(error) { };
	 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
	 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
	 * @property {function} Store - This method stores blobs in IndexedDB.
	 * @property {function} onError - This function is invoked for any known/unknown error.
	 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */


	var DiskStorage = {
	    /**
	     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
	     * @method
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.init();
	     */
	    init: function() {
	        var self = this;

	        if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
	            console.error('IndexedDB API are not available in this browser.');
	            return;
	        }

	        var dbVersion = 1;
	        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
	            db;
	        var request = indexedDB.open(dbName, dbVersion);

	        function createObjectStore(dataBase) {
	            dataBase.createObjectStore(self.dataStoreName);
	        }

	        function putInDB() {
	            var transaction = db.transaction([self.dataStoreName], 'readwrite');

	            if (self.videoBlob) {
	                transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
	            }

	            if (self.gifBlob) {
	                transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
	            }

	            if (self.audioBlob) {
	                transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
	            }

	            function getFromStore(portionName) {
	                transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
	                    if (self.callback) {
	                        self.callback(event.target.result, portionName);
	                    }
	                };
	            }

	            getFromStore('audioBlob');
	            getFromStore('videoBlob');
	            getFromStore('gifBlob');
	        }

	        request.onerror = self.onError;

	        request.onsuccess = function() {
	            db = request.result;
	            db.onerror = self.onError;

	            if (db.setVersion) {
	                if (db.version !== dbVersion) {
	                    var setVersion = db.setVersion(dbVersion);
	                    setVersion.onsuccess = function() {
	                        createObjectStore(db);
	                        putInDB();
	                    };
	                } else {
	                    putInDB();
	                }
	            } else {
	                putInDB();
	            }
	        };
	        request.onupgradeneeded = function(event) {
	            createObjectStore(event.target.result);
	        };
	    },
	    /**
	     * This method fetches stored blobs from IndexedDB.
	     * @method
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.Fetch(function(dataURL, type) {
	     *     if(type === 'audioBlob') { }
	     *     if(type === 'videoBlob') { }
	     *     if(type === 'gifBlob')   { }
	     * });
	     */
	    Fetch: function(callback) {
	        this.callback = callback;
	        this.init();

	        return this;
	    },
	    /**
	     * This method stores blobs in IndexedDB.
	     * @method
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.Store({
	     *     audioBlob: yourAudioBlob,
	     *     videoBlob: yourVideoBlob,
	     *     gifBlob  : yourGifBlob
	     * });
	     */
	    Store: function(config) {
	        this.audioBlob = config.audioBlob;
	        this.videoBlob = config.videoBlob;
	        this.gifBlob = config.gifBlob;

	        this.init();

	        return this;
	    },
	    /**
	     * This function is invoked for any known/unknown error.
	     * @method
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.onError = function(error){
	     *     alerot( JSON.stringify(error) );
	     * };
	     */
	    onError: function(error) {
	        console.error(JSON.stringify(error, null, '\t'));
	    },

	    /**
	     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.dataStoreName = 'recordRTC';
	     */
	    dataStoreName: 'recordRTC',
	    dbName: null
	};

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.DiskStorage = DiskStorage;
	}

	// ______________
	// GifRecorder.js

	/**
	 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef GifRecorder
	 * @class
	 * @example
	 * var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     img.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
	 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
	 */

	function GifRecorder(mediaStream, config) {
	    if (typeof GIFEncoder === 'undefined') {
	        var script = document.createElement('script');
	        script.src = 'https://www.webrtc-experiment.com/gif-recorder.js';
	        (document.body || document.documentElement).appendChild(script);
	    }

	    config = config || {};

	    var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;

	    /**
	     * This method records MediaStream.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        if (typeof GIFEncoder === 'undefined') {
	            setTimeout(self.record, 1000);
	            return;
	        }

	        if (!isLoadedMetaData) {
	            setTimeout(self.record, 1000);
	            return;
	        }

	        if (!isHTMLObject) {
	            if (!config.width) {
	                config.width = video.offsetWidth || 320;
	            }

	            if (!config.height) {
	                config.height = video.offsetHeight || 240;
	            }

	            if (!config.video) {
	                config.video = {
	                    width: config.width,
	                    height: config.height
	                };
	            }

	            if (!config.canvas) {
	                config.canvas = {
	                    width: config.width,
	                    height: config.height
	                };
	            }

	            canvas.width = config.canvas.width || 320;
	            canvas.height = config.canvas.height || 240;

	            video.width = config.video.width || 320;
	            video.height = config.video.height || 240;
	        }

	        // external library to record as GIF images
	        gifEncoder = new GIFEncoder();

	        // void setRepeat(int iter) 
	        // Sets the number of times the set of GIF frames should be played. 
	        // Default is 1; 0 means play indefinitely.
	        gifEncoder.setRepeat(0);

	        // void setFrameRate(Number fps) 
	        // Sets frame rate in frames per second. 
	        // Equivalent to setDelay(1000/fps).
	        // Using "setDelay" instead of "setFrameRate"
	        gifEncoder.setDelay(config.frameRate || 200);

	        // void setQuality(int quality) 
	        // Sets quality of color quantization (conversion of images to the 
	        // maximum 256 colors allowed by the GIF specification). 
	        // Lower values (minimum = 1) produce better colors, 
	        // but slow processing significantly. 10 is the default, 
	        // and produces good color mapping at reasonable speeds. 
	        // Values greater than 20 do not yield significant improvements in speed.
	        gifEncoder.setQuality(config.quality || 10);

	        // Boolean start() 
	        // This writes the GIF Header and returns false if it fails.
	        gifEncoder.start();

	        if (typeof config.onGifRecordingStarted === 'function') {
	            config.onGifRecordingStarted();
	        }

	        function drawVideoFrame(time) {
	            if (self.clearedRecordedData === true) {
	                return;
	            }

	            if (isPausedRecording) {
	                return setTimeout(function() {
	                    drawVideoFrame(time);
	                }, 100);
	            }

	            lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

	            if (typeof lastFrameTime === undefined) {
	                lastFrameTime = time;
	            }

	            // ~10 fps
	            if (time - lastFrameTime < 90) {
	                return;
	            }

	            if (!isHTMLObject && video.paused) {
	                // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
	                // Tweak for Android Chrome
	                video.play();
	            }

	            if (!isHTMLObject) {
	                context.drawImage(video, 0, 0, canvas.width, canvas.height);
	            }

	            if (config.onGifPreview) {
	                config.onGifPreview(canvas.toDataURL('image/png'));
	            }

	            gifEncoder.addFrame(context);
	            lastFrameTime = time;
	        }

	        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

	        if (config.initCallback) {
	            config.initCallback();
	        }
	    };

	    /**
	     * This method stops recording MediaStream.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     img.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        callback = callback || function() {};

	        if (lastAnimationFrame) {
	            cancelAnimationFrame(lastAnimationFrame);
	        }

	        /**
	         * @property {Blob} blob - The recorded blob object.
	         * @memberof GifRecorder
	         * @example
	         * recorder.stop(function(){
	         *     var blob = recorder.blob;
	         * });
	         */
	        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
	            type: 'image/gif'
	        });

	        callback(this.blob);

	        // bug: find a way to clear old recorded blobs
	        gifEncoder.stream().bin = [];
	    };

	    var isPausedRecording = false;

	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPausedRecording = true;
	    };

	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        isPausedRecording = false;
	    };

	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        self.clearedRecordedData = true;
	        clearRecordedDataCB();
	    };

	    function clearRecordedDataCB() {
	        if (gifEncoder) {
	            gifEncoder.stream().bin = [];
	        }
	    }

	    // for debugging
	    this.name = 'GifRecorder';
	    this.toString = function() {
	        return this.name;
	    };

	    var canvas = document.createElement('canvas');
	    var context = canvas.getContext('2d');

	    if (isHTMLObject) {
	        if (mediaStream instanceof CanvasRenderingContext2D) {
	            context = mediaStream;
	            canvas = context.canvas;
	        } else if (mediaStream instanceof HTMLCanvasElement) {
	            context = mediaStream.getContext('2d');
	            canvas = mediaStream;
	        }
	    }

	    var isLoadedMetaData = true;

	    if (!isHTMLObject) {
	        var video = document.createElement('video');
	        video.muted = true;
	        video.autoplay = true;
	        video.playsInline = true;

	        isLoadedMetaData = false;
	        video.onloadedmetadata = function() {
	            isLoadedMetaData = true;
	        };

	        setSrcObject(mediaStream, video);

	        video.play();
	    }

	    var lastAnimationFrame = null;
	    var lastFrameTime;

	    var gifEncoder;

	    var self = this;
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.GifRecorder = GifRecorder;
	}

	// Last time updated: 2019-06-21 4:09:42 AM UTC

	// ________________________
	// MultiStreamsMixer v1.2.2

	// Open-Sourced: https://github.com/muaz-khan/MultiStreamsMixer

	// --------------------------------------------------
	// Muaz Khan     - www.MuazKhan.com
	// MIT License   - www.WebRTC-Experiment.com/licence
	// --------------------------------------------------

	function MultiStreamsMixer(arrayOfMediaStreams, elementClass) {

	    var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

	    (function(that) {
	        if (typeof RecordRTC !== 'undefined') {
	            return;
	        }

	        if (!that) {
	            return;
	        }

	        if (typeof window !== 'undefined') {
	            return;
	        }

	        if (typeof commonjsGlobal === 'undefined') {
	            return;
	        }

	        commonjsGlobal.navigator = {
	            userAgent: browserFakeUserAgent,
	            getUserMedia: function() {}
	        };

	        if (!commonjsGlobal.console) {
	            commonjsGlobal.console = {};
	        }

	        if (typeof commonjsGlobal.console.log === 'undefined' || typeof commonjsGlobal.console.error === 'undefined') {
	            commonjsGlobal.console.error = commonjsGlobal.console.log = commonjsGlobal.console.log || function() {
	                console.log(arguments);
	            };
	        }

	        if (typeof document === 'undefined') {
	            /*global document:true */
	            that.document = {
	                documentElement: {
	                    appendChild: function() {
	                        return '';
	                    }
	                }
	            };

	            document.createElement = document.captureStream = document.mozCaptureStream = function() {
	                var obj = {
	                    getContext: function() {
	                        return obj;
	                    },
	                    play: function() {},
	                    pause: function() {},
	                    drawImage: function() {},
	                    toDataURL: function() {
	                        return '';
	                    },
	                    style: {}
	                };
	                return obj;
	            };

	            that.HTMLVideoElement = function() {};
	        }

	        if (typeof location === 'undefined') {
	            /*global location:true */
	            that.location = {
	                protocol: 'file:',
	                href: '',
	                hash: ''
	            };
	        }

	        if (typeof screen === 'undefined') {
	            /*global screen:true */
	            that.screen = {
	                width: 0,
	                height: 0
	            };
	        }

	        if (typeof URL === 'undefined') {
	            /*global screen:true */
	            that.URL = {
	                createObjectURL: function() {
	                    return '';
	                },
	                revokeObjectURL: function() {
	                    return '';
	                }
	            };
	        }

	        /*global window:true */
	        that.window = commonjsGlobal;
	    })(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : null);

	    // requires: chrome://flags/#enable-experimental-web-platform-features

	    elementClass = elementClass || 'multi-streams-mixer';

	    var videos = [];
	    var isStopDrawingFrames = false;

	    var canvas = document.createElement('canvas');
	    var context = canvas.getContext('2d');
	    canvas.style.opacity = 0;
	    canvas.style.position = 'absolute';
	    canvas.style.zIndex = -1;
	    canvas.style.top = '-1000em';
	    canvas.style.left = '-1000em';
	    canvas.className = elementClass;
	    (document.body || document.documentElement).appendChild(canvas);

	    this.disableLogs = false;
	    this.frameInterval = 10;

	    this.width = 360;
	    this.height = 240;

	    // use gain node to prevent echo
	    this.useGainNode = true;

	    var self = this;

	    // _____________________________
	    // Cross-Browser-Declarations.js

	    // WebAudio API representer
	    var AudioContext = window.AudioContext;

	    if (typeof AudioContext === 'undefined') {
	        if (typeof webkitAudioContext !== 'undefined') {
	            /*global AudioContext:true */
	            AudioContext = webkitAudioContext;
	        }

	        if (typeof mozAudioContext !== 'undefined') {
	            /*global AudioContext:true */
	            AudioContext = mozAudioContext;
	        }
	    }

	    /*jshint -W079 */
	    var URL = window.URL;

	    if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
	        /*global URL:true */
	        URL = webkitURL;
	    }

	    if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
	        if (typeof navigator.webkitGetUserMedia !== 'undefined') {
	            navigator.getUserMedia = navigator.webkitGetUserMedia;
	        }

	        if (typeof navigator.mozGetUserMedia !== 'undefined') {
	            navigator.getUserMedia = navigator.mozGetUserMedia;
	        }
	    }

	    var MediaStream = window.MediaStream;

	    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
	        MediaStream = webkitMediaStream;
	    }

	    /*global MediaStream:true */
	    if (typeof MediaStream !== 'undefined') {
	        // override "stop" method for all browsers
	        if (typeof MediaStream.prototype.stop === 'undefined') {
	            MediaStream.prototype.stop = function() {
	                this.getTracks().forEach(function(track) {
	                    track.stop();
	                });
	            };
	        }
	    }

	    var Storage = {};

	    if (typeof AudioContext !== 'undefined') {
	        Storage.AudioContext = AudioContext;
	    } else if (typeof webkitAudioContext !== 'undefined') {
	        Storage.AudioContext = webkitAudioContext;
	    }

	    function setSrcObject(stream, element) {
	        if ('srcObject' in element) {
	            element.srcObject = stream;
	        } else if ('mozSrcObject' in element) {
	            element.mozSrcObject = stream;
	        } else {
	            element.srcObject = stream;
	        }
	    }

	    this.startDrawingFrames = function() {
	        drawVideosToCanvas();
	    };

	    function drawVideosToCanvas() {
	        if (isStopDrawingFrames) {
	            return;
	        }

	        var videosLength = videos.length;

	        var fullcanvas = false;
	        var remaining = [];
	        videos.forEach(function(video) {
	            if (!video.stream) {
	                video.stream = {};
	            }

	            if (video.stream.fullcanvas) {
	                fullcanvas = video;
	            } else {
	                // todo: video.stream.active or video.stream.live to fix blank frames issues?
	                remaining.push(video);
	            }
	        });

	        if (fullcanvas) {
	            canvas.width = fullcanvas.stream.width;
	            canvas.height = fullcanvas.stream.height;
	        } else if (remaining.length) {
	            canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;

	            var height = 1;
	            if (videosLength === 3 || videosLength === 4) {
	                height = 2;
	            }
	            if (videosLength === 5 || videosLength === 6) {
	                height = 3;
	            }
	            if (videosLength === 7 || videosLength === 8) {
	                height = 4;
	            }
	            if (videosLength === 9 || videosLength === 10) {
	                height = 5;
	            }
	            canvas.height = remaining[0].height * height;
	        } else {
	            canvas.width = self.width || 360;
	            canvas.height = self.height || 240;
	        }

	        if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
	            drawImage(fullcanvas);
	        }

	        remaining.forEach(function(video, idx) {
	            drawImage(video, idx);
	        });

	        setTimeout(drawVideosToCanvas, self.frameInterval);
	    }

	    function drawImage(video, idx) {
	        if (isStopDrawingFrames) {
	            return;
	        }

	        var x = 0;
	        var y = 0;
	        var width = video.width;
	        var height = video.height;

	        if (idx === 1) {
	            x = video.width;
	        }

	        if (idx === 2) {
	            y = video.height;
	        }

	        if (idx === 3) {
	            x = video.width;
	            y = video.height;
	        }

	        if (idx === 4) {
	            y = video.height * 2;
	        }

	        if (idx === 5) {
	            x = video.width;
	            y = video.height * 2;
	        }

	        if (idx === 6) {
	            y = video.height * 3;
	        }

	        if (idx === 7) {
	            x = video.width;
	            y = video.height * 3;
	        }

	        if (typeof video.stream.left !== 'undefined') {
	            x = video.stream.left;
	        }

	        if (typeof video.stream.top !== 'undefined') {
	            y = video.stream.top;
	        }

	        if (typeof video.stream.width !== 'undefined') {
	            width = video.stream.width;
	        }

	        if (typeof video.stream.height !== 'undefined') {
	            height = video.stream.height;
	        }

	        context.drawImage(video, x, y, width, height);

	        if (typeof video.stream.onRender === 'function') {
	            video.stream.onRender(context, x, y, width, height, idx);
	        }
	    }

	    function getMixedStream() {
	        isStopDrawingFrames = false;
	        var mixedVideoStream = getMixedVideoStream();

	        var mixedAudioStream = getMixedAudioStream();
	        if (mixedAudioStream) {
	            mixedAudioStream.getTracks().filter(function(t) {
	                return t.kind === 'audio';
	            }).forEach(function(track) {
	                mixedVideoStream.addTrack(track);
	            });
	        }
	        arrayOfMediaStreams.forEach(function(stream) {
	            if (stream.fullcanvas) ;
	        });

	        // mixedVideoStream.prototype.appendStreams = appendStreams;
	        // mixedVideoStream.prototype.resetVideoStreams = resetVideoStreams;
	        // mixedVideoStream.prototype.clearRecordedData = clearRecordedData;

	        return mixedVideoStream;
	    }

	    function getMixedVideoStream() {
	        resetVideoStreams();

	        var capturedStream;

	        if ('captureStream' in canvas) {
	            capturedStream = canvas.captureStream();
	        } else if ('mozCaptureStream' in canvas) {
	            capturedStream = canvas.mozCaptureStream();
	        } else if (!self.disableLogs) {
	            console.error('Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features');
	        }

	        var videoStream = new MediaStream();

	        capturedStream.getTracks().filter(function(t) {
	            return t.kind === 'video';
	        }).forEach(function(track) {
	            videoStream.addTrack(track);
	        });

	        canvas.stream = videoStream;

	        return videoStream;
	    }

	    function getMixedAudioStream() {
	        // via: @pehrsons
	        if (!Storage.AudioContextConstructor) {
	            Storage.AudioContextConstructor = new Storage.AudioContext();
	        }

	        self.audioContext = Storage.AudioContextConstructor;

	        self.audioSources = [];

	        if (self.useGainNode === true) {
	            self.gainNode = self.audioContext.createGain();
	            self.gainNode.connect(self.audioContext.destination);
	            self.gainNode.gain.value = 0; // don't hear self
	        }

	        var audioTracksLength = 0;
	        arrayOfMediaStreams.forEach(function(stream) {
	            if (!stream.getTracks().filter(function(t) {
	                    return t.kind === 'audio';
	                }).length) {
	                return;
	            }

	            audioTracksLength++;

	            var audioSource = self.audioContext.createMediaStreamSource(stream);

	            if (self.useGainNode === true) {
	                audioSource.connect(self.gainNode);
	            }

	            self.audioSources.push(audioSource);
	        });

	        if (!audioTracksLength) {
	            // because "self.audioContext" is not initialized
	            // that's why we've to ignore rest of the code
	            return;
	        }

	        self.audioDestination = self.audioContext.createMediaStreamDestination();
	        self.audioSources.forEach(function(audioSource) {
	            audioSource.connect(self.audioDestination);
	        });
	        return self.audioDestination.stream;
	    }

	    function getVideo(stream) {
	        var video = document.createElement('video');

	        setSrcObject(stream, video);

	        video.className = elementClass;

	        video.muted = true;
	        video.volume = 0;

	        video.width = stream.width || self.width || 360;
	        video.height = stream.height || self.height || 240;

	        video.play();

	        return video;
	    }

	    this.appendStreams = function(streams) {
	        if (!streams) {
	            throw 'First parameter is required.';
	        }

	        if (!(streams instanceof Array)) {
	            streams = [streams];
	        }

	        streams.forEach(function(stream) {
	            var newStream = new MediaStream();

	            if (stream.getTracks().filter(function(t) {
	                    return t.kind === 'video';
	                }).length) {
	                var video = getVideo(stream);
	                video.stream = stream;
	                videos.push(video);

	                newStream.addTrack(stream.getTracks().filter(function(t) {
	                    return t.kind === 'video';
	                })[0]);
	            }

	            if (stream.getTracks().filter(function(t) {
	                    return t.kind === 'audio';
	                }).length) {
	                var audioSource = self.audioContext.createMediaStreamSource(stream);
	                self.audioDestination = self.audioContext.createMediaStreamDestination();
	                audioSource.connect(self.audioDestination);

	                newStream.addTrack(self.audioDestination.stream.getTracks().filter(function(t) {
	                    return t.kind === 'audio';
	                })[0]);
	            }

	            arrayOfMediaStreams.push(newStream);
	        });
	    };

	    this.releaseStreams = function() {
	        videos = [];
	        isStopDrawingFrames = true;

	        if (self.gainNode) {
	            self.gainNode.disconnect();
	            self.gainNode = null;
	        }

	        if (self.audioSources.length) {
	            self.audioSources.forEach(function(source) {
	                source.disconnect();
	            });
	            self.audioSources = [];
	        }

	        if (self.audioDestination) {
	            self.audioDestination.disconnect();
	            self.audioDestination = null;
	        }

	        if (self.audioContext) {
	            self.audioContext.close();
	        }

	        self.audioContext = null;

	        context.clearRect(0, 0, canvas.width, canvas.height);

	        if (canvas.stream) {
	            canvas.stream.stop();
	            canvas.stream = null;
	        }
	    };

	    this.resetVideoStreams = function(streams) {
	        if (streams && !(streams instanceof Array)) {
	            streams = [streams];
	        }

	        resetVideoStreams(streams);
	    };

	    function resetVideoStreams(streams) {
	        videos = [];
	        streams = streams || arrayOfMediaStreams;

	        // via: @adrian-ber
	        streams.forEach(function(stream) {
	            if (!stream.getTracks().filter(function(t) {
	                    return t.kind === 'video';
	                }).length) {
	                return;
	            }

	            var video = getVideo(stream);
	            video.stream = stream;
	            videos.push(video);
	        });
	    }

	    // for debugging
	    this.name = 'MultiStreamsMixer';
	    this.toString = function() {
	        return this.name;
	    };

	    this.getMixedStream = getMixedStream;

	}

	if (typeof RecordRTC === 'undefined') {
	    {
	        module.exports = MultiStreamsMixer;
	    }
	}

	// ______________________
	// MultiStreamRecorder.js

	/*
	 * Video conference recording, using captureStream API along with WebAudio and Canvas2D API.
	 */

	/**
	 * MultiStreamRecorder can record multiple videos in single container.
	 * @summary Multi-videos recorder.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef MultiStreamRecorder
	 * @class
	 * @example
	 * var options = {
	 *     mimeType: 'video/webm'
	 * }
	 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 *
	 *     // or
	 *     var blob = recorder.blob;
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
	 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
	 */

	function MultiStreamRecorder(arrayOfMediaStreams, options) {
	    arrayOfMediaStreams = arrayOfMediaStreams || [];
	    var self = this;

	    var mixer;
	    var mediaRecorder;

	    options = options || {
	        elementClass: 'multi-streams-mixer',
	        mimeType: 'video/webm',
	        video: {
	            width: 360,
	            height: 240
	        }
	    };

	    if (!options.frameInterval) {
	        options.frameInterval = 10;
	    }

	    if (!options.video) {
	        options.video = {};
	    }

	    if (!options.video.width) {
	        options.video.width = 360;
	    }

	    if (!options.video.height) {
	        options.video.height = 240;
	    }

	    /**
	     * This method records all MediaStreams.
	     * @method
	     * @memberof MultiStreamRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        // github/muaz-khan/MultiStreamsMixer
	        mixer = new MultiStreamsMixer(arrayOfMediaStreams, options.elementClass || 'multi-streams-mixer');

	        if (getAllVideoTracks().length) {
	            mixer.frameInterval = options.frameInterval || 10;
	            mixer.width = options.video.width || 360;
	            mixer.height = options.video.height || 240;
	            mixer.startDrawingFrames();
	        }

	        if (options.previewStream && typeof options.previewStream === 'function') {
	            options.previewStream(mixer.getMixedStream());
	        }

	        // record using MediaRecorder API
	        mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
	        mediaRecorder.record();
	    };

	    function getAllVideoTracks() {
	        var tracks = [];
	        arrayOfMediaStreams.forEach(function(stream) {
	            getTracks(stream, 'video').forEach(function(track) {
	                tracks.push(track);
	            });
	        });
	        return tracks;
	    }

	    /**
	     * This method stops recording MediaStream.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof MultiStreamRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        if (!mediaRecorder) {
	            return;
	        }

	        mediaRecorder.stop(function(blob) {
	            self.blob = blob;

	            callback(blob);

	            self.clearRecordedData();
	        });
	    };

	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof MultiStreamRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        if (mediaRecorder) {
	            mediaRecorder.pause();
	        }
	    };

	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof MultiStreamRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        if (mediaRecorder) {
	            mediaRecorder.resume();
	        }
	    };

	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof MultiStreamRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        if (mediaRecorder) {
	            mediaRecorder.clearRecordedData();
	            mediaRecorder = null;
	        }

	        if (mixer) {
	            mixer.releaseStreams();
	            mixer = null;
	        }
	    };

	    /**
	     * Add extra media-streams to existing recordings.
	     * @method
	     * @memberof MultiStreamRecorder
	     * @param {MediaStreams} mediaStreams - Array of MediaStreams
	     * @example
	     * recorder.addStreams([newAudioStream, newVideoStream]);
	     */
	    this.addStreams = function(streams) {
	        if (!streams) {
	            throw 'First parameter is required.';
	        }

	        if (!(streams instanceof Array)) {
	            streams = [streams];
	        }

	        arrayOfMediaStreams.concat(streams);

	        if (!mediaRecorder || !mixer) {
	            return;
	        }

	        mixer.appendStreams(streams);

	        if (options.previewStream && typeof options.previewStream === 'function') {
	            options.previewStream(mixer.getMixedStream());
	        }
	    };

	    /**
	     * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
	     * @method
	     * @memberof MultiStreamRecorder
	     * @param {MediaStreams} mediaStreams - Array of MediaStreams
	     * @example
	     * recorder.resetVideoStreams([newVideo1, newVideo2]);
	     */
	    this.resetVideoStreams = function(streams) {
	        if (!mixer) {
	            return;
	        }

	        if (streams && !(streams instanceof Array)) {
	            streams = [streams];
	        }

	        mixer.resetVideoStreams(streams);
	    };

	    /**
	     * Returns MultiStreamsMixer
	     * @method
	     * @memberof MultiStreamRecorder
	     * @example
	     * let mixer = recorder.getMixer();
	     * mixer.appendStreams([newStream]);
	     */
	    this.getMixer = function() {
	        return mixer;
	    };

	    // for debugging
	    this.name = 'MultiStreamRecorder';
	    this.toString = function() {
	        return this.name;
	    };
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
	}

	// _____________________
	// RecordRTC.promises.js

	/**
	 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
	 * @summary Promises for {@link RecordRTC}
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef RecordRTCPromisesHandler
	 * @class
	 * @example
	 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
	 * recorder.startRecording()
	 *         .then(successCB)
	 *         .catch(errorCB);
	 * // Note: You can access all RecordRTC API using "recorder.recordRTC" e.g. 
	 * recorder.recordRTC.onStateChanged = function(state) {};
	 * recorder.recordRTC.setRecordingDuration(5000);
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
	 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
	 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
	 * @requires {@link RecordRTC}
	 */

	function RecordRTCPromisesHandler(mediaStream, options) {
	    if (!this) {
	        throw 'Use "new RecordRTCPromisesHandler()"';
	    }

	    if (typeof mediaStream === 'undefined') {
	        throw 'First argument "MediaStream" is required.';
	    }

	    var self = this;

	    /**
	     * @property {Blob} blob - Access/reach the native {@link RecordRTC} object.
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * let internal = recorder.recordRTC.getInternalRecorder();
	     * alert(internal instanceof MediaStreamRecorder);
	     * recorder.recordRTC.onStateChanged = function(state) {};
	     */
	    self.recordRTC = new RecordRTC(mediaStream, options);

	    /**
	     * This method records MediaStream.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * recorder.startRecording()
	     *         .then(successCB)
	     *         .catch(errorCB);
	     */
	    this.startRecording = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                self.recordRTC.startRecording();
	                resolve();
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * This method stops the recording.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * recorder.stopRecording().then(function() {
	     *     var blob = recorder.getBlob();
	     * }).catch(errorCB);
	     */
	    this.stopRecording = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                self.recordRTC.stopRecording(function(url) {
	                    self.blob = self.recordRTC.getBlob();

	                    if (!self.blob || !self.blob.size) {
	                        reject('Empty blob.', self.blob);
	                        return;
	                    }

	                    resolve(url);
	                });
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * This method pauses the recording. You can resume recording using "resumeRecording" method.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * recorder.pauseRecording()
	     *         .then(successCB)
	     *         .catch(errorCB);
	     */
	    this.pauseRecording = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                self.recordRTC.pauseRecording();
	                resolve();
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * This method resumes the recording.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * recorder.resumeRecording()
	     *         .then(successCB)
	     *         .catch(errorCB);
	     */
	    this.resumeRecording = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                self.recordRTC.resumeRecording();
	                resolve();
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * This method returns data-url for the recorded blob.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * recorder.stopRecording().then(function() {
	     *     recorder.getDataURL().then(function(dataURL) {
	     *         window.open(dataURL);
	     *     }).catch(errorCB);;
	     * }).catch(errorCB);
	     */
	    this.getDataURL = function(callback) {
	        return new Promise(function(resolve, reject) {
	            try {
	                self.recordRTC.getDataURL(function(dataURL) {
	                    resolve(dataURL);
	                });
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * This method returns the recorded blob.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * recorder.stopRecording().then(function() {
	     *     recorder.getBlob().then(function(blob) {})
	     * }).catch(errorCB);
	     */
	    this.getBlob = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                resolve(self.recordRTC.getBlob());
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * This method returns the internal recording object.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * let internalRecorder = await recorder.getInternalRecorder();
	     * if(internalRecorder instanceof MultiStreamRecorder) {
	     *     internalRecorder.addStreams([newAudioStream]);
	     *     internalRecorder.resetVideoStreams([screenStream]);
	     * }
	     * @returns {Object} 
	     */
	    this.getInternalRecorder = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                resolve(self.recordRTC.getInternalRecorder());
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * This method resets the recorder. So that you can reuse single recorder instance many times.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * await recorder.reset();
	     * recorder.startRecording(); // record again
	     */
	    this.reset = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                resolve(self.recordRTC.reset());
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * Destroy RecordRTC instance. Clear all recorders and objects.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * recorder.destroy().then(successCB).catch(errorCB);
	     */
	    this.destroy = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                resolve(self.recordRTC.destroy());
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * Get recorder's readonly state.
	     * @method
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * let state = await recorder.getState();
	     * // or
	     * recorder.getState().then(state => { console.log(state); })
	     * @returns {String} Returns recording state.
	     */
	    this.getState = function() {
	        return new Promise(function(resolve, reject) {
	            try {
	                resolve(self.recordRTC.getState());
	            } catch (e) {
	                reject(e);
	            }
	        });
	    };

	    /**
	     * @property {Blob} blob - Recorded data as "Blob" object.
	     * @memberof RecordRTCPromisesHandler
	     * @example
	     * await recorder.stopRecording();
	     * let blob = recorder.getBlob(); // or "recorder.recordRTC.blob"
	     * invokeSaveAsDialog(blob);
	     */
	    this.blob = null;

	    /**
	     * RecordRTC version number
	     * @property {String} version - Release version number.
	     * @memberof RecordRTCPromisesHandler
	     * @static
	     * @readonly
	     * @example
	     * alert(recorder.version);
	     */
	    this.version = '5.6.2';
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
	}

	// ______________________
	// WebAssemblyRecorder.js

	/**
	 * WebAssemblyRecorder lets you create webm videos in JavaScript via WebAssembly. The library consumes raw RGBA32 buffers (4 bytes per pixel) and turns them into a webm video with the given framerate and quality. This makes it compatible out-of-the-box with ImageData from a CANVAS. With realtime mode you can also use webm-wasm for streaming webm videos.
	 * @summary Video recording feature in Chrome, Firefox and maybe Edge.
	 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
	 * @author {@link https://MuazKhan.com|Muaz Khan}
	 * @typedef WebAssemblyRecorder
	 * @class
	 * @example
	 * var recorder = new WebAssemblyRecorder(mediaStream);
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {webAssemblyPath:'webm-wasm.wasm',workerPath: 'webm-worker.js', frameRate: 30, width: 1920, height: 1080, bitrate: 1024, realtime: true}
	 */
	function WebAssemblyRecorder(stream, config) {
	    // based on: github.com/GoogleChromeLabs/webm-wasm

	    if (typeof ReadableStream === 'undefined' || typeof WritableStream === 'undefined') {
	        // because it fixes readable/writable streams issues
	        console.error('Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js');
	    }

	    config = config || {};

	    config.width = config.width || 640;
	    config.height = config.height || 480;
	    config.frameRate = config.frameRate || 30;
	    config.bitrate = config.bitrate || 1200;
	    config.realtime = config.realtime || true;

	    var finished;

	    function cameraStream() {
	        return new ReadableStream({
	            start: function(controller) {
	                var cvs = document.createElement('canvas');
	                var video = document.createElement('video');
	                var first = true;
	                video.srcObject = stream;
	                video.muted = true;
	                video.height = config.height;
	                video.width = config.width;
	                video.volume = 0;
	                video.onplaying = function() {
	                    cvs.width = config.width;
	                    cvs.height = config.height;
	                    var ctx = cvs.getContext('2d');
	                    var frameTimeout = 1000 / config.frameRate;
	                    var cameraTimer = setInterval(function f() {
	                        if (finished) {
	                            clearInterval(cameraTimer);
	                            controller.close();
	                        }

	                        if (first) {
	                            first = false;
	                            if (config.onVideoProcessStarted) {
	                                config.onVideoProcessStarted();
	                            }
	                        }

	                        ctx.drawImage(video, 0, 0);
	                        if (controller._controlledReadableStream.state !== 'closed') {
	                            try {
	                                controller.enqueue(
	                                    ctx.getImageData(0, 0, config.width, config.height)
	                                );
	                            } catch (e) {}
	                        }
	                    }, frameTimeout);
	                };
	                video.play();
	            }
	        });
	    }

	    var worker;

	    function startRecording(stream, buffer) {
	        if (!config.workerPath && !buffer) {
	            finished = false;

	            // is it safe to use @latest ?

	            fetch(
	                'https://unpkg.com/webm-wasm@latest/dist/webm-worker.js'
	            ).then(function(r) {
	                r.arrayBuffer().then(function(buffer) {
	                    startRecording(stream, buffer);
	                });
	            });
	            return;
	        }

	        if (!config.workerPath && buffer instanceof ArrayBuffer) {
	            var blob = new Blob([buffer], {
	                type: 'text/javascript'
	            });
	            config.workerPath = URL.createObjectURL(blob);
	        }

	        if (!config.workerPath) {
	            console.error('workerPath parameter is missing.');
	        }

	        worker = new Worker(config.workerPath);

	        worker.postMessage(config.webAssemblyPath || 'https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm');
	        worker.addEventListener('message', function(event) {
	            if (event.data === 'READY') {
	                worker.postMessage({
	                    width: config.width,
	                    height: config.height,
	                    bitrate: config.bitrate || 1200,
	                    timebaseDen: config.frameRate || 30,
	                    realtime: config.realtime
	                });

	                cameraStream().pipeTo(new WritableStream({
	                    write: function(image) {
	                        if (finished) {
	                            console.error('Got image, but recorder is finished!');
	                            return;
	                        }

	                        worker.postMessage(image.data.buffer, [image.data.buffer]);
	                    }
	                }));
	            } else if (!!event.data) {
	                if (!isPaused) {
	                    arrayOfBuffers.push(event.data);
	                }
	            }
	        });
	    }

	    /**
	     * This method records video.
	     * @method
	     * @memberof WebAssemblyRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        arrayOfBuffers = [];
	        isPaused = false;
	        this.blob = null;
	        startRecording(stream);

	        if (typeof config.initCallback === 'function') {
	            config.initCallback();
	        }
	    };

	    var isPaused;

	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof WebAssemblyRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPaused = true;
	    };

	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof WebAssemblyRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        isPaused = false;
	    };

	    function terminate(callback) {
	        if (!worker) {
	            if (callback) {
	                callback();
	            }

	            return;
	        }

	        // Wait for null event data to indicate that the encoding is complete
	        worker.addEventListener('message', function(event) {
	            if (event.data === null) {
	                worker.terminate();
	                worker = null;

	                if (callback) {
	                    callback();
	                }
	            }
	        });

	        worker.postMessage(null);
	    }

	    var arrayOfBuffers = [];

	    /**
	     * This method stops recording video.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof WebAssemblyRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        finished = true;

	        var recorder = this;

	        terminate(function() {
	            recorder.blob = new Blob(arrayOfBuffers, {
	                type: 'video/webm'
	            });

	            callback(recorder.blob);
	        });
	    };

	    // for debugging
	    this.name = 'WebAssemblyRecorder';
	    this.toString = function() {
	        return this.name;
	    };

	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof WebAssemblyRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        arrayOfBuffers = [];
	        isPaused = false;
	        this.blob = null;

	        // todo: if recording-ON then STOP it first
	    };

	    /**
	     * @property {Blob} blob - The recorded blob object.
	     * @memberof WebAssemblyRecorder
	     * @example
	     * recorder.stop(function(){
	     *     var blob = recorder.blob;
	     * });
	     */
	    this.blob = null;
	}

	if (typeof RecordRTC !== 'undefined') {
	    RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder;
	} 
} (RecordRTC));

var RecordRTCExports = RecordRTC.exports;

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
react_development.exports;

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.2.0';

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		} 
	} (react_development, react_development.exports));
	return react_development.exports;
}

if (process.env.NODE_ENV === 'production') {
  react.exports = requireReact_production_min();
} else {
  react.exports = requireReact_development();
}

var reactExports = react.exports;

var useRecordRTC = function (options) {
    var previewVideoRef = reactExports.useRef(null);
    var audioPreviewRef = reactExports.useRef(null);
    var _a = reactExports.useState(null), blob = _a[0], setBlob = _a[1];
    var _b = reactExports.useState(null), recorder = _b[0], setRecorder = _b[1];
    var _c = reactExports.useState('inactive'), recorderState = _c[0], setRecorderState = _c[1];
    var _d = reactExports.useState(null), recordStream = _d[0], setRecordStream = _d[1];
    if (!options.countDownSec) {
        options.countDownSec = 0;
    }
    var getUserMediaStream = function (constraints) { return __awaiter(void 0, void 0, void 0, function () {
        var mediaStream, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, navigator.mediaDevices.getUserMedia(constraints)];
                case 1:
                    mediaStream = _a.sent();
                    if (!constraints.audio) {
                        mediaStream.getAudioTracks().forEach(function (track) { return track.stop(); });
                    }
                    return [2 /*return*/, mediaStream];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error accessing media devices:", error_1);
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getScreenStream = function (constraints) { return __awaiter(void 0, void 0, void 0, function () {
        var screenStream, audioStream, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, navigator.mediaDevices.getDisplayMedia(constraints)];
                case 1:
                    screenStream = _a.sent();
                    if (!constraints.audio) return [3 /*break*/, 3];
                    return [4 /*yield*/, getUserMediaStream({ audio: true, video: false })];
                case 2:
                    audioStream = _a.sent();
                    screenStream.addTrack(audioStream.getAudioTracks()[0]);
                    _a.label = 3;
                case 3: return [2 /*return*/, screenStream];
                case 4:
                    error_2 = _a.sent();
                    console.error("Error accessing screen media devices:", error_2);
                    throw error_2;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var addStreamStopListener = function (stream, callback) {
        if (!stream)
            return;
        var stopListener = function () {
            callback();
        };
        stream.addEventListener('ended', stopListener);
        stream.addEventListener('inactive', stopListener);
        stream.getTracks().forEach(function (track) { return track.addEventListener('ended', stopListener); });
    };
    reactExports.useEffect(function () {
        if (recordStream) {
            addStreamStopListener(recordStream, stopRecording);
        }
    }, [recordStream]);
    reactExports.useEffect(function () {
        console.log(recorder);
    }, [recorder]);
    var startRecording = function (stream_1) {
        var args_1 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args_1[_i - 1] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([stream_1], args_1, true), void 0, function (stream, type) {
            if (type === void 0) { type = "audio"; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setRecordStream(stream);
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                                var _a, recorder;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = options.afterRecordingHook;
                                            if (!_a) return [3 /*break*/, 2];
                                            return [4 /*yield*/, options.afterRecordingHook()];
                                        case 1:
                                            _a = (_b.sent());
                                            _b.label = 2;
                                        case 2:
                                            recorder = new RecordRTCExports.RecordRTCPromisesHandler(stream, __assign(__assign({}, options.rtcOptions || {}), { type: type }));
                                            setRecorder(recorder);
                                            return [4 /*yield*/, recorder.startRecording()];
                                        case 3:
                                            _b.sent();
                                            resolve(recorder);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, options.countDownSec * 1000); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var stopRecording = function () { return __awaiter(void 0, void 0, void 0, function () {
        var blob_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!recorder)
                        return [2 /*return*/];
                    if (!recorder) return [3 /*break*/, 3];
                    return [4 /*yield*/, recorder.stopRecording()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, recorder.getBlob()];
                case 2:
                    blob_1 = _a.sent();
                    setBlob(blob_1);
                    setRecorderState('stopped');
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var pauseRecording = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = !recorder;
                    if (_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, (recorder.getState())];
                case 1:
                    _a = (_b.sent()) !== "recording";
                    _b.label = 2;
                case 2:
                    if (_a)
                        return [2 /*return*/];
                    if (previewVideoRef.current) {
                        previewVideoRef.current.pause();
                    }
                    if (audioPreviewRef.current) {
                        audioPreviewRef.current.pause();
                    }
                    return [4 /*yield*/, recorder.pauseRecording()];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var resumeRecording = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = !recorder;
                    if (_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, (recorder.getState())];
                case 1:
                    _a = (_b.sent()) !== "paused";
                    _b.label = 2;
                case 2:
                    if (_a)
                        return [2 /*return*/];
                    if (!previewVideoRef.current) return [3 /*break*/, 4];
                    return [4 /*yield*/, previewVideoRef.current.play()];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    if (!audioPreviewRef.current) return [3 /*break*/, 6];
                    return [4 /*yield*/, audioPreviewRef.current.play()];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6: return [4 /*yield*/, recorder.resumeRecording()];
                case 7:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        // States
        blob: blob,
        recorder: recorder,
        recorderState: recorderState,
        previewVideoRef: previewVideoRef,
        audioPreviewRef: audioPreviewRef,
        // APIs
        getScreenStream: getScreenStream,
        getUserMediaStream: getUserMediaStream,
        startRecording: startRecording,
        pauseRecording: pauseRecording,
        resumeRecording: resumeRecording,
        stopRecording: stopRecording,
    };
};

exports.useRecordRTC = useRecordRTC;
//# sourceMappingURL=index.js.map
