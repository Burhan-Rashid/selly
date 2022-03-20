const defaultState = {
    selectedItems: {
        items: [],
        totalPrice: 0
    }
}

const addToCart = (state, action) => {
    let newState = { ...state };
    newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload.item],
        totalPrice: newState.selectedItems.totalPrice + action.payload.item.price
    }
    return newState;
}

const deleteFromCart = (state, action) => {
    let newState = { ...state };
    newState.selectedItems.items.splice(action.payload.index, 1)
    newState.selectedItems = {
        items: newState.selectedItems.items,
        totalPrice: newState.selectedItems.totalPrice - action.payload.price
    }
    return newState;
}

const emptyCart = (state, action) => {
    let newState = defaultState
    return newState;
}

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return addToCart(state, action);
        case 'DELETE_FROM_CART': return deleteFromCart(state, action);
        case 'EMPTY_CART': return emptyCart(state, action);
        default: return state;
    }
}

export default cartReducer;
