import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    productQuantity: 0,

});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0)
    const addItemToCart = (productToAdd) => {
        //map method
        /* let isProductInCart = false; cartItems.map((cartItem) => {if (cartItem.id === productToAdd.id) {return isProductInCart = true;}}) */
        //find method: simpler
        let isProductInCart = cartItems.find(
            (cartItem) => cartItem.id === productToAdd.id
        );

        isProductInCart
            ?
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === productToAdd.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ))
            :
            setCartItems([...cartItems, { ...productToAdd, quantity: 1 }])

    }
    useEffect(() => {
        //use map
        //let initialQuantity = 0; cartItems.map(cartItem => initialQuantity = initialQuantity + cartItem.quantity)
        //use reduce
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setProductQuantity(newCartCount)
    }, [cartItems])
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, productQuantity };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
