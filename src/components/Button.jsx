import React from 'react'

const Button = ({ children, className, ...props }) => {
    return (
      <button
        className={`bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;