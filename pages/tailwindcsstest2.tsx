import type { NextPage } from 'next'

const TailwindcssTest2: NextPage = () => {
  return (
    <div className='flex flex-col space-y-2 p-5'>
      <details className='select-none open:text-white open:bg-indigo-400'>
        <summary className='cursor-pointer'>What is my Fav. food.</summary>
        <span className=''>김치</span>
      </details>
      <ul className='list-decimal list-inside marker:text-teal-500'>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input type='file' className='
        file:cursor-pointer file:border-0 file:rounded-lg file:px-5 file:text-white file:bg-purple-400
        file:hover:bg-purple-600 
      '></input>
      <p className='first-letter:text-7xl first-letter:hover:text-purple-500'>First text is big.</p>
      <button className='cursor-wait'>Wait cursor</button>
    </div>
  )
}

export default TailwindcssTest2;
