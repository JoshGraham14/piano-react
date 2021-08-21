import React from 'react'
import Key from './Key'

const Piano = () => {
	return (
		<div className='piano-container'>
			<Key whiteKey={true} note='c' />
			<Key whiteKey={false} note='cs' />
			<Key whiteKey={true} note='d' />
			<Key whiteKey={false} note='ds' />
			<Key whiteKey={true} note='e' />
			<Key whiteKey={true} note='f' />
			<Key whiteKey={false} note='fs' />
			<Key whiteKey={true} note='g' />
			<Key whiteKey={false} note='gs' />
			<Key whiteKey={true} note='a' />
			<Key whiteKey={false} note='as' />
			<Key whiteKey={true} note='b' />
		</div>
	)
}

export default Piano
