import axios from "axios";
import { put, call, delay, takeEvery, select } from "redux-saga/effects";
import { setWalletID, setWelletInfo, fetchGetWalletID } from "./index";
import { selectAuthState } from "../auth";
import { changeIsLoading } from "../Loader";
import { openAlert } from "../alert";
import api from "../../constants/api";

// Utils
import formatDateObject from "../../utils/formatDateObject";

function* getWalletByID(action) {
  yield put(changeIsLoading(true));

  if (action.payload === 0) {
    yield put(setWalletID([]));
    yield delay(200);
    yield put(changeIsLoading(false));
    return;
  }

  try {
    const { jwt } = yield select(selectAuthState);
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    const response = yield call(() =>
      axios.post(api.getWalletByID, { userID: action.payload }, config)
    );

    const dataWallet = response.data.data ?? [];

    yield put(setWelletInfo(dataWallet[0]));
  } catch (error) {
    if (error.response?.status === 500) {
      yield put(
        openAlert({
          open: true,
          message: "Cartera del usuario no encontrada",
          icon: "error",
        })
      );
    }
  } finally {
    yield put(changeIsLoading(false));
  }
}

export function* watchWalletByID() {
  yield takeEvery(fetchGetWalletID.type, getWalletByID);
}
