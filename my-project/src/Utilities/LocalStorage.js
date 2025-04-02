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

const removeFromLocalStorage = id => {
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    savedToLocalStorage(remainingCart)
}

export {getCartFromLocalStorage as getSotreCart , addItemToCartLocalStorage as addToStoreCart,
removeFromLocalStorage as removeFromCart,
}