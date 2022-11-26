import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarsecondModal from '../CarSecondModal/CarsecondModal';
import ModalCarSubmit from '../ModalCarSubmit/ModalCarSubmit';

const CatagoryItem = () => {
    const service = useLoaderData()
    console.log(service)


    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='h-96' src={service.Product1[0].pic1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{service.Product1[0].name}</h2>
                    <p className='font-bold'>{service.Product1[0].description}</p>
                   <div className='flex'>
                   <p className='font-bold text-2xl'>Price:{service.Product1[0].price}</p>
                   <p className='font-bold text-2xl'>OfferPrice:{service.Product1[0].priceOffer}</p>
                   </div>
                   <div >
                         <p className='text-1xl font-semibold'>Location : {service.Product1[0].location}</p>
                         <p className='text-1xl font-semibold'>Number : {service.Product1[0].Mobile}</p>
                         </div>
                         <p className='text-1xl font-semibold'>Year :24-11-{service.Product1[0].year}</p>  
                    <div className="card-actions justify-end">
                    <label label htmlFor = "booking-modal" className="btn btn-primary" >Book Now</label>
                    
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='h-96' src={service.Product2[0].pic1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{service.Product2[0].name}</h2>
                    <p className='font-bold'>{service.Product2[0].description}</p>
                    <div className='flex'>
                   <p className='font-bold text-2xl'>Price:{service.Product2[0].price}</p>
                   <p className='font-bold text-2xl'>OfferPrice:{service.Product2[0].priceOffer}</p>
                   </div>
                         <div >
                         <p className='text-1xl font-semibold'>Location : {service.Product2[0].location}</p>
                         <p className='text-1xl font-semibold'>Number : {service.Product2[0].Mobile}</p>
                         </div>
                         <p className='text-1xl font-semibold'>Year :24-11-{service.Product2[0].year}</p>  
                    <div className="card-actions justify-end">
                        <label label htmlFor = "booking-modal1" className="btn btn-primary" >Book Now</label >
                    </div>
                    <ModalCarSubmit
                      key={service._id}
                      service={service}
                     > 
                    </ModalCarSubmit>
                    <CarsecondModal key={service._id}
                    service={service}
                    >

                    </CarsecondModal>
                </div>
            </div>
        </div>
    );
};

export default CatagoryItem;



