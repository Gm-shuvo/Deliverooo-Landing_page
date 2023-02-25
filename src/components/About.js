import React from 'react'
import {aboutData} from '../data'
export const About = () => {
  const { image, title, subtitle } = aboutData
  return (
    <section className="my-[20px] md:mt-[100px]">
      <div className="container mx-auto">
        <div className="bg-accent-secondary/[15%] rounded-md min-h-[500px] pb-12 px-12 text-center flex flex-col xl:flex-row md:items-center xl:text-left xl:gap-x-[60px] xl:pb-0">
          {/* Image section */}
          <div className="flex-1" data-aos="zoom-in-left">
            <img src={image} alt="" />
          </div>
          <div className="flex-1 text-center xl:pr-12">
            <h2 className="h2  mb-10"
              data-aos="fade-up"
              data-aos-delay-300>
              {title}
            </h2>
            <p
              className="max-w-[400px] mx-auto "
              data-aos="fade-up"
              data-aos-delay-400
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
