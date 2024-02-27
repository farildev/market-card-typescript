const Card = ({product} : any) => {
  return (
    <div className='border border-gray-400/30 rounded-md p-3 text-white shadow-lg'>
        <div className='h-[200px]'>
            <img className="w-full h-full object-cover" src={product?.image} alt="" />
        </div>
        <div className='flex flex-col gap-3 mt-5 h-full'>
            <h1 className='text-xl h-auto'>{product?.title.substr(0,25)}</h1>
            <span className='text-4xl font-bold'>{product?.price.toFixed(0)}$</span>
            <button className='bg-main p-2 rounded-md font-semibold'>Buy</button>
        </div>
    </div>
  )
}

export default Card