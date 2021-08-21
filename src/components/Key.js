import React from 'react'

const Key = props => {
	const { whiteKey } = props
	return <div className={whiteKey ? 'white-key' : 'black-key'}></div>
}

export default Key
