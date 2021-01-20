const initialState = {
    productData: null,
    cartData: [],
}

export const productReducer = (state = initialState, {type,payload}) => {
    switch (type){
        case "STORE_PRODUCT_DATA_TO_STORE":
            return { ...state, productData: payload}

        case "ADD_PRODUCT_TO_CART":
            if(state.cartData?.length > 0){
                let index = state.cartData?.findIndex(x => x.id ===payload.id);
                if(index > -1){
                    let temp = state;
                    temp.cartData[index].count = state.cartData[index].count + 1;
                    return temp;
                    // return {
                    //     ...state, count:[ ...state.cartData[index].count , state.cartData[index].count+1]
                    // }
                }
                else{
                    return { 
                        ...state, cartData: [...state.cartData, payload] }
                }
            }
            else{
                return { 
                      ...state, cartData: [...state.cartData, payload]
                    }
            }
        case "REMOVE_FROM_CART":
            for(let i=0;i<state.cartData.length;i++){
                if(state.cartData[i].id===payload){
                    state.cartData.splice(i,1)
                }
            }
            return { ...state, cartData:[...state.cartData]}
            // return { ...state, cartData: payload }
        default:
            return state

    }
}