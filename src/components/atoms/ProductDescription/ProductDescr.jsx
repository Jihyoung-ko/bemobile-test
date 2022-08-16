import React from 'react';

export const ProductDescr = ({ product }) => {
  const { brand, model, price, cpu, ram, os, displayResolution, battery, dimentions, weight } =
    product;

  return (
    <div>
      <h3>Details</h3>
      <div>
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Price: {price}€</p>
        <p>CPU: {cpu}</p>
        <p>RAM: {ram}</p>
        <p>OS: {os}</p>
        <p>Display Resolucion: {displayResolution}</p>
        <p>Battery: {battery}</p>
        {/* <ul>Camaras: {primaryCamera[0]}, {primaryCamera[1]}</ul> */}
        <p>Dimentions: {dimentions}</p>
        <p>Weight: {weight}g</p>
      </div>
    </div>
  );
};
