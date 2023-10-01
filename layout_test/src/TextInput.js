import React from 'react'
import "./css/textInput.css"


const TextInput = (props) => {


  return (
    <div>
        <input 
            type={props.text}
            value={props.value}
            placeholder={props.placeholder}
            onChange={(props.onChange)}
        />
    </div>
  )
}

export default TextInput