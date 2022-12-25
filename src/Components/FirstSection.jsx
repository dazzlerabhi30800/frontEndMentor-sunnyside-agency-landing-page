import React, { useState, useEffect } from "react";

const FirstSection = () => {
  const [resize, setResize] = useState(false);
  const imgSrc = [
    {
      imgMobile: "./images/mobile/image-transform.jpg",
      imgDesktop: "./images/desktop/image-transform.jpg",
    },
    {
      imgMobile: "./images/mobile/image-stand-out.jpg",
      imgDesktop: "./images/desktop/image-stand-out.jpg",
    },
  ];

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setResize(true);
    } else {
      setResize(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);
  window.addEventListener("resize", handleResize);
  return (
    <div className="first--section flex flex-col">
      <div className="first--wrapper flex flex-col md:flex-row">
        <div className="img--wrapper md:flex-auto md:order-2">
          <img
            src={resize ? imgSrc[0].imgDesktop : imgSrc[0].imgMobile}
            alt=""
          />
        </div>
        <div className="text--wrapper py-8 px-4 flex flex-col gap-10 text-center md:flex-auto md:order-1 md:px-0 md:py-0 md:text-left md:justify-center">
          <h2 className="heading mx-auto text-stone-800 md:mx-0 md:ml-20 md:w-4/5">
            Transform your brand
          </h2>
          <p className="w-3/5 mx-auto text-slate-500 md:mx-0 md:ml-20">
            We are full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="btn relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 z-10 after:-z-10 after:bg-yellow-300 after:rounded-md w-fit mx-auto uppercase text-slate-800 md:mx-0 md:ml-20">
            learn more
          </button>
        </div>
      </div>
      <div className="second--wrapper flex flex-col md:flex-row">
        <div className="img--wrapper md:flex-auto">
          <img
            src={resize ? imgSrc[1].imgDesktop : imgSrc[1].imgMobile}
            alt=""
          />
        </div>
        <div className="text--wrapper py-8 px-4 flex flex-col gap-10 text-center md:text-left md:py-4 md:justify-center md:px-0 md:flex-auto md:py-0">
          <h2 className="heading second mx-auto md:mx-0 text-stone-800 md:ml-20">
            Stand out to the right audience
          </h2>
          <p className="w-4/5 mx-auto text-slate-500 md:mx-0 md:ml-20">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copyrighters, we'll build and
            extend your brand in digital places.
          </p>
          <button className="btn relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 z-10 after:-z-10 after:bg-red-200 after:rounded-md w-fit mx-auto uppercase text-slate-800 md:mx-0 md:ml-20">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
