const Subscription = () => {
  return (
    <div className="py-10 text-center">
      <p className="text-gray-600 text-3xl font-bold px-54 mb-14">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </p>
      <input type="email" placeholder="Your email address" className="p-2 m-3 border border-gray-300 rounded-lg w-1/3 mb-4" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Subscribe</button>
    </div>
  );
};

export default Subscription;
