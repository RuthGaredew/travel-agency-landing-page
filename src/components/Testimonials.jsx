
const Testimonials = () => {
 

  return (
    <div className="mx-auto flex flex-col-reverse lg:flex-row items-left max-w-7xl sm:py-0 lg:py-0 mb-14">
        <div className="text-left flex flex-col py-10 lg:w-1/2 mx-auto">
          <p className="text-left text-gray-600 mb-4">Testimonials</p>
          <h1 className="text-left text-3xl font-bold mb-4">
            What people say about Us.
          </h1>
          </div>
          <div className="flex flex-row lg:flex-col justify-center items-left gap-4 rounded-lg shadow-lg bg-white p-6 lg:w-1/2">
          <img
            src="./img/avater.jpeg"
            className="w-17 h-17 rounded-full "/>
          <p className="text-left text-gray-600 mb-4">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
          <p className="text-left text-gray-800 font-semibold mb-2">John Doe</p>
          <p className="text-left text-gray-500 mb-2">CEO of Red Button</p>

          </div>
          
          </div>
          
  );
};

export default Testimonials;