import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials--wrapper gap-6 flex flex-col justify-center items-center text-center py-6 px-4">
      <h4 className="title text-2xl uppercase tracking-widest text-slate-400">
        client testimonials
      </h4>
      <div className="testimonials--container flex flex-col md:flex-row md:justify-around md:gap-0 md:w-full gap-8">
        <div className="testimonials py-4 flex flex-col justify-center text-center items-center gap-8">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src="./images/image-emily.jpg"
            alt=""
          />
          <p className="text-slate-700">
            We put our trust in sunnyside and they delivered, making sure our
            needs are meet and deadlines were always hit.
          </p>
          <div className="bio--container flex flex-col gap-1">
            <h5 className="name">Emily R.</h5>
            <span className="role text-slate-500">Marketing Director</span>
          </div>
        </div>
        <div className="testimonials py-4 flex flex-col justify-center text-center items-center gap-10">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src="./images/image-thomas.jpg"
            alt=""
          />
          <p className="text-slate-700">
            Sunnyside's enthusiasm coupled with their keen interest in out
            brand's success made it a satisfying enjoyable experience.
          </p>
          <div className="bio--container flex flex-col gap-1">
            <h5 className="name">Thomas S.</h5>
            <span className="role text-slate-500">Chief Operating Officer</span>
          </div>
        </div>
        <div className="testimonials py-4 flex flex-col justify-center text-center items-center gap-10">
          <img
            className="w-14 h-14 rounded-full object-cover"
            src="./images/image-jennie.jpg"
            alt=""
          />
          <p className="text-slate-700">
            Incredible end result! Our sales increased over 400% when we worked
            with sunnyside. Highly recommended!
          </p>
          <div className="bio--container flex flex-col gap-1">
            <h5 className="name">Jennie F.</h5>
            <span className="role text-slate-500">Business Owner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
