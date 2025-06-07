import { all } from "redux-saga/effects";

// Importación de los watchers
import { watchGetComments } from "./comments/saga";
import { watchGetUsers } from "./users/sega";
import { watchWalletByID } from "./wallet/saga";
import {watchGetProducts} from "./product/saga";


export default function* rootSaga() {
  yield all([
    //watch comentarios
    watchGetComments(),

    //watch usuarios
    watchGetUsers(),

    //wath de carteras
    watchWalletByID(),


    //wath de productos
    watchGetProducts()
  ]);
}
