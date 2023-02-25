import React from 'react'
import {heroData} from '../data'
import { Header } from './Header';
export const Hero = () => {
  const { title, subtitle, btnText,image } = heroData;
  return (
    <section className="lg:h-[800px] py-12">
      <div className="container mx-auto relative h-full ">
        <div className="flex flex-col xl:flex-row items-center h-full justify-between md:py-24">
          <div className="text-center xl:text-left xl:absolute">
            <h1
              className="h1 xl:max-w-[700px] lg:mb-12 mb-3"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title}
            </h1>
            <p
              className="lead xl:max-w-[380px] lg:mb-12 mb-5"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-primary mb-10 xl:mb-0 rounded-md"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {btnText}
            </button>
          </div>
          {/* Image */}
          <div
            className="xl:absolute xl:-right-20 xl:bottom-20"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img src={image} alt="Heroimage" />
          </div>
        </div>
      </div>
    </section>
  );
}
