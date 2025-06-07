import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetWalletID } from "../../store/wallet";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

// Componentes custom
import FlexButton from "../FlexButton";

// Constantes
import icon from "../../constants/icons";

function CardProduct({ brand, image, name, price }) {
  const dispatch = useDispatch();

  const { dataUser } = useSelector((state) => state.auth);
  const wallet = useSelector((state) => state.wallet.wallet);

  // Cargar la cartera al montar el componente
  useEffect(() => {
    if (dataUser?.id) {
      dispatch(fetchGetWalletID(dataUser.id));
    }
  }, [dataUser?.id]);

  const handleBuy = () => {
    const balance = wallet?.info?.balance ?? 0;
    const currency = wallet?.info?.currency ?? "";

    if (balance >= price) {
      alert(`✅ Compra realizada por $${price} ${currency}`);
    } else {
      alert(
        `❌ Fondos insuficientes. Tienes $${balance} ${currency}, y el producto cuesta $${price}.`
      );
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          title={<Typography sx={{ fontSize: 18 }}>{brand}</Typography>}
        />
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`Imagen de ${name}`}
        />
        <CardContent>
          <Typography sx={{ fontWeight: 700 }} variant="body1">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: ${price}
          </Typography>

          <Grid container spacing={1}>
            <IconButton aria-label="ver más">
              <icon.wySinwy sx={{ fontSize: 38, color: "#b2905d" }} />
            </IconButton>

            <FlexButton
              sm={6}
              typeButton="button"
              varientButton="outlined"
              startText={"COMPRAR"}
              endText={"CARGANDO"}
              onClick={handleBuy}
              sx={{ backgroundColor: "#DBAF91", color: "white" }}
            />

            <FlexButton
              sm={3}
              typeButton="submit"
              varientButton="outlined"
              startText={<icon.shoppingCart />}
              endText={<icon.shoppingSelected />}
              sx={{ backgroundColor: "#DBAF91", color: "white" }}
            />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardProduct;
