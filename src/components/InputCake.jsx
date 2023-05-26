import React, {useState} from 'react'
import  buyCake  from '../redux/cake/CakeAction.jsx'
import { connect } from 'react-redux'


function InputCake(props) {
    const [noOfCakes, setNoOfCakes] = useState(1)
  return (
    <div>
        <input  
            type="text" 
            placeholder="Enter a cake name" 
            value={noOfCakes} 
            onChange={(e) => setNoOfCakes(e.target.value)} 
            style={{padding: '2px', margin:'5px'}}
        />
        <br/> 
        <button onClick={() => props.buyCake(noOfCakes)} >Buy {noOfCakes} Cake</button>
    </div>
  )
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (noOfCakes) => dispatch(buyCake(noOfCakes))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputCake) 