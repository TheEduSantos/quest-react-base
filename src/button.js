import React from 'react';

const Button = (props) => {
  const { label } = props;

  const handleClick = () => {
    alert(`A label desse botão é ${label}`);
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
