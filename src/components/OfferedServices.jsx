import React from "react";

const OfferedServices = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center ">
        <p className="text-center text-gray-600 mb-4">CATEGORY</p>
        <h1 className="text-3xl font-bold text-center mb-6">
          We Offer Best Services
        </h1>
      </div>
      <div className="grid grid-row-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <div className="flex flex-col justify-center gap-8 ">
          <img
            src="./img/satellite.png"
            alt="Satellite Icon"
            className="h-16 w-16 text-gray-900 item-center mx-24 mb-3"
          />
          <h5 className="text-1xl font-semibold text-center mb-3 ">
            Calculated Weather
          </h5>
          <p className="text-center text-gray-500 mb-8 ">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>
        <div className="flex flex-col bg-white-800 border-white-2 rounded justify-center gap-8">
          <img
            src="./img/plane.png"
            alt="Airplane Icon"
            className="h-16 w-16 text-gray-900 item-center mx-24 mb-3"
          />

          <h5 className="text-1xl font-semibold text-center mb-3 ">
          Best Flights
          </h5>
          <p className="text-center text-gray-500 mb-8 ">
           Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8">
          <img
            src="./img/mic.png"
            alt="Micraphone Icon"
            className="h-16 w-16 text-gray-900 item-center mx-24 mb-3"
          />

          <h5 className="text-1xl font-semibold text-center mb-3 ">
          Local Events
          </h5>
          <p className="text-center text-gray-500 mb-8 ">
          Barton vanity itself do in it. Preferd to men it engrossed listening.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8 ">
          <img
            src="./img/setting.png"
            alt="Setting Icon"
            className="h-16 w-16 text-gray-900 item-center mx-24 mb-3"
          />
          <h5 className="text-1xl font-semibold text-center mb-3 ">
          Customization
          </h5>
          <p className="text-center text-gray-500 mb-8 ">
          We deliver outsourced aviation services for military customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferedServices;
