import { useState } from "react";
import image from "./images/godzillavskong.jpg";
import TextInput from "./TextInput";
import TextBlock from "./TextBlock";

import "./css/index.css";
import Badge from "./Badge";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value1);
  };

  return (
    <>
      <div className="container">
        <div className="container-left">
          <div >
            <img className="topimage" src={image} />
          </div>
          <form onSubmit={handleSubmit}>
            <TextInput
              type="text"
              value={value1}
              placeholder="text input"
              onChange={(e) => {
                setValue1(e.target.value);
              }}
            />
            <TextInput
              type="text"
              value={value2}
              placeholder="text input"
              onChange={(e) => {
                setValue2(e.target.value);
              }}
            />
          </form>
          
          <TextBlock></TextBlock>
        </div>

        <div className="container-right">
          <div className="largerectangle"></div>
          <section className="badge">
            <Badge />
            <Badge />
            <Badge />
            <Badge />
          </section>
          <TextBlock></TextBlock>
          <div className="buttonwrap">
            <button className="btn">submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
