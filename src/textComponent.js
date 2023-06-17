import React from 'react';

const TextComponent = (props) => {
  const { color, text } = props;

  const style = {
    color: color,
    textTransform: 'uppercase',
  };

  return <p style={style}>{text}</p>;
};

export default TextComponent;
