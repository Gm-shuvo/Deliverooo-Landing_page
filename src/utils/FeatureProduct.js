import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export const FeatureProduct = (items) => {
  const { title, image, bgImage, description,delay, linkText} = items.items;
  
  return (
    <div
      className="w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto sm:font-medium"
      data-aos="zoom-in"
      dat-aos-delay={delay}
      data-aos-offset="100"
    >
      <div className="xl:flex absolute top-0 right-10 -z-20  ">
        <img src={bgImage} alt="" />
      </div>
      <div
        className="max-w-[120px] xl:mr-7 xl:max-w-[220px] "
        data-aos="zoom-in-right"
        dat-aos-delay={delay}
      >
        <img src={image} alt="" />
      </div>
      <div className="max-w-[180px] text-start mb-10 flex flex-col items-center justify-center">
        <h3 className="h3 mb-4" data-aos="zoom-in" dat-aos-delay="200">
          {title}
        </h3>
        <p className="text-start font-light italic gap-x-2 group">
          {description}
        </p>
        <div className="flex justify-center gap-x-2 group mt-2">
          <a href="/" className="text-primary font-bold">
            {linkText}
          </a>
          <BsArrowRight className="text-xl text-accent-primary group-hover:ml-[5px] transition-all" />
        </div>
      </div>
    </div>
  );
}
