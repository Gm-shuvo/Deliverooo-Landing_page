import React from 'react'
import {navigationData} from '../data'
export const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-row ">
        {navigationData.map((item, index) => {
          return (
            <li kye={index} className="px-6 py-3 ">
              <a className="text-gray-500" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
