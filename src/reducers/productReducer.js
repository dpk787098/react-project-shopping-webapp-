// import * as action from '../actions/actions';

const initialState = {
    productData: null,
}

export const productReducer = (state = initialState, {type,payload}) => {
    switch (type){
        case "STORE_PRODUCT_DATA_TO_STORE":
            return { ...state, productData: payload}

        default:
            return state

    }
}