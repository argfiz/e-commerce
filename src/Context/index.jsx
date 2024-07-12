import { createContext, useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { getAllProducts } from '../api'
//import { useLocalStorage } from './useLocalStorage'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {



    // My Account
    //const [account, setAccount] = useState()
    const [account, setAccount] = useState(() => {
        const accountInLocalStorage = localStorage.getItem('account')
        return accountInLocalStorage ? JSON.parse(accountInLocalStorage) : null
    })
    // Sign out
    const [signOut, setSignOut] = useState(() => {
        const signOutInLocalStorage = localStorage.getItem('sign-out')
        return signOutInLocalStorage ? JSON.parse(signOutInLocalStorage) : false
    })
    //console.log('account:  ', account)
    //console.log('signOut:  ', signOut)







    // Shopping Cart Increment quantity
    const [count, setCount] = useState(0)

    /**/// Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetail] = useState(false)
    const toggleProductDetail = () => setIsProductDetail(!isProductDetailOpen)
    /**/

    /**///Checkout Side . Menu Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const toggleCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)
    /**/

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

    /**///Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //console.log('FilteredItems: ', filteredItems)

    /**/
    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    //console.log('searchByCategory :', searchByCategory) 


    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item =>
            item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item =>
            item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }


    /**///Get product filtered by title or category
    useEffect(() => {
        let filtered = items
        if (searchByTitle) {
            filtered = filteredItemsByTitle(filtered, searchByTitle)
        }
        if (searchByCategory) {
            filtered = filteredItemsByCategory(filtered, searchByCategory)
        }
        setFilteredItems(filtered)
    }, [items, searchByTitle, searchByCategory])
    ///**/



    useEffect(() => {
        async function fetchData() {
            try {
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
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};