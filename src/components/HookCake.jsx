import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  buyCake  from '../redux/cake/CakeAction.jsx'

function HookCake() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number Of Cakes: {numOfCakes} </h2>
        <button onClick={() => dispatch(buyCake())} >Buy Cake</button>
    </div>
  )
}

export default HookCake