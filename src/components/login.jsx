function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 w-full rounded-md transition duration-150"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;