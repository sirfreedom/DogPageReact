//import React, { useState } from "react";
//import { useSelector } from "react-redux";
//import { ProductoHelper } from "./StoreHelper";

/*
export const ListaDeProductos = () => {
  const categorias = useSelector((state) => state.categorias);
   const productos = useSelector((state) => state.productos).filter(
    (producto) => producto.idCategoria === categoria.id
  );

  const handleSelectCategoria = (e) => {
    setCategoria(
      categorias.find((categoria) => categoria.id === e.target.value)
    );
  };
  return (
    <>
      <label htmlFor="categoria">Categoría: </label>
      <select name="categoria" onChange={handleSelectCategoria}>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.nombre}
          </option>
        ))}
      </select>
      <FormularioAgregarProducto categoria={categoria} />
      {productos &&
        productos.map((producto) => (
          <table key={producto.id}>
            <thead>
              <tr>
                <th>{producto.nombre}</th>
              </tr>
            </thead>
            <tbody>
              {producto.caracteristicas.map((caracteristica) => (
                <tr key={caracteristica.id}>
                  <td>{categoria.campos[caracteristica.id].name}</td>
                  <td>{caracteristica.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
    </>
  );
};
*/
