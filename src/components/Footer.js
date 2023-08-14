import React from "react";

export const Footer = () => {
  return (
    <div className=" w-full md:w-[80%] min-h- 200px mt-[40px] mx-auto ">
      <div className="pb-6 md:pt-16 grid grid-cols-2 md:grid-cols-3 place-items-center gap:10">
        <div className="flex flex-col items-center space-y-4 justify-start">
          <img src="https://i.ibb.co/RBZFdYy/logo.png" alt="" className="w-10 h-10 md:w-12 md:h-12" />
          <p className="text-black text-center text-lg font-semibold leading-tight ">A trusted brand</p>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-11 md:mt-0">
          <h4 className="text-black text-center text-lg font-semibold leading-tight">Related Links</h4>
          <ul className="flex flex-col space-y-2">
            <li className="text-black text-center">About Us</li>
            <li className="text-black text-center">Contact Us</li>
            <li className="text-black text-center">Terms & Conditions</li>
            <li className="text-black text-center">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h4 className="text-black text-center text-lg font-semibold leading-tight">Contact Us</h4>
          <ul className="flex flex-col space-y-2">
            <li className="text-black text-center ">
              Gmail :{" "}
              <span className="underline underline-offset-1 cursor-pointer hover:bg-accent-primary_hover">
                gm.shuvo.ru.cse@gmail.com
              </span>
            </li>
            <li className="text-black text-center">
              Phone :{" "}
              <span className="underline underline-offset-1 cursor-pointer hover:bg-accent-primary_hover">
                +880 1711 111 111
              </span>
            </li>
            <li className="text-black text-center">
              Address : <span className="">Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
