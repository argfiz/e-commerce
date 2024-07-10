import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'
import { dateTime } from '../../utils'


const CheckoutSideMenu = () => {

    const {
        cartProducts,
        toggleCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        order,
        setOrder,
        setCartProducts,
        setCount,
        setSearchByTitle
    } = useContext(ShoppingCartContext)


    /**
     * UPDATE . To do en el customHook
     */
    //
    const handleCheckout = () => {

        const orderToAdd = {
            id: dateTime(),
            date: dateTime(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setCount(0)
        toggleCheckoutSideMenu()
        setSearchByTitle(null)
    }
   
    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 w-[375px] h-[calc(100vh-43px)] p-2 pt-0 border bg-white/80 shadow-inner`}>



            <div className='flex relative justify-center items-center p-2 '>
                <div className='flex absolute left-0'>
                    <XMarkIcon
                        className='size-8 text-red-600 cursor-pointer'
                        onClick={() => toggleCheckoutSideMenu()}>
                    </XMarkIcon>
                </div>

                <div className=''>
                    <h2 className='font-bold text-lg'>My Cart<span className='font-bold text-blue-500 text-xl pl-3 underline underline-offset-4'>${totalPrice(cartProducts)}</span></h2>


                </div>

            </div>



            <div className='p-6 flex-1  overflow-y-scroll bg-white border border-blue-500 rounded-sm shadow-2xl'>
                <OrderCard />
            </div>
            <div >
                <Link to='/my-orders/last'>
                    <button
                        className='flex justify-center items-center w-full bg-black pb-3'
                        onClick={() => handleCheckout()}>
                        <ShoppingCartIcon
                            className='size-6 text-white cursor-pointer mt-3' />
                        <span className='text-white font-normal pt-[10px]'>Checkout</span>
                    </button>
                </Link>
                <button
                    className='flex justify-center items-center w-full bg-white border border-blue-500 pb-3'
                    onClick={() => toggleCheckoutSideMenu()}>
                    <span className='font-normal text-blue-500 pt-[10px]'>Seguir viendo</span>
                </button>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }