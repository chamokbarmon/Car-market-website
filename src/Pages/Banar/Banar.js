import React from 'react';

const Banar = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.carshop.com/media/carshop-og.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Car Shop</h1>
                    <p className="mb-5">BDCarShop Is the Biggest Digital Online “Car Buy and Sell” Marketplace in Bangladesh. We Have the large Digital Cars Listing Inventory in BD.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banar;