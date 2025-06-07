import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductState, fetchGetProducts } from "../../../store/product";
import { fetchGetWalletID } from "../../../store/wallet";
import CardProduct from "../../../components/CarrdProduct";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


function Home() {
  const dispatch = useDispatch();
  const { dtProducts } = useSelector(selectProductState);
  const { dataUser, jwt } = useSelector((state) => state.auth);
  const wallet = useSelector((state) => state.wallet.wallet); 

  useEffect(() => {
    dispatch(fetchGetProducts());
  }, [dispatch]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Productos disponibles
      </Typography>

      <Grid container spacing={3}>
        {dtProducts.map((product, index) => (
          <CardProduct
            key={index}
            brand={product.marca}
            name={product.nombre.toUpperCase()}
            image={product.imagen}
            price={product.precio}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
