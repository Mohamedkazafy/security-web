import React from "react";

const Card = ({ title, heading, description,img }) => {
  return (
    <div className="border border-gray-300 p-6 rounded shadow hover:shadow-lg transition h-[800px] text-left ">
      <div className="h-34 mb-4 flex items-center justify-center m-7">
        <span className="text-gray-500 "><img src={img} alt={title}/></span>
      </div>
      <h2 className="text-xl font-semibold text-center p-3 m-9">{title}</h2>
      <h3 className="text-gray-700 font-bold text-lg mb-2 leading-relaxed">{heading}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
