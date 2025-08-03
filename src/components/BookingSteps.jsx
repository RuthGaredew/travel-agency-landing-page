import SmallCard from "../assets/smallCard";

const Booking = () => {
  return (
    <>
      <div className="mx-auto flex flex-col-reverse lg:flex-row items-center max-w-7xl sm:py-8 lg:py-6">
        <div className="text-left flex flex-col py-10 lg:w-1/2 mx-auto">
          <p className="">Easy and Fast</p>
          <h1 className="text-left text-2xl font-bold mb-4">
            Book your next trip in 3 easy steps
          </h1>
          <div className="flex flex-row items-left mt-8">
            <img
              src="src/assets/destination.png"
              alt=""
              className="w-10 h-10 rounded-lg mr-4 p-2 shadow-lg "
            />
            <div className="flex flex-col items-left  mb-6">
              <h5 className="text-gray-800 font-semibold mb-2">
                Choose Destination
              </h5>
              <p className="text-gray-600 mb-2 ">
                Select from a variety of destinations
              </p>
            </div>
          </div>
          <div className="flex flex-row items-left mt-8">
            <img
              src="src\assets\payment.png"
              alt=""
              className="w-10 h-10 rounded-lg mr-4 p-2 shadow-lg"
            />
            <div className="flex flex-col items-left  mb-6">
              <h5 className="text-gray-800 font-semibold mb-2">Make Payment</h5>
              <p className="text-gray-600 mb-2 ">
                Secure your booking with easy payment options
              </p>
            </div>
          </div>
          <div className="flex flex-row items-left mt-8">
            <img
              src="src/assets/car.png"
              alt=""
              className="w-10 h-10 rounded-lg mr-4 p-2 shadow-lg"
            />
            <div className="flex flex-col items-left  mb-6">
              <h5 className="text-gray-800 font-semibold mb-2">
                Reach Airport on Selected Date
              </h5>
              <p className="text-gray-600 mb-2 ">
                Arrive at the airport on your selected date for a smooth journey
              </p>
            </div>
          </div>
        </div>
        <SmallCard
          className="flex flex-col lg:flex-row justify-center items-right gap-4 rounded-lg shadow-lg bg-white p-6 lg:w-1/2"
          image="src/assets/trip.jpeg"
          title="Trip to Greece"
          date="14-29 June"
          name="by Robbin joseph"
          people="24 people going"
        />
      </div>
    </>
  );
};

export default Booking;
