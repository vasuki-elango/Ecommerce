import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../redux/actions/index'

export const Cart = () => {
    const state = useSelector(state => state.handleCart)
    const dispatch = useDispatch()

    const DeleteCart = (product) => {
        dispatch(deleteCart(product))
    }
    const TotalVal = state.reduce((acc,curr)=>{
        return acc+curr.price*curr.quantity
    },0)
    return (
        <div className='container d-flex justify-content-center align-items-center flex-column flex-md-row gap-4 my-5 pt-5'>
            {
                state.length === 0 ? 
                <div className='w-75 d-flex justify-content-center align-item-center'>
                    <h2 className='text-danger'>Empty</h2>
                </div> :  
                <div className='w-75 cart-container d-flex justify-content-center align-item-center flex-column'>
                    {state.map((item)=>{
                        return (
                            <div key={item.id} className='row d-flex align-items-center justify-content-center flex-row mb-3 w-100 cart'>
                                <div className="cart-img">
                                    <img src={item.img} alt="" className='w-100 h-100 object-fit-cover'/>
                                </div>
                                <div className='w-50'>
                                    <h4>{item.title}</h4>
                                    <div className='d-flex justify-content-between align-item-center mt-4'>
                                        <p>${item.price}</p>
                                        <p>{item.quantity}</p>
                                        <i className='bi bi-trash text-danger' onClick={() => DeleteCart(item)}></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            <div className='bg-light px-5 py-4 rounded h-25 flex-start'>
                <h4 className='text-center'>Order Summary</h4>
                <hr />
                <p className='fw-bold'>Total Item : {state.length}</p>
                <p className='fw-bold'>Total Amount : {TotalVal.toFixed(2)}</p>
                <button className='btn btn-warning rounded-5  py-2 px-5 mt-2'>Place Order</button>
            </div>
        </div>
    )
}
