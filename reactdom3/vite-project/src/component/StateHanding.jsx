import React, { useState } from 'react'

function StateHanding() {
    const[counter,setCounter]=useState(20);
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(221);
    const [blue,setBlue]=useState(0);


    function increment(){
        setCounter(counter + 10);
    }

function changeBGColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}



  return (
    
    <div
       style={{
                backgroundColor:`rgb(${red},${green},${blue})`,
                border: '2px solid red',
                width: '400px',
                padding: '30px',
                margin: '50px auto',
                textAlign: 'center',
                borderRadius: '10px'
            }}>
        <h1>Counter App</h1>
        <h2>Counter={counter}</h2>
        <button onClick={increment}>increasecounter</button>
        <button onClick={()=>setCounter(counter-5)}>decreseCounter</button>
        <br></br>
        <button onClick={changeBGColor}>changeBGColor</button>
    </div>
  )
}

export default StateHanding