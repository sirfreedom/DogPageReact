
import { configureStore } from "@reduxjs/toolkit";
import { createSlice, nanoid } from "@reduxjs/toolkit";


export default configureStore({
  reducer: {
    categorias: categoriasReducer,
    productos: productosReducer,
  },
});


const productosSlice = createSlice({
  name: "Carrito",
  initialState: [],
  reducers: {
    agregarProducto: {
      reducer(state, action) {
        state.push(action.payload);
      }
      ,
      prepare(idProducto, cantidad, descripcion) {
        return {
          payload: {
            id: nanoid(),
            idProducto,
            cantidad,
            descripcion,
          },
        };
      },
    },
  },
});

export const { agregarProducto } = productosSlice.actions;

export default productosSlice.reducer;



