import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import Form from "./Form";

export default function Header() {
  return (
    <nav className="nav-main">
      <div className="nav-data">
        {/* logo */}
        <section className="links">
          <img src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="font-extrabold">Meet Gate</h1>
        </section>

        {/* menu */}
        <section className="flex items-center">
          <ul className="flex text-xl gap-6 font-semibold ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </section>

        
        

        {/* btn */}
        <section className="flex items-center gap-2">
        <Form />
          <button className="bg-blue-600 px-6 py-2 rounded-full font-bold text-lg flex items-center gap-1 hover:bg-black text-white duration-700">
            <MdOutlineShoppingBag className="text-xl" />
            Sign up
          </button>
        </section>
      </div>
    </nav>
  );
}
