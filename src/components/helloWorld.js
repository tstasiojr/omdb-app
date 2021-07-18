import React,{useState} from 'react';

function HelloWorld() {
  const [buttonToggle, setButtonToggle] = useState(true);

  return (
    <div className="HelloWorld">
      {buttonToggle ? <h1>Hello World</h1> : <h1>Goodbye World</h1>}
      <button onClick = {() => {setButtonToggle(!buttonToggle)}}>Click Here</button>
    </div>
  );
}

export default HelloWorld;