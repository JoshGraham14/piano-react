import React, { useState, useEffect } from 'react'
import Key from './Key'
import _ from 'lodash'
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from '../globals/constants'

const Piano = () => {
	const [pressedKeys, setPressedKeys] = useState([])

	useEffect(() => {
		const playNote = note => {
			if (!_.isEmpty(note)) {
				const noteAudio = new Audio(document.getElementById(note).src)
				noteAudio.play()
			}
		}

		const handleKeyDown = e => {
			if (e.repeat) {
				return
			}
			const key = e.key
			let newPressedKeys = [...pressedKeys]
			if (!newPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
				newPressedKeys.push(key)
			}
			playNote(KEY_TO_NOTE[key])
		}

		const handleKeyUp = e => {
			const index = pressedKeys.indexOf(e.key)
			if (index > -1) {
				setPressedKeys(pressedKeys.splice(index, 1))
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('keyup', handleKeyUp)
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

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
		return <audio key={index} id={note} src={`../../sounds/${note}.mp3`} />
	})

	return (
		<>
			<div className='piano-container'>{keys}</div>
			<div>{audioFiles}</div>
		</>
	)
}

export default Piano
