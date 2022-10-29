import React from "react";
import styles from "./ProductCard.module.css";

// pueden editar este componente para agregarle mas funcionalidad, estilos, etc.

const ProductCard = ({ image, alt, title, descript, price, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <h4>{descript}</h4>
      <h5>${price}</h5>
    </div>
  );
};

export default ProductCard;
