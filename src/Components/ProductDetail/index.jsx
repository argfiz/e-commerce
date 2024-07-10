import { XMarkIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const ProductDetail = () => {

    const {
        isProductDetailOpen, 
        toggleProductDetail, 
        productToShow,
    } = useContext(ShoppingCartContext)    

    return (
        
        <aside 
            className={`${isProductDetailOpen ? 'flex  fixed left-0  flex-col  w-[375px] h-[calc(100vh-43px)] p-2 pt-0 border bg-white/80' : 'hidden'} `}>
            <div className='flex relative justify-center items-center p-2'>
                
                <h2 className='font-bold text-lg'>Product Details</h2>
                <div className=' flex absolute right-0'>
                    <XMarkIcon 
                     className='size-8 text-red-600 cursor-pointer' 
                    onClick={() => toggleProductDetail()}></XMarkIcon></div>
                 </div>  

            <div className='flex flex-col overflow-y-scroll bg-white border border-blue-500 rounded-sm shadow-2xl flex-1 '>
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

            <div>
                <button className='flex justify-center items-center w-full bg-black pb-3'>
                    <PlusCircleIcon className='size-6 text-white mt-3'></PlusCircleIcon>
                </button> 
                <button 
                    className='flex justify-center items-center w-full bg-white border border-blue-500 pb-3'
                    onClick={() => toggleProductDetail()}>
                    <span className='font-normal text-blue-500 pt-[10px]'>Seguir viendo</span>
                </button>
            </div>
               
             
        </aside>
    )
}

export { ProductDetail }