import React, {useState} from 'react'
import mypic from '../assets/images/Monkeys.jpg'

function Imagemanipulation() {
    const[mypicHeight,setmypicHeight]=useState(200)
    const[mypicWidth,setmypicWidth]=useState(200)
    const[angle,setangle]=useState(0)

    function setheight(){
        setmypicHeight(mypicHeight+10)
    }

    function setwidth(){
        setmypicWidth(mypicWidth+10)
    }

    function setanglefunction(){
        setangle(angle+10)
    }

    return (
        <div>
            <h2 style={{color:'red', backgroundColor:'black'}}>
                Imagemanipulation
            </h2>

            <div style={{border:'2px solid red', height:'400px', width:'400px'}}>
                <img
                    src={mypic}
                    height={mypicHeight}
                    width={mypicWidth}
                    style={{transform:`rotate(${angle}deg)`}}
                />
            </div>

            <div>
                <button onClick={setheight}>enhanceHeight</button>
                <button onClick={setwidth}>enhanceWidth</button>
                <button onClick={setanglefunction}>Rotate</button>
            </div>
        </div>
    )
}

export default Imagemanipulation