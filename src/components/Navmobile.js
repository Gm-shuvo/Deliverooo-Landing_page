import React from "react";
import { navigationData } from "../data";
export const Navmobile = () => {

  return (
    
      <ul className="flex flex-col text-center space-y-0">
        {navigationData.map((item, index) => {
          return (
            <li kye={index} className="group px-6 py-3 hover:bg-purple-500 ">
              <a className="text-white group hover:text-blue-100" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      
  );
};
