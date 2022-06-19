import type { NextPage } from 'next'

const TailwindcssTest: NextPage = () => {
  return (
    <div className='min-h-screen bg-slate-400 landscape:bg-teal-400 py-20 px-14 grid gap-10 place-content-center sm:grid-cols-2 md:grid-cols-3'>
      <div className='bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl sm:bg-blue-500 md:bg-blue-200 lg:bg-blue-300 xl:bg-blue-400 2xl:bg-blue-500'>
        <span className='font-semibold text-3xl dark:text-white'>Select-item</span>
        <ul>
          {[1,2,3,4,5].map(i => (
            <li key={i} className='flex justify-between my-2 odd:bg-slate-200 even:bg-slate-100 dark:odd:bg-slate-800 dark:even:bg-slate-700'>
              <span className='text-gray-500 dark:text-gray-100'>Gray Char</span>
              <span className='font-semibold dark:text-white'>$19</span>
            </li>
          ))}
        </ul>
        <div className='flex justify-between mt-2 pt-2 border-t-[1px] border-dashed'>
          <span className='dark:text-gray-100'>Total</span>
          <span className='font-semibold dark:text-white'>$90</span>
        </div>
        <button className='
          block mt-5 bg-blue-500 rounded-xl w-1/2 mx-auto p-3 text-white text-center
        hover:bg-teal-500 hover:text-black
          active:bg-yellow-500
          focus:text-red-500
        '>Checkout</button>
      </div>

      <div className='bg-white overflow-hidden rounded-3xl shadow-2xl group'>
        <div className='bg-blue-500 p-6 pb-14 md:pb-24'>
          <span className='text-white text-2xl'>Profile</span>
        </div>
        <div className='rounded-3xl p-6 relative bg-white -top-5'>
          <div className='flex relative -top-16 items-end justify-between'>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Orders</span>
              <span className='font-medium'>340</span>
            </div>
            <div className='h-24 w-24 bg-slate-300 rounded-full group-hover:bg-red-400 transition-colors'></div>
            <div className='flex flex-col items-center'>
              <span className='text-sm text-gray-500'>Spent</span>
              <span className='font-medium'>$340</span>
            </div>
          </div>
          <div className='relative flex flex-col items-center -mt-10 -mb-5'>
            <span className='text-lg font-medium'>Tony Moloy</span>
            <span className='text-sm text-gray-500'>미국</span>
          </div>
        </div>
      </div>

      <div className='bg-white p-6 rounded-3xl shadow-2xl sm:col-span-2 md:col-span-1'>
        <div className='flex mb-5 justify-between items-center'>
          <span>⬅️</span>
          <div className='space-x-3'>
            <span>⭐️4.9</span>
            <span className='shadow-xl rounded-md p-2'>💖</span>
          </div>
        </div>
        <div className='bg-zinc-400 h-40 mb-5 bg-[url("/vercel.svg")]'></div>
        <div className='flex flex-col'>
          <span className='font-medium mb-1.5 text-xl'>Swoon Lounge</span>
          <span className='text-xs text-gray-500'>Chair</span>
          <div className='mt-3 mb-5 flex justify-between items-center'>
            <div className='space-x-2'>
              <button className='
                w-5 h-5 rounded-full bg-yellow-500
                focus:ring-2 ring-offset-2 ring-yellow-500
                transition
              '></button>
              <button className='
                w-5 h-5 rounded-full bg-indigo-500
                focus:ring-2 ring-offset-2 ring-yellow-500
                transition
              '></button>
              <button className='
                w-5 h-5 rounded-full bg-teal-500
                focus:ring-2 ring-offset-2 ring-yellow-500
                transition
              '></button>
            </div>
            <div className='flex items-center space-x-5'>
              <button className='rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>-</button>
              <span>1</span>
              <button className='rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>+</button>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='font-medium text-2xl'>$450</span>
          <button className='py-2 px-8 bg-blue-500 text-center text-xs text-white rounded-lg'>Add to cart</button>
        </div>
      </div>
      
      <form className='flex flex-col rounded-3xl shadow-2xl p-6 space-y-3 bg-blue-100 focus-within:bg-blue-300'>
        <input type="text" className='required:border-2 border-yellow-200 
          placeholder:text-red-500 placeholder-shown:bg-teal-100' placeholder='pick me' required></input>
        <input type="text" className='bg-white disabled:opacity-50 peer' disabled></input>
        <input type="text" className='bg-white disabled:opacity-50 
          invalid:border-red-200 valid:border-teal-500
          peer' required></input>
        <span className='hidden peer-invalid:block peer-invalid:text-red-500'>This input is invalid</span>
        <span className='hidden peer-valid:block peer-valid:text-teal-500'>Awesome user name</span>
        <span className='hidden peer-hover:block peer-valid:text-yellow-500'>hello</span>
        <input type="password"></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default TailwindcssTest;
