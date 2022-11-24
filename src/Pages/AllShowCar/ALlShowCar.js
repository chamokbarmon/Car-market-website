import React from 'react';

const ALlShowCar = ({ car }) => {
    const {picture,name,description } =car;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64' src={picture} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                  <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-center">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ALlShowCar;