const getStoredRequestStock = () => {
    const storedRequest = localStorage.getItem('request-stock');
    if (storedRequest) {
        return JSON.parse(storedRequest);
    }
    return [];
}

const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    return [];
}

export { getStoredCart, getStoredRequestStock };

