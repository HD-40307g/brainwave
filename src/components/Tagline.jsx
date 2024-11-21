import React from "react";
import PropTypes from 'prop-types';
import brackets from "../assets/svg/Brackets";

const Tagline = ({ className = "", children }) => {
  return (
    <div className={`tagline flex items-center ${className}`}>
      {/* Left bracket */}
      {brackets("left")}
      {/* Tagline text */}
      <div className="mx-3 text-n-3">{children}</div>
      {/* Right bracket */}
      {brackets("right")}
    </div>
  );
};

//Default props
Tagline.defaultProps = {
  className: "",  
}

//Prop validation
Tagline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default React.memo(Tagline);
