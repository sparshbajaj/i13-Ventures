import React from 'react';
import './Button.css';

const Button = ({ children, onClick, disabled, cursor }) => {
  return (
    // eslint-disable-next-line
    <a
      className={`button ${disabled ? 'button--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      style={{ cursor: disabled && cursor ? `url(${cursor}), not-allowed` : 'auto' }}
    >
      {children}
    </a>
  );
};

export default Button;
