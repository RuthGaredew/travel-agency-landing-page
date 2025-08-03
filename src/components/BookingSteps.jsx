import Card from "../assets/card";

const Booking = () => {
  return (
    <>
      <div className="flex flex-row bg-gray-100 py-10">
        <div className="flex flex-col py-10 lg:w-1/2 mx-auto">
          <p className="">Easy and Fast</p>
          <h1 className="text-center text-2xl font-bold mb-4">
            Book your next trip in 3 easy steps
          </h1>
          <div className="flex flex-row items-left mt-8">
          <img src="src/assets/destination.png" alt="" className="w-10 h-10" />
            <div className="flex flex-col items-left  mb-6">
              <h5 className="text-gray-800 font-semibold mb-2">Choose Destination</h5>
              <p className="text-gray-600 mb-2 ">
              Select from a variety of destinations
            </p>
            </div> 
          </div>
          <div className="flex flex-row items-left mt-8">
          <img src="src\assets\payment.png" alt="" className="w-10 h-10" />
            <div className="flex flex-col items-left  mb-6">
              <h5 className="text-gray-800 font-semibold mb-2">Make Payment</h5>
              <p className="text-gray-600 mb-2 ">
              Secure your booking with easy payment options
            </p>
            </div> 
          </div>
          <div className="flex flex-row items-left mt-8">
          <img src="src/assets/car.png" alt="" className="w-10 h-10" />
            <div className="flex flex-col items-left  mb-6">
              <h5 className="text-gray-800 font-semibold mb-2">Reach Airport on Selected Date</h5>
              <p className="text-gray-600 mb-2 ">
              Arrive at the airport on your selected date for a smooth journey
            </p>
            </div> 
          </div>
        </div>
        <Card className="flex flex-col lg:flex-row justify-center items-right gap-4 rounded-lg shadow-lg bg-white p-6 lg:w-1/2"
        image="src/assets/trip.jpeg"
        place="Trip to Greece"
        price="$5,42k"
        duration="10 Days Trip"
        />
      </div>
    </>
  );
};

export default Booking;
