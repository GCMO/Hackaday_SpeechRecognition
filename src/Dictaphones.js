import React, { useState } from 'react'
import { DictaphoneWidgetA, DictaphoneWidgetB } from './Dictaphone'
import SpeechRecognition from './SpeechRecognition'

export default () => {
  const [showFirstWidget, setShowFirstWidget] = useState(true)
  const toggleShowFirstWidget = () => setShowFirstWidget(!showFirstWidget)

  const listenContinuously = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB'
  })
  const listenContinuouslyInChinese = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'zh-CN'
  })
  const listenOnce = () => SpeechRecognition.startListening({ continuous: false })

  return (
    <div class='dictaphone-app'>
      <header class='app-header'>
        <h1>SPEECH RECOGNITION App</h1>
      </header>
      
      <div class='widjects'>
        {showFirstWidget && <DictaphoneWidgetA />}
        <DictaphoneWidgetB />
      </div>

      <div class='buttons'>
        <button onClick={listenOnce} class='listen_once'>Record Once </button>
        <button onClick={listenContinuously} class='listen_cont'>RECORD Continuous</button>
        <button onClick={listenContinuouslyInChinese} class='listen_chinese'>RECORD Chinese</button>
        <button onClick={toggleShowFirstWidget} class='toggler'>ToggleTop Box</button>
        <button onClick={SpeechRecognition.stopListening} class='listen_stop'>STOP</button>
      </div>
    </div>
  )
}
