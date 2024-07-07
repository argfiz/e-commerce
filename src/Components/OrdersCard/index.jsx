import { TrashIcon, Bars3Icon, CurrencyDollarIcon  } from '@heroicons/react/24/outline'
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'

const OrdersCard = () => {

    const { 
        order,
        setOrder
    } = useContext(ShoppingCartContext)

    const renderOrdersCard = (order , index) => (
        
        <div className='flex justify-between  border border-gray-500 p-4 mt-4 rounded-md shadow-md'>

               

                <div className=' flex justify-between items-center'>

                    
                    <Link key={index} to={`${index}`}>
                    <div className=''>
                    <Bars3Icon className='size-7'></Bars3Icon>
                    </div>
                    </Link>
                        <p className='font-normal pl-5'>Articles:<span className='font-normal pl-2 text-xl'>{order.totalProducts}</span></p>
   
                </div>  

                <div className=''>   
                <CurrencyDollarIcon className='size-8 text-green-600'></CurrencyDollarIcon>
                </div>

            <div className=''>
                    <div className='flex justify-end'>
                        
                        <span className='text-lg font-medium w-16'>${order.totalPrice}</span>
                       
                            <TrashIcon onClick={() => handleDelete(index)} className='size-7 ml-3 text-gray-800 cursor-pointer'></TrashIcon>
                                
                    </div>
            </div>

        </div>    

 
     )
  
   
     const handleDelete = (id) => {
        const filteredOrders = order.filter((_,index) => index != id)
        setOrder(filteredOrders)
        //setCount(cartProducts.length - 1)
    }

    
    return(
      <>  
    
             {order.map((order, index) => (
                renderOrdersCard(order, index)
             ))}
        
     </>  
    )       
}


export { OrdersCard }