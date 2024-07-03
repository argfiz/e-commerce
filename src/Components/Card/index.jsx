import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import  { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {

    const {count, setCount, toggleProductDetail, setProductToShow, } = useContext(ShoppingCartContext)

    //Product Detail Open/Show product
    const showProduct = (ProductDetail) => {
        toggleProductDetail()
        setProductToShow(ProductDetail)
        
    }

    return(
        <article 
            className='bg-gray-100 cursor-pointer w-[145px] h-60 rounded-lg'
            onClick={() => showProduct(data)}> 
            <figure className='relative mb-2 w-full h-4/5'>
                <figcaption className='absolute bottom-0 left-0 bg-white/100 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data?.category}
                </figcaption>
                <img className='w-full h-full object-contain' 
                    src={data?.image} 
                    alt={data?.title} />
                <button 
                    className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1'>
                     <PlusCircleIcon 
                        className='size-6 text-blue-500' 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            setCount(count + 1); 
                          }}></ PlusCircleIcon>
                     </button>
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
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export {Card}