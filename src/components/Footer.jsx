import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map(({ id, url, iconUrl, title }) => (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={iconUrl} alt={title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

Footer.protoTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default React.memo(Footer);
