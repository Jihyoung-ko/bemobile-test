import React from 'react';

export const ProductDescr = ({ product }) => {

  const { brand, model, price, cpu, ram, os, displayResolution, battery, dimentions, weight, primaryCamera } = product;

  return (
    <div>
      <h3>Details</h3>
      <li>
        <ul>Brand: {brand}</ul>
        <ul>Model: {model}</ul>
        <ul>Price: {price}€</ul>
        <ul>CPU: {cpu}</ul>
        <ul>RAM: {ram}</ul>
        <ul>OS: {os}</ul>
        <ul>Display Resolucion: {displayResolution}</ul>
        <ul>Battery: {battery}</ul>
        {/* <ul>Camaras: {primaryCamera[0]}, {primaryCamera[1]}</ul> */}
        <ul>Dimentions: {dimentions}</ul>
        <ul>Weight: {weight}g</ul>
      </li>
    </div>
  )
}