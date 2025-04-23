import React, { useState } from 'react';
import State from './Components/State';
import Cart from './Components/Cart';

const App = () => {
  const [value,setValue] = useState(100)
  
  const handleInc = () =>{
    setValue(ele=>ele+10)  // setValue(value=>value+10)
    // console.log(value);
    
}

  return (
    <div>
       <h1>App Component</h1>
       {/* {value}
             <br />
             <button onClick={handleInc}>Click</button>
       <State value={value} setValue={setValue}/> */}
       <Cart />
    </div>
  );
};

export default App;