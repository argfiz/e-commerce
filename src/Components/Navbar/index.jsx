import { ShoppingBagIcon, HomeIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {

    const {
        setSearchByTitle,

        signOut,
        setSignOut,
        setSearchByCategory,
        setFilteredItems,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        cartProducts
    } = useContext(ShoppingCartContext)



    const handleSignOut = () => {
        localStorage.setItem('sign-out', JSON.stringify(true))
        setSignOut(true)
    }


    //Sign Out value
    const isUserSignOut = signOut




    /**/// Render navbar
    const activeStyle = 'underline underline-offset-4'

    let navLeft = [
        {
            to: '/',
            text: 'e-Box',
            className: 'text-white font-bold text-xl',
            active: false,
            onClick: () => {
                setSearchByTitle(null)
                setSearchByCategory(null)
                setFilteredItems(null)
            }
        },
        {
            to: '/',
            text: <HomeIcon className='w-7 h-7 text-white'></HomeIcon>,
            className: 'text-white font-semibold text-md',
            active: true,
            onClick: () => {
                setSearchByTitle(null)
                setSearchByCategory(null)
                setFilteredItems(null)
            }
        },
        {
            to: '/clothing',
            text: 'Clothing',
            className: 'text-white font-semibold text-md',
            active: true,
            onClick: () => {
                setSearchByCategory('clothing')
                setSearchByTitle(null)
            }
        },
        {
            to: '/electronics',
            text: 'Electronics',
            className: 'text-white font-semibold text-md',
            active: true,
            onClick: () => {
                setSearchByCategory('electronics')
                setSearchByTitle(null)
            }
        },
        {
            to: '/jewelery',
            text: 'Jewelery',
            className: 'text-white font-semibold text-md',
            active: true,
            onClick: () => {
                setSearchByCategory('jewelery')
                setSearchByTitle(null)
            }
        }

    ]
    let navRight = [
        { to: '', text: 'francozoqui@gmail.com', className: 'text-white text-sm', active: false },
        { to: '/my-account', text: 'My Account', className: 'text-white font-semibold text-md', active: true },
        { to: '/my-orders', text: 'My Orders', className: 'text-white font-semibold text-md', active: true },
        {
            to: '/sign-in',
            text: signOut ? 'Sign Out' : 'Sign In',
            className: 'text-white font-semibold text-md',
            active: true,
            onClick: () => handleSignOut()
        },
        {
            to: '',
            text: (
                <div className='flex justify-between items-end w-[40px]' >
                    <ShoppingBagIcon
                        className='w-7 h-7 text-white cursor-pointer'
                        onClick={() => {
                            if (!isCheckoutSideMenuOpen) {
                                setIsCheckoutSideMenuOpen(true)
                            }
                            if (isCheckoutSideMenuOpen) {
                                setIsCheckoutSideMenuOpen(false)
                            }
                        }}>
                    </ShoppingBagIcon>
                    <span className='text-white'>{`${cartProducts.length}`}</span>
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
    /**///

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-2 px-20 text-sm font-light flex-wrap bg-black/80'>

            <ul className='flex gap-3 items-center flex-wrap '>
                {navLeft.map(item => (
                    renderMenuItem(item)
                ))}
            </ul>

            <ul className='flex gap-3 items-center flex-wrap mt-2 md:mt-0'>

                {!isUserSignOut ? (
                    <>
                        {renderMenuItem(navRight[3])} {/* Render Sign Out */}
                        {navRight.slice(1, 3).map(item => renderMenuItem(item))} {/* Render other items */}
                    </>
                ) : (
                    <>
                        {renderMenuItem(navRight[0])}  {/* Render email */}
                        {renderMenuItem(navRight[3])} {/* Render Sign In */}
                        {renderMenuItem(navRight[1])}  {/* Render My account */}
                        {renderMenuItem(navRight[2])} {/* Render My orders */}
                    </>
                )}
                
                {renderMenuItem(navRight[4])} {/* Render shopping bag */}

            </ul>



        </nav>
    )
}

export { Navbar }