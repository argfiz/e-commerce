import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import { OrdersCard } from '../../Components/OrdersCard'

function MyOrders() {

   const {order} = useContext(ShoppingCartContext)

    return (
      <>
    <div className='flex flex-col p-1.5 pt-0 w-[375px] h-[calc(100vh-44px)] bg-blue-500'>
      
      <div className='flex justify-start items-center'>
        <h1 className='text-white p-2 font-bold text-lg  text-center'>My Orders:</h1>
        <span className='text-white font-bold text-lg'>{order.length}</span> 
      </div>
       

        <div className='overflow-y-scroll h-full w-full px-3 bg-white border border-gray-500 rounded-sm'> 
          <OrdersCard />
        </div>
          

             { /* AGREGAR INFORMACION VISUAL
             <p>12 V(pagos) / 5 X(cancelados) / 8 O(pendientes)</p>*/ }
        

              <Link to='/'>
              <button 
                    className='flex justify-center items-center w-full bg-black border border-gray-800 pb-3'>
                    
                    <span className='font-normal  text-white pt-[10px]'>Seguir viendo</span>
                </button>  
              </Link>
      </div>       
      

       
      </>
    )
  }
  
  export {MyOrders}
  