// src/components/Button.jsx
import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
