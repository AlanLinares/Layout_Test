import React from 'react'

const TextInput = (props) => {


  return (
    <div>
        <input
            type={props.text}
            value={props.value}
            placeholder={props.placeholder}
            
        />
    </div>
  )
}

export default TextInput