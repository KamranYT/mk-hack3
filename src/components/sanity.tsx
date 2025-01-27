"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
interface User {
    name: string,
    price: number,
    image: string,
    id: string
}

const Fruits = () => {

    const [fruits, setFruits] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://67808bff85151f714b0706ff.mockapi.io/test');
                const data = await response.json();
                setFruits(data);
            }
            catch (error) {
                console.log("products data not fetch", error)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <div className='px-6 py-12 mt-16'>
                <h1 className='text-3xl font-bold mb-8'>Fruits</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {fruits.map((fruits) => (
                        <div
                            key={fruits.id}
                            className='bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='relative'>
                                <Image
                                    src={fruits.image}
                                    alt={fruits.name}
                                    className='w-full h-64 object-cover'
                                    width={500}
                                    height={500}
                                    unoptimized={true}
                                />
                                <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center'>
                                    <button className='text-gray-100 font-semibold text-lg'>
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                            <div className='p-4 flex justify-between items-center'>
                                <div>
                                    <h2 className='text-xl font-semibold mb-2'>{fruits.name}</h2>
                                    <p className='text-gray-700 text-sm'>{fruits.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Fruits