import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'

const CheckoutSideMenu = () => {

    const {
        //cartProducts,
        toggleCheckoutSideMenu,
        isCheckoutSideMenuOpen, 
        //setCartProducts
    } = useContext(ShoppingCartContext)    
        

    return (
        
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 w-[450px] h-[calc(100vh-68px)] border bg-white/80 pb-6 px-6 `}>
            <div className='flex justify-between py-3'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon 
                className='size-8 text-red-600 cursor-pointer' 
                onClick={() => toggleCheckoutSideMenu()}></XMarkIcon>
            </div>

            <div className='p-6  overflow-y-scroll bg-white border border-blue-300 mb-4'>
                <OrderCard /> 
            </div>
            
        </aside>
    )
}

export { CheckoutSideMenu }