import React from "react";
import Button from "./Button";

const Registration = () => {
  return (
    <div className="mt-64 flex justify-center items-center">
      <form className="w-full flex flex-col max-w-md bg-white rounded-lg shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Register
        </h2>
        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="input-style" />
          <input type="email" placeholder="Email" className="input-style" />
          <input type="text" placeholder="Job Title" className="input-style" />
          <input
            type="password"
            placeholder="Password"
            className="input-style"
          />
        </div>
        <Button>Sign up</Button>
        <div>Already have an account ? Log in </div>
      </form>
    </div>
  );
};

export default Registration;
