import React ,{useState}from 'react'
import Button from './Button';

const Box = () => {
    const [state, setstate] = useState(0);

    // const plus_plus = ()=>{
        
    // }

    // const min = () =>{
    // }
    
    const action = (op) => {
        if(op === "+") setstate(state + 1);
        else 
        setstate(state <= 0 ? 0 : state - 1);
    }

    return (
        <div className= "box">
            {/* <button  onClick={() => plus_plus()} >+</button> */}
            <Button op="-" onAction = {action}/>
            {state}
            <Button op="+" onAction = {action}/>
            {/* <button className="btn-plus" onClick={() => min()} >-</button> */}
        </div>
    )
}

export default Box;