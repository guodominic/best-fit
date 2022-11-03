import { useState, createContext, useEffect } from 'react'
import { getCategoriesAndDoc, addCollectionAndDoc } from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({
    categoriesMap: [],
    setCategoriesMap: () => null,
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    //use to add data to firebase
    /* useEffect(() => {
        addCollectionAndDoc('categories', SHOP_DATA)
    }, []) */

    useEffect(() => {
        //async can only be used inside of useEffect not on, this is incorrect useEffect(async()=>{})
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDoc();
            setCategoriesMap(categoriesMap)
        }
        getCategoriesMap();

    }, [])

    const value = { categoriesMap }

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}