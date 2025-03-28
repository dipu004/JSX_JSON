// 1.To get Something from local Storage , you will get it as a string 
// 2.Convert this to JavaScript Object/Array

const getCartFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const savedToLocalStorage = cart => {
     const cartStringified = JSON.stringify(cart);
     localStorage.setItem('cart',cartStringified);
}

getCartFromLocalStorage()

const addItemToCartLocalStorage = id => {
       const cart = getCartFromLocalStorage();
       const newCart = [...cart , id];
 
       savedToLocalStorage(newCart)
}

export {getCartFromLocalStorage as getSotreCart , addItemToCartLocalStorage as addToStoreCart}