import { createContext, useState, /*useEffect*/ } from 'react'
import { PropTypes } from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ( {children} ) => {

    //Shopping Cart Increment quantity
    const [count, setCount] = useState(0)  
    
    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetail] = useState(false)
    const toggleProductDetail = () =>  setIsProductDetail(!isProductDetailOpen)

    //Checkout Side Menu Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const toggleCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
   
    //Product Detail Show product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart Add products to cart
    const [cartProducts, setCartProducts] = useState([])
    
    /* CREAR UN SCRIPT DE MANTENIMIENTO
    useEffect(() => {
        console.log('CART: ', cartProducts )
    }, [cartProducts])
    */

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetail,
            toggleProductDetail,
            toggleCheckoutSideMenu,
            setIsCheckoutSideMenuOpen,
            isCheckoutSideMenuOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};