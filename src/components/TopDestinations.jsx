import React from 'react';
import Card from '../assets/card';

const Destinations = () => {
  return (
    <>
      <div className="py-10">
        <p className="text-center text-gray-600 mb-4">Top Selling</p>
        <h1 className="text-3xl font-bold text-center mb-6">Top Destination</h1>
      </div>
      <div className="flex flex-row gap-6 px-4">
      <Card
        
        image="src/assets/rome.jpg"
        place="Rome Italy"
        price="$5,42k"
        duration="10 Days Trip"
        
      />
      <Card
        image="src/assets/paris.jpg"
        place="Paris France"
        price="$4,20k"
        duration="8 Days Trip"/>
      <Card
        image="src/assets/london.jpg"
        place="London UK"
        price="$6,00k"
        duration="12 Days Trip"
      />
        
       
      </div>
    </>
  );
};

export default Destinations;
