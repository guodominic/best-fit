import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    productQuantity: 0,
    totalPrice: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
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
    const minusItemToCart = (productTominus) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem.id === productTominus.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 >= 0 ? cartItem.quantity - 1 : 0 }
                : cartItem
        ))
    }
    const removeItemFromCart = (productToRemove) => {
        let index = cartItems.findIndex(cartItem => cartItem.id === productToRemove.id)
        const newCartItems = [...cartItems]
        newCartItems.splice(index, 1)
        setCartItems(newCartItems)
    }
    useEffect(() => {
        //use map
        //let initialQuantity = 0; cartItems.map(cartItem => initialQuantity = initialQuantity + cartItem.quantity)
        //use reduce
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setProductQuantity(newCartCount)
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
        setTotalPrice(newTotalPrice)
    }, [cartItems])

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        productQuantity,
        totalPrice,
        minusItemToCart,
        removeItemFromCart
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
