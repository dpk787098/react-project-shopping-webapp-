export const storeProductsDataAction = (payload) => ({
    type: "STORE_PRODUCT_DATA_TO_STORE",
    payload
})

export const addProductToCartAction = (payload) => ({
    type: "ADD_PRODUCT_TO_CART",
    payload
})

export const removeFromCartAction = (payload) => ({
    type: "REMOVE_FROM_CART",
    payload
})