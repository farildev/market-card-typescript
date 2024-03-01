import Card from '@/components/Card';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Product } from '@/types/product';

const Products : React.FC = () => {
    

    const [products, setProducts] = useState<Product[]>([]);
    const BASE_URL = `https://fakestoreapi.com/products`;

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(BASE_URL)
                setProducts(response.data)
            }catch{
                console.log('Error happened')
            }
        }
        fetchData()
    })
  return (
    <section className='w-full flex items-center justify-center py-[100px]'>
        <div className="siteContainer">
            <h1 className='font-semibold text-4xl leading-normal py-4 border-b inline border-gray-400'>Products</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
                {
                    products.map((product:Product) => (
                        <Card key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Products