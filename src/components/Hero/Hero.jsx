import React from "react";

import hero from "../../assets/img/hero.jpg";
// import { HiOutlineSearch } from "react-icons/hi";

import Search from "./Search";

const Hero = () => {
  return (
    <>
      {/* bg-gradient-to-tr from-slate-600 to-gray-600 */}
      <div className="relative h-96 w-full bg-gradient-to-tr from-slate-600 to-gray-600  ">
        <img
          src={hero}
          alt=""
          className="w-full h-full object-cover mix-blend-overlay "
        />
        <div className="absolute top-[50%] left-[50%] text-center text-white translate-x-[-50%] translate-y-[-50%]">
          {/* <input
            type="search"
            name="search"
            className=" text-white search_field text-[1rem] bg-transparent border focus:outline-none cursor-pointer focus:w-full focus:border-orange-500 focus:cursor-text py-3 px-12 pr-32 duration-200 "
            placeholder="Enter Your Product Name..."
          /> */}
          {/* <button className="search_btn absolute  top-[50%] left-1 transform translate-y-[-50%] duration-75 border-r border-transparent peer-focus:border-orange-500  focus:w-full ">
            <HiOutlineSearch className="text-2xl stroke-gray-100 hover:stroke-orange-500 peer-focus:stroke-orange-500 " />
          </button> */}
          <Search />
        </div>
      </div>
    </>
  );
};

export default Hero;
