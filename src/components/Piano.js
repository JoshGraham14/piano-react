import React, { useState } from 'react'
import Key from './Key'
import _ from 'lodash'
import { NOTES } from '../globals/constants'

const Piano = () => {
	const [pressedKeys, setPressedKeys] = useState([])

	const handleKeyPress = note => {
		let newPressedKeys = pressedKeys
		newPressedKeys.push(note)
		setPressedKeys(newPressedKeys)
		console.log(pressedKeys)
	}

	// creates key components
	const keys = _.map(NOTES, (note, index) => {
		return (
			<Key
				key={index}
				whiteKey={note.length === 1}
				note={note}
				onChange={handleKeyPress}
			/>
		)
	})

	// creates audio takes mapped to each note
	const audioFiles = _.map(NOTES, (note, index) => {
		return <audio key={index} id={note} src={`../../sounds/${note}.mp3}`} />
	})

	return (
		<>
			<div className='piano-container'>{keys}</div>
			<div>{audioFiles}</div>
		</>
	)
}

export default Piano
