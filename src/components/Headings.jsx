import React from "react";

const Headings = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h1>
        {title} <span>{subTitle}</span>
      </h1>
    </div>
  );
};

export default Headings;
