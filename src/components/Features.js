import React from "react";
import { featuresData } from "../data";
import { FeatureProduct } from "../utils/FeatureProduct";
export const Features = () => {
  const { title, list, subtitle } = featuresData;
  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto relative">
        <div className="text-center">
          <h2 className="h2 mb-6 xl:mb-0">{title}</h2>
          <p className="lead max-w-[585px] mx-auto mt-[20px]">{subtitle}</p>
          <div className="mt-20">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[50px]
            ">
              {list.map((items, index) => {
                return <FeatureProduct key={index} items={items} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
