import React from "react";
import PropTypes from "prop-types";
import { loading } from "../assets";

const Generating = ({ className }) => {
  // Validate loading image
  if (!loading) {
    console.error("Loading image not found");
    return null;
  }

  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img src={loading} alt="Loading" className="w-5 h-5 mr-4" />
      AI is generating
    </div>
  );
};

Generating.propTypes = {
  className: PropTypes.string,
};

Generating.defaultProps = {
  className: "",
};

export default Generating;
