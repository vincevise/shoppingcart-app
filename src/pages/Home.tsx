import React, { useEffect, useReducer } from 'react'
import {   reducer } from '../features/reducer';

interface props {
  products:Array<object>, 
  // state: Array<object>,
  state: {
    cart:Array<object>
  },
  dispatch:any
}

 

const Home = ({products,state,dispatch}:props) => {
 
  
  const home:any = {
    padding:'10px',
    boxSizing:'border-box'
  }

  const grid = {
    width:'100%',
    justifyContent:'center',
    marginTop:'20px',
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', 
    gridGap:'10px'
  }

  const box:any = {
    border:'1px solid #ccc',
    fontSize:'16px',
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    padding:'5px', 
    justifyContent:'space-between',
    backgroundColor:'white',
    color:'black'
  }

  

  const buttonStyle = { 
    border:'none',
    padding:'5px',
    margin:'2px',
    cursor:'pointer'
  }
 
  

  
  
  return (
    <div style={home} className='home'> 
    <h1>Home</h1>
      <div style={grid} >
        {products?.length > 0 && 
            products.map((x: any)=>{ 
              
              return (
                <div style={box} key={x.id} >
                  <h4>{x.title}</h4>
                  <div className='w-11/12 h-11/12'>
                    <img  className='w-full h-full object-fit' src={x.thumbnail} alt="" />
                  </div>
                  <div>${x.price}</div>
                  
                  {(state?.cart.length > 0 && state?.cart.some((item:any)=>item.id===x.id)) 
                    ? 
                  <button style={{...buttonStyle,backgroundColor:'red'}}
                    onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:x.id})}>
                      Remove from Cart
                  </button>
                    :
                  <button style={{...buttonStyle,backgroundColor:'green'}} 
                    onClick={()=>dispatch({type:'ADD_TO_CART',payload:x})}>
                      Add to Cart
                  </button>  
                  }
                </div>
            )
          })
        }
      </div>
     
    </div>
  )
}

export default Home