import React from 'react'
import Key from './Key'
import _ from 'lodash'

const Piano = () => {
	const NOTES = [
		'c',
		'cs',
		'd',
		'ds',
		'e',
		'f',
		'fs',
		'g',
		'gs',
		'a',
		'as',
		'b',
	]

	// creates key components
	const keys = _.map(NOTES, (note, index) => {
		return <Key whiteKey={note.length === 1} note={note} />
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
