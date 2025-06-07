import axios from "axios";
import { put, call, delay, takeEvery, select } from "redux-saga/effects";
import { setDtProducts, fetchGetProducts } from "./index";
import { selectAuthState } from "../auth";
import { changeIsLoading } from "../Loader";
import api from "../../constants/api";

function* getProduct(){

    yield put(changeIsLoading(true));
    yield delay(500);

    try {
    const { jwt } = yield select(selectAuthState);
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };
    const response = yield call(()=>axios.get(api.getAllProduct, config));
    const dataProduct = response.data.data ?? [];
    yield put(setDtProducts(dataProduct));

    } catch (error) {
         if (error.response?.status === 500) {
              yield put(
                openAlert({
                  open: true,
                  message: "No hay productos disponibles por el momento",
                  icon: "error",
                })
              );
            }
    }finally{
        yield put(changeIsLoading(false));
    }
}
export function* watchGetProducts() {
  yield takeEvery(fetchGetProducts.type, getProduct);
}

