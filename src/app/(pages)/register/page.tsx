import { UserType } from "@/models/userModel";
import { redirect } from "next/navigation";

const Register = async () => {
  const submitFormData = async (formData: FormData) => {
    "use server";

    const email = formData.get("email");
    const userType = formData.get("userType");
    const lastName = formData.get("lastName");
    const firstName = formData.get("firstName");
    const password = formData.get("password");

    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        userType,
        lastName,
        firstName,
        password,
      }),
    });

    const isSuccess = (await response.json())?.message === "Sent";
    console.log("isSuccess", isSuccess);
    if (isSuccess) {
      redirect("/login");
    }
  };

  const userTypes = [UserType.employee, UserType.employer];

  return (
    <div className="border rounded-xl p-10 text-center max-w-3xl mx-auto h-[60vh]">
      <form action={submitFormData}>
        <div className="flex items-center justify-between">
          <label htmlFor="" className="mr-4 min-w-[20%]" aria-label="name">
            First Name
          </label>
          <input
            type="text"
            className="p-3 text-black rounded-lg w-9/12 my-6"
            placeholder="Enter your name"
            aria-labelledby="firstName"
            name="firstName"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="" className="mr-4 min-w-[20%]" aria-label="name">
            Last Name
          </label>
          <input
            type="text"
            className="p-3 text-black rounded-lg w-9/12 my-6"
            placeholder="Enter your name"
            aria-labelledby="lastName"
            name="lastName"
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
            className="p-3 text-black rounded-lg w-9/12 my-6"
            name="email"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="" aria-label="user type" className="mr-4 min-w-[20%]">
            User Type
          </label>

          {userTypes.map((userType) => (
            <>
              <input
                aria-labelledby="userType"
                type="radio"
                value={userType}
                name="userType"
                placeholder="User type"
                className="p-5 text-black rounded-lg w-9/12 my-6"
                // checked={userType }
              />
            </>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="" aria-label="password" className="mr-2 min-w-[20%]">
            Password
          </label>
          <input
            aria-labelledby="password"
            type="password"
            placeholder="Enter your password"
            className="p-3 text-black rounded-lg w-9/12 my-6"
            name="password"
          />
        </div>

        <button
          type="submit"
          className="block bg-white text-black rounded-md w-[30%] p-3 text-center mx-auto mt-5"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
