import React from 'react';

const ALlShowCar = ({ car }) => {
    const {picture} =car;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64' src={picture} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ALlShowCar;