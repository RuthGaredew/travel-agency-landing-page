

function Register() {
  

  return (
    <div className="rounded-lg shadow-lg p-30 bg-white w-full max-w-sm mx-auto mt-10">
      <h2 className="text-lg">Register</h2>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mt-2"
      />
      <button type="submit"  className="bg-blue-500 text-white p-2 mt-2">
        Register
      </button>
    </div>
  );
}

export default Register;