import React from 'react'
import Button from "./Button";

const Login = () => {
  return (
    <div className="mt-64 flex justify-center items-center">
    <form className="w-full flex flex-col max-w-md bg-white rounded-lg shadow-lg p-8 space-y-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Login
      </h2>
      <div className="flex flex-col space-y-4">
       <input type="email" placeholder="Email" className="input-style" />
       
        <input
          type="password"
          placeholder="Password"
          className="input-style"
        />
      </div>
      <Button>Log in</Button>
      <div>Don't have an account ? Sign up </div>
    </form>
  </div>
  )
}

export default Login
