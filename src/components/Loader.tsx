export default function Loader() {
  return (
    <div className='relative w-fit flex justify-center items-center'>
      <p className='py-1 px-2 text-sm text-sky-500 rounded-md'>Loading</p>
      <span className='relative flex h-4 w-4 justify-center items-center'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
        <span className='relative inline-flex rounded-full h-2 w-2 bg-sky-500'></span>
      </span>
    </div>
  )
}
