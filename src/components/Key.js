import React from 'react'

const Key = props => {
	const { whiteKey, note } = props
	return <div className={whiteKey ? 'white-key' : 'black-key'}></div>
}

export default Key
