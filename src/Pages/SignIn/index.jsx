import { Link, Navigate } from 'react-router-dom'
import { useContext, useState, useRef, useEffect } from 'react'
import { ShoppingCartContext } from '../../Context'

function SignIn() {

  const { account,
          setAccount,
          setSignOut
   } = useContext(ShoppingCartContext)

  const [view, setView] = useState('user-info')
  const form = useRef(null)

  // Account
  const aux = localStorage.getItem('account')
  const parsedAccount = JSON.parse(aux)
  // Has an account 
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    // Redirect
    return <Navigate replace to={'/'} />
  }
  
  // LocalStorage set account
  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    // Create account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    setAccount(data)
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    setSignOut(true)
    // Sign In
    handleSignIn()
  }

  useEffect(() => {
    const storedAccount = localStorage.getItem('account');
    if (storedAccount) {
      setAccount(JSON.parse(storedAccount));
    }
  }, [setAccount]);


  const renderLogIn = () => {

    return (

      <div className='flex flex-col p-1.5 pt-0 w-[375px] h-[calc(100vh-44px)] bg-blue-500'>

        <h2 className='text-white font-bold text-lg text-center p-2'>Welcome</h2>

        <div className='flex flex-col justify-center items-center overflow-y-scroll h-full w-full p-5 bg-white border border-gray-500 rounded-sm shadow-md'>
          <div className=''>
            <p>
              <span className='font-light text-lg'>Email: </span>
              <span className='text-xl'>{account ? account.email : ''}</span>
            </p>
            <p>
              <span className='font-light text-lg'>Password: </span>
              <span className='text-xl'>{account ? account.password : ''}</span>
            </p>
          </div>
        </div>

        <div className='p-4 pt-3 w-full text-white'>
          <div className='text-center text-md font-semibold'>
            <p>{account? account.email : ''}</p>
            <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
          </div>
        </div>

        <Link to='/' className=' w-full'>
          <button
            className='flex justify-center items-center w-full bg-black pb-2'
            disabled={!hasUserAnAccount}
              onClick={ () => handleSignIn()}>
            <span className='text-white font-normal pt-[10px]'>Login In</span>
          </button>
        </Link>


        <button
          className='flex justify-center items-center w-full bg-white border border-black p-2'
          disabled={hasUserAnAccount}
          onClick={() => setView('create-user-info')}>
          <span className='font-normal text-blue-500 '>Sign Up</span>
        </button>


      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <div className='flex flex-col p-1.5 pt-0 mt-0 w-[375px] h-[calc(100vh-44px)] bg-blue-500'>
        <h2 className='text-white font-bold text-lg text-center p-2'>Welcome</h2>
        <div className='overflow-y-scroll h-full w-full px-3 bg-white border border-gray-500 rounded-sm p-5'>
          <form ref={form} className='flex flex-col gap-4 w-80 mx-auto'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name" className='font-light text-sm'>Your name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={parsedAccount?.name}
                placeholder="Peter"
                className='rounded-sm border border-black placeholder:font-light
            placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 w-full'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email" className='font-light text-sm'>Your email:</label>
              <input
                type="text"
                id="email"
                name="email"
                defaultValue={parsedAccount?.email}
                placeholder="hi@helloworld.com"
                className='rounded-sm border border-black
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 w-full'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password" className='font-light text-sm'>Your password:</label>
              <input
                type="text"
                id="password"
                name="password"
                defaultValue={parsedAccount?.password}
                placeholder="******"
                className='rounded-sm border border-black
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 w-full'
              />
            </div>
          </form>

        </div>
        <Link to="/">
          <button
            className='flex justify-center items-center w-full bg-black border border-black p-2 rounded-sm'
            onClick={() => createAnAccount()}>
            <span className='font-normal  text-white'>Create</span>
          </button>
        </Link>
      </div>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

  return (
    <>
      {renderView()}
    </>
  )



}

export { SignIn }