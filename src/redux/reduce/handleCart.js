const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload
    switch (action.type) {
        case "ADDITEM":
            const exitingItem = state.find(item => {
                return item.id === product.id
            })
            if (exitingItem) {
                return  state.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            else {
                const product = action.payload;
                return [...state, { ...product, quantity: 1 }]
            }
        case "DELETEITEM":
            const exitItem = state.find(item => {
                return item.id === product.id
            }) 
            if (exitItem.quantity === 1) {
                return state.filter((item) => 
                     item.id !== exitItem.id
                )
            }
            else {
                return state.map((item) => 
                     item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                )
            }
            // break;
        default:
            return state
    }
}

export default handleCart;