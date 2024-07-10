import { ShoppingBagIcon, HomeIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    let navLeft = [
        { 
            to: '/', 
            text: 'e-Box', 
            className: 'text-white font-bold text-xl', 
            active: false,
            onClick: () => {
                context.setSearchByTitle(null) 
                context.setSearchByCategory(null) 
                context.setFilteredItems(null)
            }
        },
        { 
            to: '/', 
            text: <HomeIcon className='w-7 h-7 text-white'></HomeIcon>, 
            className: 'text-white font-semibold text-md', 
            active: true,
            onClick: () => {
                context.setSearchByTitle(null) 
                context.setSearchByCategory(null)   
                context.setFilteredItems(null)
            }
         },
        {
            to: '/clothing',
            text: 'Clothing',
            className: 'text-white font-semibold text-md',
            active: true,
            onClick: () => {
                context.setSearchByCategory('clothing')
                context.setSearchByTitle(null) 
            }
        },
        { 
            to: '/electronics', 
            text: 'Electronics', 
            className: 'text-white font-semibold text-md', 
            active: true,
            onClick: () => {
                context.setSearchByCategory('electronics')
                context.setSearchByTitle(null) 
            }
        },
        { 
            to: '/jewelery', 
            text: 'Jewelery', 
            className: 'text-white font-semibold text-md', 
            active: true ,
            onClick: () => {
                context.setSearchByCategory('jewelery')
                context.setSearchByTitle(null) 
            }
        }

    ]
    let navRight = [
        { to: '', text: 'francozoqui@gmail.com', className: 'text-white text-sm', active: false },
        { to: '/my-orders', text: 'My orders', className: 'text-white font-semibold text-md', active: true },
        { to: '/my-account', text: 'My Account', className: 'text-white font-semibold text-md', active: true },
        { to: '/sign-in', text: 'Sign in', className: 'text-white font-semibold text-md', active: true },
        {
            to: '',
            text: (
                <div className='flex justify-between items-end w-[40px]' >
                    <ShoppingBagIcon
                        className='w-7 h-7 text-white cursor-pointer'
                        onClick={() => {
                            if (!context.isCheckoutSideMenuOpen) {
                                context.setIsCheckoutSideMenuOpen(true)
                            }
                            if (context.isCheckoutSideMenuOpen) {
                                context.setIsCheckoutSideMenuOpen(false)
                            }
                        }}>
                    </ShoppingBagIcon>
                    <span>{`${context.cartProducts.length}`}</span>
                </div>
            ),

        }
    ]
    
    const renderMenuItem = (item) => (

        <li key={item.text} className={item.className}>

            {item.to === '' ? (
                item.text
            ) : (
                <NavLink
                    to={item.to}
                    className={({ isActive }) => (
                        isActive ? (item.active ? activeStyle : '') : ''
                    )}
                    onClick={item.onClick}>

                    {item.text}

                </NavLink>
            )
            }

        </li>
    )

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-2 px-20 text-sm font-light flex-wrap bg-black/80'>

            <ul className='flex gap-3 items-center flex-wrap '>
                {navLeft.map(item => (
                    renderMenuItem(item)
                ))}
            </ul>

            <ul className='flex gap-3 items-center flex-wrap mt-2 md:mt-0'>
                {navRight.map(item => (
                    renderMenuItem(item)
                ))}
            </ul>

        </nav>
    )
}

export { Navbar }