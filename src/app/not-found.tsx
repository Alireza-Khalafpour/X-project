import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='bg-black text-white h-screen flex flex-col justify-center items-center gap-8' >
      <h2 className='font-bold text-xl' >Custom 404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='bg-white py-2 px-4 rounded-full text-black font-bold' href="/">Return Home</Link>
    </div>
  )
}