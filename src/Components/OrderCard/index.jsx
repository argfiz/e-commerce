import { TrashIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'

const OrderCard = () => {

    const {
        cartProducts,
        setCartProducts,
        setCount
    } = useContext(ShoppingCartContext)

    const renderOrderCard = (item) => (
        
        <li key={item.id}>    
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-2'   >
                    <figure className='w-12 h-12'>
                        <img className='w-full h-full rounded-lg object-contain' src={item.image} alt={item.title}/>
                    </figure>
                    <p className='text-sm font-light'>{item.title}</p>
                </div>  

                <div className='flex items-center gap-2'>
                    <p className='text-lg font-medium'>${item.price}</p>
                    <TrashIcon onClick={() => handleDelete(item.id) } className='size-5 text-black cursor-pointer'></TrashIcon>
                </div>
            </div>
        </li>
     )
  
    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
        setCount(cartProducts.length - 1)
    }
    
    return(
      <>  
        <ul>
             {cartProducts.map(item => (
                renderOrderCard(item)
             ))}
        </ul>
     </>  
    )       
}


export { OrderCard }
