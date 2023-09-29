import image from './godzillavskong.jpg'
import TextInput from './TextInput';

function App() {
  return (
    <>
      <div>
        <img src={image}/>
      </div>
      <TextInput 
        type="text"
        value={value}
        placeholder="please input text"
        onChange = {() => console.log("input was changede")}
      />
    </>
  )
}

export default App;
