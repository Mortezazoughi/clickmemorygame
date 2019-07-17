import React from 'react';
import './CardItem.css';

const CardItem = ({ name, image, onClick }) => (
  <img
    className="itemClick"
    src={image}
    alt={name}
    name={name}
    onClick={() => onClick(name)}
  />
);

export default CardItem;
