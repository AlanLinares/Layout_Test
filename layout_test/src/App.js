import { useState } from 'react';
import image from './images/godzillavskong.jpg'
import TextInput from './TextInput';
import TextBlock from './TextBlock';

import './index.css'

function App() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value1)
  }



  return (
    <>
      <div>
        <img src={image}/>
      </div>
      <form onSubmit={handleSubmit}>
        <TextInput 
          type="text"
          value={value1}
          placeholder="text input"
          onChange = {(e) => {setValue1(e.target.value)}}
        />
        <TextInput 
          type="text"
          value={value2}
          placeholder="text input"
          onChange = {(e) => {setValue2(e.target.value)}}
        />
      </form>
      <div></div>
      <TextBlock></TextBlock>
      <div className='largerectangle'></div>
    </>
  )
}

export default App;
