import { LuShoppingBasket } from "react-icons/lu";



type prodProps = {
  product : {
    id: number,
    category? : string,
    title : string,
    price : number,
    description? : string,
    image? : string,
  }[]

}
const Card = ({product} : prodProps) => {
  return (
    <div className='border border-gray-400/30 rounded-md group text-white shadow-lg overflow-hidden relative'>
        <div className='h-[450px]'>
            <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" src={product.image} alt="" />
        </div>
        <div className='absolute -bottom-full transition-all duration-300 left-0 group-hover:bottom-0 flex flex-col justify-end gap-3 h-full px-5 py-7 bg-black/70 w-full'>
            <h1 className='text-xl h-auto'>{product?.title.substr(0,25)}</h1>
            <span className='text-4xl font-bold'>{product?.price.toFixed(0)}$</span>
            <div className="w-full flex items-center justify-between">
              <button className='bg-main w-[65%] p-2 rounded-md font-semibold'>Buy</button>
              <button className="bg-white text-2xl text-black p-2 rounded-md"><LuShoppingBasket /></button>
            </div>
        </div>
    </div>
  )
}

export default Card