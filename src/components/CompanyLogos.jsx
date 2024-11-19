import React from "react";
import { companyLogos } from "../constants";
import PropTypes from "prop-types";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} alt={logo} width={134} height={28} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
};

CompanyLogos.protoTypes = {
  className: PropTypes.string,
};

CompanyLogos.defaultProps = {
  className: "",
};

export default React.memo(CompanyLogos);
