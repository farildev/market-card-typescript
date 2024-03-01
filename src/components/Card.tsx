import React from "react";
import { LuShoppingBasket } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { Product } from "@/types/product";


type CardProps = {
  product: Product;
};

const Card : React.FC<CardProps> = ({product}) => {
  return (
    <div className='border border-gray-400/50 text-white rounded-md group shadow-lg p-5 overflow-hidden relative'>
        <div className='w-[300px] h-[250px] mx-auto flex items-center justify-center'>
            <img className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300" src={product.image} alt="" />
        </div>
        <div className='absolute -bottom-full transition-all duration-300 left-0 group-hover:bottom-0 flex flex-col justify-end gap-3 h-full px-5 py-7 bg-black/70 w-full'>
            <h1 className='text-xl h-auto'>{product?.title.substr(0,25)}</h1>
            <span className='text-4xl font-bold'>{product?.price.toFixed(0)}$</span>
            <div className="w-full flex items-center justify-between">
              <button className='bg-main w-[65%] p-2 rounded-md font-semibold'>Buy</button>
              <div className="flex flex-row gap-2">
                <button className="bg-white text-2xl text-black p-2 rounded-md"><IoMdHeartEmpty /></button>
                <button className="bg-white text-2xl text-black p-2 rounded-md"><LuShoppingBasket /></button>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card