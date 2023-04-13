import React, { useEffect, useState } from "react";
import './Timmer.css';

function Timmer(){

    const [second, setSecond]=useState(0);
    const[minutes,setMinutes]=useState(0);


    var timer;
    useEffect(()=>{
        timer=setInterval(()=>{
            setSecond(second+1);

            if(second===59){
                setMinutes(minutes+1);
                setSecond(0);
            }
        },1000);

        return()=>clearInterval(timer)
    })
    const restart=()=>{
        setSecond(0);
        setMinutes(0);
    }

    const stop=()=>{
        clearInterval(timer);
    }

    return(
        <div className="timer">
            <div className="container">
                <div className="timer_container">
                <h1>Timer</h1>
                <h1>{minutes<10?"0"+minutes:minutes}:{second<10?"0"+second:second}</h1>
                <div className="buttons">
                <button className="restart" onClick={restart}>Restart</button>
                <button className="stop" onClick={stop}>Stop</button>
                </div>
                

                </div>

            </div>
        </div>
    )
}
   

export default Timmer;