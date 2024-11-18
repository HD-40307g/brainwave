import React from 'react'
import ButtonSvg from "../assets/svg/ButtonSvg";
import PropTypes from 'prop-types';

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick} aria-label={children}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} aria-label={children}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onclick: PropTypes.func,
  children: PropTypes.node.isRequired,
  px: PropTypes.string,
  white: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  href: null,
  onclick: null,
  px: 'px-7',
  white: false,
};

export default React.memo(Button);
