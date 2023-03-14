import { useState } from 'react';
import { useReducer } from 'react';

const Counter = () => {
    
    const initialState = {
      count : 0,
      numberToChangeBy:0
    }
    

    const reducer = (state , action) =>{
      const clonedState = {...state}

      switch (action.type) {
        case "incrementCount":
          clonedState.count+=clonedState.numberToChangeBy
          return clonedState
          break;
        case "decrementCount":
          clonedState.count-=clonedState.numberToChangeBy
          return clonedState
          break;
        case "setNumberToChangeBy":
            clonedState.numberToChangeBy=action.setChangeInterval
            return clonedState
            break;
          
        default:
          break;
      }

      return state
    }
    const [state , dispatch] = useReducer(reducer , initialState)

    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={()=>dispatch({type:"incrementCount"})}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={()=>dispatch({type:"decrementCount"})}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button>
    </div> 
    <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box" onChange={(e)=>{dispatch({type: "setNumberToChangeBy" ,setChangeInterval:parseInt(e.target.value, 10)})}} type="number" value={state.numberToChangeBy} name="number" id="number" /></p>
  </div>);
}/* 
<div className="flex gap center">
        <button className="button-box" onClick={dispatch({type:"incrementCount"})}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={dispatch({type:"decrementCount"})}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button>
    </div> */
// <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box" onChange={(e)=>{dispatch({type: "setNumberToChangeBy" ,setChangeInterval:e.target.value})}} type="number" value={numberToChangeBy} name="number" id="number" /></p>
export default Counter;