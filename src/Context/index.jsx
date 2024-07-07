import { createContext, useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { getAllProducts } from '../api'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ( {children} ) => {

    //Shopping Cart Increment quantity
    const [count, setCount] = useState(0)  
    
    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetail] = useState(false)
    const toggleProductDetail = () =>  setIsProductDetail(!isProductDetailOpen)

    //Checkout Side . Menu Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const toggleCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
   
    //Product Detail . Show product
    const [productToShow, setProductToShow] = useState({})

    


/* #QTEST CREAR UN SCRIPT DE MANTENIMIENTO
    useEffect(() => {
        console.log('CART: ', cartProducts )
    }, [cartProducts])
    */
    //Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([])


/* #QTEST CREAR UN SCRIPT DE MANTENIMIENTO
    useEffect(() => {
        console.log('ORDER: ', order )
    }, [order])
    */
    //Shopping Cart . Order
    const [order, setOrder] = useState([])

    //Get products
    const [items, setItems] = useState(null)  
    
    //Get products by SearchTitleBar
    const [searchByTitle, setSearchByTitle] = useState(null) 
    

    useEffect(() => {
        async function fetchData() {
          try{
            const data = await getAllProducts()
            setItems(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          } 
        } 
        fetchData()
      }, [])
    
    

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
            setCartProducts,
            order,
            setOrder,   
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};