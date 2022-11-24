import React from 'react';

const OtherSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200 col-span-2">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold ">SuperCar Blondie</h1>
                    <p className="py-6 w-72 ">These are my top 10 picks for the most amazing cars in the world! 2020 hasn't been the easiest year for travel but when I saw these beauties</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default OtherSection;