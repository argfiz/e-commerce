
import { Link } from 'react-router-dom'


function SignIn() {


  return (

    <div className='flex flex-col p-1.5 pt-0 w-[375px] h-[calc(100vh-44px)] bg-blue-500'>

      <h2 className='text-white font-bold text-lg text-center p-2'>Welcome</h2>


      <div className='flex flex-col justify-center items-center overflow-y-scroll h-full w-full p-5 bg-white border border-gray-500 rounded-sm shadow-md'>

        <div className=''>
          <p>
            <span className='font-light text-sm'>Email: </span>
            <span>francozoqui@gmail.com</span>
          </p>
          <p>
            <span className='font-light text-sm'>Password: </span>
            <span>******</span>
          </p>
        </div>

      </div>

      <div className='p-4 pt-3 w-full text-white'>
        <div className='text-center text-md font-semibold'>
          <p>francozoqui@gmail.com</p>
          <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
        </div>
      </div>

      <Link to='/' className=' w-full'>
      <button className='flex justify-center items-center w-full bg-black pb-2'>
        <span className='text-white font-normal pt-[10px]'>Login In</span>
      </button>
      </Link>

      <Link to='/' className=' w-full'>
        <button className='flex justify-center items-center w-full bg-white border border-black p-2'>
          <span className='font-normal text-blue-500 '>Sign Up</span>
        </button>
      </Link>



    </div>

  )
}

export { SignIn }