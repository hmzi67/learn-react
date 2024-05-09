import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(
            {...data, [name]: value}
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        navigate('/')
    }
  return (
    <div class="flex min-h-full min-w-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#111827]">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                autocomplete="email"
                required
                placeholder="Enter your email"
                class="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset focus:outline-none text-white bg-[#1D2432] ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                autocomplete="current-password"
                required
                placeholder="Enter your password"
                class="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset focus:outline-none text-white bg-[#1D2432] ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0)]"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
