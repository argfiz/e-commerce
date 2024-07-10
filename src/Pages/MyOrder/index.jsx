import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'




function MyOrder() {
  const {
      order,
  } = useContext(ShoppingCartContext)




 //Fetch Index . On Path
  const currentPah = window.location.pathname
  let index = currentPah.substring(currentPah.lastIndexOf('/') + 1)
  if (index === 'last') index = order?.length -1
 




  const lastOrder = order?.length > 0 ? order?.[index] : [];  
  
   
   //console.log('TEST : ', lastOrder);
  //console.log('TEST : ', lastOrderItems);


    return (
      
        
        <div className='flex flex-col p-2 pt-0 w-96 h-[calc(100vh-44px)] bg-blue-500'>
            <div className='flex justify-between items-center p-2 '>
              <h2 className='text-white font-bold text-lg text-center'>My Order</h2> 
              <span className='text-white font-semibold text-lg'>{lastOrder.date}</span>
            </div>
            <div  className=' overflow-y-scroll h-full w-full p-5 pt-3 mt-0 bg-white border border-gray-500 rounded-sm shadow-md'>

              <ul>
                {lastOrder?.products.map(item => (    
                  
                  <li key={item.id}>    
                    <div className='flex justify-between items-center pt-2'>
                        <div className='flex items-center gap-5'   >
                            <figure className='w-[50px] h-[50px]'>
                                <img className='w-full h-full rounded-lg object-contain' src={item.image} alt={item.title}/>
                            </figure>
                            <p className='text-sm font-light'>{item.title}</p>
                        </div>  
                    </div>  
                  </li>
                ))} 
              </ul> 
                
               
                      
            </div>

            <div className='p-2 w-full text-white'>    
                <div className='flex justify-center text-lg font-bold'>
                  <p>Total orden:  </p>
                  <p className='pl-2'>${lastOrder.totalPrice}</p>
                </div>
              </div>  

                    <button className='flex justify-center items-center w-full bg-black pb-2'>
                      
                        <span className='text-white font-normal pt-[10px]'>Pagar</span>
                    </button>
                
                    <Link to='/my-orders' className=' w-full'>
                    <button className='flex justify-center items-center w-full bg-white border border-black p-2'>
                        <span className='font-normal text-blue-500 '>Mis Ordenes</span>
                    </button>  
                    </Link>



        </div>

                           
      
    )
  }
  
  export default MyOrder
  