import React, { useState } from 'react'

const Key = props => {
	const [isPressed, setIsPressed] = useState(false)
	const { note, whiteKey, onChange } = props
	let keyClassName = whiteKey ? 'white-key' : 'black-key'
	keyClassName += isPressed ? ' pressed' : ''

	const keyPress = () => {
		setIsPressed(true)
		onChange(note)
	}

	return <div className={keyClassName} onClick={keyPress}></div>
}

export default Key
