import React, { useEffect, useState } from 'react';
import ALlShowCar from '../AllShowCar/ALlShowCar';


const ShowCars = () => {
    const [cars,Setcars] = useState([])
    console.log(cars)
    
    useEffect(()=>{
        fetch(`https://used-product-market-server.vercel.app/Carsoptions`)
        .then(res=>res.json())
        .then(data=>Setcars(data))
    },[])
    
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-8'> Cars </h1>
            <div className='grid gap-3 mt-8 mx-6 mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cars.map(car=><ALlShowCar key={car._id} car={car}></ALlShowCar> )
             }  
            </div>
           
        </div>
    );
};

export default ShowCars;

