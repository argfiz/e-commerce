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
        cartProducts,
        account
    } = useContext(ShoppingCartContext)




// Sign Out
const aux = localStorage.getItem('sign-out')
const parsedSignOut = JSON.parse(aux)
const isUserSignOut = signOut || parsedSignOut

//console.log('parsedSignOut: ', parsedSignOut)
//console.log('signOut: ', signOut)
//console.log('isUserSignOut: ', isUserSignOut)

const handleSignOut = () => {
        if (isUserSignOut) {
            const stringifiedSignOut = JSON.stringify(true)
            localStorage.setItem('sign-out', stringifiedSignOut)
            setSignOut(true)
          } else {
            setSignOut(false)
          }      
    }

    

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
        { to: '', text: account ? account.email : '', className: 'text-white text-sm', active: false },
        { to: '/my-account', text: 'My Account', className: 'text-white font-semibold text-md', active: true },
        { to: '/my-orders', text: 'My Orders', className: 'text-white font-semibold text-md', active: true },
        {
            to: '/sign-in',
            text: !isUserSignOut ? 'Sign In' : 'Sign Out',
            className: 'text-white font-semibold text-md',
            active: true,
            onClick: () => handleSignOut()
        },
        {
            to: '',
            text: (
                <div className='relative flex justify-between items-end w-[40px]' >
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
                    <div className='absolute bottom-3.5 left-3.5 text-center  rounded-full bg-blue-500 w-5 h-5 text- text-white font-bold'>{`${cartProducts.length}`}</div>
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
    /**/// Render navbar

console.log()
    const renderNavRight = () => {
        if (isUserSignOut) {  
          return (
            <>
              {renderMenuItem(navRight[3])} {/* Render Sign Out */}
              {renderMenuItem(navRight[1])}  {/* Render My account */}
              {renderMenuItem(navRight[2])} {/* Render My orders */}                     
            </>
          );
        } else {
          return (
            <>                  
              {renderMenuItem(navRight[3])} {/* Render Sign In */}
              {renderMenuItem(navRight[2])} {/* Render My orders */} 
            </>
          );
        }
      };



    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-2 px-20 text-sm font-light flex-wrap bg-black/80'>

            <ul className='flex gap-3 items-center flex-wrap '>
                {navLeft.map(item => (renderMenuItem(item)))}
            </ul>

            <ul className='flex gap-3 items-center flex-wrap mt-2 md:mt-0'>

             
                {renderNavRight()}
                {renderMenuItem(navRight[4])} {/* Render shopping bag */}

            </ul>



        </nav>
    )
}

export { Navbar }