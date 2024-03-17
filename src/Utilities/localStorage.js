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

const setToCart = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    const cartStr = JSON.stringify(cart)
    const setToLs = localStorage.setItem('cart',cartStr);
}

export { getStoredRequestStock, setToCart };

