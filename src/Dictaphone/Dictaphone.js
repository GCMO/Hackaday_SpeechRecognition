import React, { useState, useEffect } from 'react'
import { useSpeechRecognition } from '../SpeechRecognition'
import './app.css'

import {collection} from 'firebase/firestore';


const Dictaphone = ({ commands }) => {
  const [transcribing, setTranscribing] = useState(true)
  const [clearTranscriptOnListen, setClearTranscriptOnListen] = useState(true)
  const toggleTranscribing = () => setTranscribing(!transcribing)
  const toggleClearTranscriptOnListen = () => setClearTranscriptOnListen(!clearTranscriptOnListen)
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition({ transcribing, clearTranscriptOnListen, commands })
  useEffect(() => {
    if (interimTranscript !== '') {
      console.log('Got interim result:', interimTranscript)
    }
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript)
    }
  }, [interimTranscript, finalTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>No browser support</span>
  }

  if (!isMicrophoneAvailable) {
    return <span>Please allow access to the microphone</span>
  }

  return (
    <section>
      <div class='transcription'>{transcript}
      </div> 
        <div class='features'>
          <br/>
            <span>RECORDING: {listening ? 'ON' : 'OFF'}</span>
          <br/>
            <span>TRANSCRIBING: {transcribing ? 'ON' : 'OFF'}</span>
          <br/>
            <span>clearTranscriptOnListen: {clearTranscriptOnListen ? 'on' : 'off'}</span>
          <br/>
        </div>
        <div class='controls'>
            <button onClick={resetTranscript} class='reset'>RESET</button>
          
            <button onClick={finalTranscript} class='toDB'>SAVE TO DB</button>
          
            <button onClick={''} class='toPdf'>SAVE TO PDF</button>
   
            <button onClick={''} class='toDocx'>SAVE TO .docx</button>
         
            <button onClick={''} class='toCopy'>COPY</button>
        </div>
      {/* // <button onClick={toggleTranscribing}>Toggle transcribing</button>
      <button onClick={toggleClearTranscriptOnListen}>Toggle clearTranscriptOnListen</button> */}
    </section>
  )
}

export default Dictaphone