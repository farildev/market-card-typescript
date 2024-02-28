import Card from '@/components/Card';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Products : React.FC = () => {
    const [products, setProducts] = useState([]);
    const BASE_URL = `http://localhost:3000/headsets`;

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
            <h1 className='text-white font-semibold text-4xl leading-normal py-4 border-b inline border-gray-400'>Headsets</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
                {
                    products.map((product ,key) => (
                        <Card key={key} product={product} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Products