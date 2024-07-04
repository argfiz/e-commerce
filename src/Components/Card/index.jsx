import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import  { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {

    const {count, 
        setCount,  
        toggleProductDetail, 
        setProductToShow,
        setCartProducts,
        cartProducts,
        toggleCheckoutSideMenu,
        isProductDetailOpen,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        setIsProductDetail
    } = useContext(ShoppingCartContext)

    //Product Detail Open/Show product
    const showProduct = (productDetail) => {
        toggleProductDetail()   
        setProductToShow(productDetail) 
        if(isCheckoutSideMenuOpen){
            setIsCheckoutSideMenuOpen(false)
        }  
        isProductDetailOpen ? setIsProductDetail(true) : null;  
    }
    
    //Shopping Cart Add product to cart
    const addProductToToCart = (event, productDetail) => {
        event.stopPropagation()
        setCount(count + 1)
        setCartProducts([...cartProducts, productDetail])
        toggleCheckoutSideMenu()
        if(isProductDetailOpen){
            toggleProductDetail()
            setIsProductDetail(false)
        } 
        isCheckoutSideMenuOpen ? setIsCheckoutSideMenuOpen(true) : null;
    }

    //Shopping Cart Added Icon off/on
    const renderIcon = (id) => {
        
        const isInCart = cartProducts.filter(item => item.id === id).length > 0

        if(isInCart){
            return (
                <button 
                    className='absolute top-2 right-2 flex justify-center items-center bg-white w-9 h-9 rounded-full p-1'
                    onClick={(e) => {addProductToToCart(e, data)}}> 
                    <CheckCircleIcon className='size-9 text-blue-500'></CheckCircleIcon>
                </button>   
            )
        }else{
             return (
                <button 
                    className='absolute top-2 right-2 flex justify-center items-center bg-white w-9 h-9 rounded-full p-1'
                    onClick={(e) => {addProductToToCart(e, data)}}> 
                    <PlusCircleIcon className='size-9 text-black'></PlusCircleIcon>
                </button>
            )     
        }      
    }
   
    
    return(
        <article 
            className='cursor-pointer w-[145px] h-60 rounded-lg'
            onClick={() => showProduct(data)}> 
            <figure className='relative mb-2 w-full h-4/5'>
                <figcaption className='absolute bottom-0 left-0 bg-white/90 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data?.category}
                </figcaption>
                <img className='w-full h-full object-contain' src={data?.image} alt={data?.title} />
                {renderIcon(data.id)}  
            </figure>
            <p className='flex justify-between items-center px-1 bg-blue-400 text-white h-10'>
                <span className='text-sm font-normal truncate'>{data?.title}</span>
                <span className='text-lg font-medium'>${data?.price}</span>
            </p>
        </article>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export {Card}