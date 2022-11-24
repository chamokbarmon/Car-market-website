import React from 'react';
import Banar from '../Banar/Banar';
import OtherSection from '../OtherSection/OtherSection';
import ShowCars from '../ShowCars/ShowCars';

const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <ShowCars></ShowCars>
            <OtherSection></OtherSection>
        </div>
    );
};

export default Home;