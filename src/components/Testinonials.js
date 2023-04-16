import React from "react";
import { TestimonialSlider } from "./TestimonialSlider";
export const Testinonials = () => {
  return (
    <section>
      <div className="container-fulid mx-auto">
        <div className="bg-accent-primary min-h-[600px]">
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px]">
            <h2 className="h2 text-white text-center mb-[80px]">Testimonial</h2>
            <TestimonialSlider/>
          </div>
        </div>
      </div>
    </section>
  );
};
