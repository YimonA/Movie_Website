import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className=" container mx-auto flex flex-wrap grow justify-around items-center pb-16 pt-24 px-4 bg-black">
      
      <div className="flex flex-col justify-around gap-5 items-center w-full lg:w-[45%] mt-4 ">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl lg:text-4xl text-extrabold text-center mb-4 text-[#ff0]">Sign up for the newsletters</h3>
          <div className=" my-4 mx-auto">
            <input type="text" placeholder="Enter Email" className="input input-ghost input-sm max-w-xs border-[#ff0]" />
            <button className="btn btn-outline btn-sm bg-[#ff0] hover:border-[#ff0] lg:ml-4  ml-2 mt-2">Subscribe Now</button>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-5 items-center w-[80%] border-4 p-3 border-[#ff0] rounded-lg">
        <div className="flex flex-row w-full">
          <BiLocationPlus className=" text-2xl mr-4 text-[#ff0]" />
          <p className=" max-w-[90%] text-justify text-[#ff0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            minus consequatur sit nostrum fuga harum, nulla mollitia ipsa
            accusantium perspiciatis beatae natus. Rerum consectetur, velit
            porro sint facere atque magni.
          </p>
        </div>
        <div className="flex flex-row w-full">
          <BsTelephone className=" text-2xl mr-4 text-[#ff0]" />
          <p className="text-[#ff0]">+959 123456789</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Contact;
