
import { useState, createContext } from 'react'
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
    currentProdocut: [],
    setCurrentProduct: () => null,
})

export const ProductProvider = ({ children }) => {
    const [currentProdocut, setCurrentProduct] = useState(PRODUCTS);
    const value = { currentProdocut, currentProdocut }

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}