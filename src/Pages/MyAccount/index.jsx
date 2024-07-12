import { useContext, useState, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'





function MyAccount() {

  const {
    account,
    setAccount
  } = useContext(ShoppingCartContext)

  const [view, setView] = useState('user-info')



  const form = useRef(null)


  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    // Update account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    setAccount(data)
  }


  const renderUserInfo = () => {
    return (

      <div className='flex flex-col p-1.5 pt-0 w-[375px] h-[calc(100vh-44px)] bg-blue-500'>
        <div className='items-center p-2 '>
          <h2 className='text-white font-bold text-lg text-center'>My Account</h2>
        </div>
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

        <div>
          <button
            className='flex justify-center items-center w-full bg-black p-2'
            onClick={() => setView('edit-user-info')}>
            <span className='text-white font-normal'>Edit</span>
          </button>
        </div>

      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (

      <div className='flex flex-col p-1.5 pt-0 w-[375px] h-[calc(100vh-44px)] bg-blue-500'>
        <div className='items-center p-2 '>
          <h2 className='text-white font-bold text-lg text-center'>My Account</h2>
        </div>
        <div className='flex flex-col justify-center items-center overflow-y-scroll h-full w-full  bg-white border border-gray-500 rounded-sm shadow-md'>

        <form ref={form} className='flex flex-col gap-4 w-80'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="name" className='font-light text-sm'>Your name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={account.name}
                  placeholder="Peter"
                  className='rounded-sm border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='font-light text-sm'>Your email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  defaultValue={account.email}
                  placeholder="hi@helloworld.com"
                  className='rounded-sm border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='font-light text-sm'>Your password:</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  defaultValue={account.password}
                  placeholder="******"
                  className='rounded-sm border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
             
            </form>
      

        </div>

        <div>
          <button
            className='flex justify-center items-center w-full bg-black p-2'
            onClick={() => { setView('user-info'), editAccount() }}>
            <span className='text-white font-normal'>Edit</span>
          </button>
        </div>

      </div>


      
           



    )
  }

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

  return (
    <>
      {renderView()}
    </>
  )
}

export { MyAccount }
