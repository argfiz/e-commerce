import { XMarkIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const ProductDetail = () => {

    const {
        isProductDetailOpen, 
        toggleProductDetail, 
        productToShow
    } = useContext(ShoppingCartContext)    

    return (
        
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 w-[450px] h-[calc(100vh-68px)] border bg-white/80 pb-5`}>
            <div className='flex justify-between items-center px-6 py-3'>
                <h2 className='font-medium text-xl'>Product details</h2>
                <XMarkIcon 
                className='size-8 text-red-600 cursor-pointer' 
                onClick={() => toggleProductDetail()}></XMarkIcon>
            </div>

            <div className='flex flex-col mx-6 overflow-y-scroll bg-white border border-blue-300 '>
                <figure className='mb-4'>
                    <img 
                        className='w-full h-[200px] pt-10 object-contain' 
                        src={productToShow.image} 
                        alt={productToShow.title}/>
                </figure>
                <p className='flex flex-col p-6 bg-white h-full '>
                    <span className='font-medium text-2xl mb-3 text-blue-400'>${productToShow.price}</span>
                    <span className='font-medium text-md mb-2'>{productToShow.title}</span>
                    <span className='font-light text-sm mb-1'>{productToShow.description}</span>
                </p>
            </div>
            <button className='flex justify-center items-center mt-2'>
                <PlusCircleIcon className='size-12 text-black mt-3'></PlusCircleIcon>
            </button>    
             
        </aside>
    )
}

export { ProductDetail }