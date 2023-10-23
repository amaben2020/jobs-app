"use client";
import axios from "axios";

const Login = () => {
  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3000/api/users/login", {
        email: "amsnee@dd.io",
        password: "1238890j043g",
      });
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border rounded-xl p-10 text-center max-w-3xl mx-auto h-[60vh]">
      <form action="" onSubmit={handleSend}>
        <label htmlFor=""></label>

        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg w-10/12 my-6"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-3 rounded-lg w-10/12 my-6"
        />

        <button
          type="submit"
          className="block bg-white text-black rounded-md w-[30%] p-3 text-center mx-auto"
        >
          {" "}
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
