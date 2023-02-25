import React from "react";
import { navigationData } from "../data";
export const Navmobile = () => {

  return (
    
      <ul className="flex flex-col ">
        {navigationData.map((item, index) => {
          return (
            <li kye={index} className="px-6 py-3 hover:bg-purple-600">
              <a className="text-white group" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      
  );
};
