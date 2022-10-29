import React from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { useProducts } from "../../context/products/ProductsProvider";
import styles from "./Shop.module.css";

const Shop = () => {
  const products = useProducts();

  // TODO es necesario importar el contexto y usar el hook useContext, o bien utilizar una estrategia similar para guardar los productos en el estado que va a ser utilizado para mantener el carrito de compras

  // TODO implementar un boton para borrar el item del carrito

  // TODO implementar un boton para vaciar el carrito

  // TODO crear un componente para mostrar la cantidad de items en el carrito

  // TODO crear un componente, o una vista para mostrar el total de la compra

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          alt={product.alt}
          title={product.title}
          descript={product.description}
          price={product.price}
          /* //TODO guardar en el carrito el producto seleccionado */
          onClick={() => {
            alert(`Agregaste ${product.title} al carrito`);
          }}
        />
      ))}
    </div>
  );
};

export default Shop;
