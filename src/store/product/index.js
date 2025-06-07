import { createSlice , createAction} from "@reduxjs/toolkit";
export const fetchGetProducts = createAction("product/fetchGetProducts");


const initialState = {
  product: {
    id: "",
    info: {
      nombre: "",
      marca: "",
      genero: "",
      color: [],
      categoria: "",
      talla: [],
      stock: 0,
      precio: 0,
      descripcion: "",
      imagen: "http://localhost:3000/ZapateriaImages/default.png",
    },
  },
  dtProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductID: (state, action) => {
      state.product.id = action.payload.id;
    },
    setProductInfo: (state, action) => {
      state.product.info.nombre = action.payload.nombre ?? "";
      state.product.info.marca = action.payload.marca ?? "";
      state.product.info.genero = action.payload.genero ?? "";
      state.product.info.color = action.payload.color ?? [];
      state.product.info.categoria = action.payload.categoria ?? "";
      state.product.info.talla = action.payload.talla ?? [];
      state.product.info.stock = action.payload.stock ?? 0;
      state.product.info.precio = action.payload.precio ?? 0;
      state.product.info.descripcion = action.payload.descripcion ?? "";

      const imagenNombre = action.payload.imagen ?? "default.png";
      state.product.info.imagen = `http://localhost:3000/${imagenNombre}`;

    },
    setDtProducts: (state, action) => {
      const products = action.payload ?? [];

      const productosModificados = products.map((data) => ({
        ...data,
        imagen: `http://localhost:3000${data.imagen}`,
      }));


      console.log(productosModificados);
      state.dtProducts = productosModificados;
    },
    resetProduct: (state) => {
      state.product = initialState.product;
    },
  },
});

export const { setProductID, setProductInfo, setDtProducts, resetProduct } =
  productSlice.actions;
export const selectProductState = (state) => state.product;

export default productSlice.reducer;
