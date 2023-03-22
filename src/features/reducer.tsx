




export const reducer = (state:any,action:any) =>{
    switch(action.type){
        case 'ADD_TO_CART':  
            return {...state,cart:[...state.cart, {...action.payload,qty:1}]}
        case 'REMOVE_FROM_CART' :   
            return {...state,cart:[...state.cart.filter((x:any)=>x.id!==action.payload) ]} 
        case 'CHANGE_QTY' :  
            return {...state,cart: state.cart.filter((item:any)=> item.id === action.id ? item.qty = action.qty : item.qty )}
        default : 
            return {...state}
    }
}