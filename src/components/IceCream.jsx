import React from 'react'
import { connect } from 'react-redux'
import  buyIceCream  from '../redux/iceCream/IceCreamAction'


function Cake(props) {
  return (
    <div>
        <h2>No Of IceCream: {props.numOfIceCream} </h2>
        <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        numOfIceCream: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Cake)