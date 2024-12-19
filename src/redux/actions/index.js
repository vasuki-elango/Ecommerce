export const addToCart = (product) =>{
    return{
        type :"ADDITEM",
        payload:product
    }
}
export const deleteCart = (product) =>{
    return{
        type :"DELETEITEM",
        payload:product
    }
}