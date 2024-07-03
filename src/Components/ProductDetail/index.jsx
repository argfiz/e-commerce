import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const ProductDetail = () => {

    const {isProductDetailOpen, toggleProductDetail, productToShow} = useContext(ShoppingCartContext)    

    //console.log('PRODUCT TO SHOW 2: ', productToShow )

    return (
        
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 w-[360px] h-[calc(100vh-90px)] border border-blue-200 rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon 
                className='size-6 text-black cursor-pointer' 
                onClick={() => toggleProductDetail()}></XMarkIcon>
            </div>

            <div className='flex flex-col mx-3 overflow-y-auto'>
                <figure className='px-6'>
                    <img 
                        className='w-full h-full rounded-lg' 
                        src={productToShow.image} 
                        alt={productToShow.title}/>
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-3 text-blue-400'>{productToShow.price}</span>
                    <span className='font-medium text-md mb-1'>{productToShow.title}</span>
                    <span className='font-light text-sm '>{productToShow.description}</span>
                </p>
            </div>
                
        </aside>

    )
}


export { ProductDetail }