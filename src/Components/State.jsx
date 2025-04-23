import React, { useState } from 'react';

const State = ({value, setValue}) => {

    //const [value,setValue] = useState(100) // value = 100(initial) setValue = update the value

    let a = 10
const handleSubmit = ()=>{
    a = a+1;
    console.log(a);
}

const handleInc = () =>{
    setValue(ele=>ele+10)  // setValue(value=>value+10)
    // console.log(value);
    
}

    return (
        <div>
             <h1>State Example</h1>
             {a}
             <br />
             <button onClick={handleSubmit}>Click</button>
             <br />
             {value}
             <br />
             <button onClick={handleInc}>Click</button>
        </div>
    );
};

export default State;