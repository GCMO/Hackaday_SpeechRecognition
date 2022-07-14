import React, { useState } from 'react'
import Dictaphone from './Dictaphone'

const DictaphoneWidgetB = () => {
  const [message, setMessage] = useState('')
  const commands = [
    {
      command: '* is my name',
      callback: (name) => setMessage(`Hi ${name}!`),
      matchInterim: true
    },
    {
      command: 'My top sports are * and *',
      callback: (sport1, sport2) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
    },
    {
      command: 'Goodbye',
      callback: () => setMessage('So long!'),
      matchInterim: true
    },
    {
      command: 'Pass the salt (please)',
      callback: () => setMessage('My pleasure')
    }
  ]

  return (
    <div class='dictaphone'>
      <h1>TTS TRANSCRIBER</h1>
      <Dictaphone commands={commands} />
      <p>{message}</p>
    </div>
  )
}

export default DictaphoneWidgetB