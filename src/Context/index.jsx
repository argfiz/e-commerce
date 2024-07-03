import { createContext, useState } from 'react'
import { PropTypes } from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ( {children} ) => {

    //Shopping Cart Increment quantity
    const [count, setCount] = useState(0)  
    
    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetail] = useState(false)
    const toggleProductDetail = () =>  setIsProductDetail(!isProductDetailOpen)

    //Product Detail Show product
    const [productToShow, setProductToShow] = useState({})
    //console.log('PRODUCT TO SHOW: ', productToShow )
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetail,
            toggleProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};