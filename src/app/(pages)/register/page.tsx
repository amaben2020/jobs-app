const Register = () => {
  return (
    <div className="border rounded-xl p-10 text-center max-w-3xl mx-auto h-[60vh]">
      <form action="">
        <div className="flex items-center justify-between">
          <label htmlFor="" className="mr-4 min-w-[20%]" aria-label="name">
            Name
          </label>
          <input
            type="text"
            className="p-3 rounded-lg w-9/12 my-6"
            placeholder="Enter your name"
            aria-labelledby="name"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="" aria-label="email" className="mr-4 min-w-[20%]">
            Email
          </label>
          <input
            aria-labelledby="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg w-9/12 my-6"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="" aria-label="password" className="mr-2 min-w-[20%]">
            Password
          </label>
          <input
            aria-labelledby="password"
            type="password"
            placeholder="Enter your password"
            className="p-3 rounded-lg w-9/12 my-6"
          />
        </div>

        <button
          type="submit"
          className="block bg-white text-black rounded-md w-[30%] p-3 text-center mx-auto mt-5"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
