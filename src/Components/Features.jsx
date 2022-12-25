import React from "react";
import "./Style.css";

const Feature = () => {
  return (
    <div className="feature--wrapper flex flex-col md:flex-row">
      <div className="graphic--wrapper flex flex-col text-center justify-end gap-4 items-center md:flex-auto">
        <h3 className="text-2xl text-emerald-900">Graphic Design</h3>
        <p className="mb-8 text-emerald-700">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potentials client's attention.
        </p>
      </div>
      <div className="photography--wrapper flex flex-col text-center justify-end gap-4 items-center md:flex-auto">
        <h3 className="text-2xl text-cyan-900">Photograpy</h3>
        <p className="mb-8 text-cyan-700">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Feature;
