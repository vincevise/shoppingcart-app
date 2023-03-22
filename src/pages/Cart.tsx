import React, { useEffect, useReducer, useState } from 'react'
import {  reducer } from '../features/reducer'

interface props {
  state:{
    cart:any
  },
  dispatch:any
}


const Cart = ({state,dispatch}:props) => {  

  const cartStyle:any = {
    display:'flex',
    flexDirection:'column',
    padding:'10px', 
    color:'#333', 
  }

   
 

  const [cost,setCost] = useState(0)

  useEffect(()=>{ 
    setCost(state.cart.reduce((tot:number,x:any)=> tot + (x.price * x.qty),0))
  },[state])

  const changeQty = (id:string,qty:number) => {
    dispatch({
      type:'CHANGE_QTY',
      id:id,
      qty:qty
    })
    console.log(id, qty)
  }

  return (
    <div style={cartStyle} className='cart'>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <h1 style={{marginBottom:'10px'}}>Cart </h1>
        <p>${cost.toFixed(2)}</p>
      </div>
      
      {state?.cart.length > 0 && state?.cart.map((x:any)=>{
       
        return (
          <div key={x.id} className='cart-container'>
            
            <div style={{display:'flex'}}>
              <div  className='img-container' >
                <img src={x.thumbnail} alt="" />
              </div>
            </div> 
            <div className='qty-container'>
              <div>
                {x.title} 
              </div>
              <div style={{display:'flex',width:'100%',justifyContent:'space-between'}} >
                <p >
                  
                  <strong>  ${(x.qty*x.price).toFixed(2)} </strong>
                </p>
                <div style={{display:'flex',alignItems:'center'}}>
                  Qty :
                  <button onClick={()=>changeQty(x.id,x.qty-1)}>-</button> 
                    <p style={{padding:'5px'}}> {x.qty}</p> 
                  <button onClick={()=>changeQty(x.id,x.qty+1)}>+</button>
                </div>
               
              </div>
             
            </div>  

          </div>
        )
      })}
    </div>
  )
}

export default Cart