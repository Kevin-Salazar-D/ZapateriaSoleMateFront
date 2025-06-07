import axios from "axios";
import { put, call, delay, takeEvery, select } from "redux-saga/effects";
import { setAllUsers, fetchGetUsers } from "./index"; // asegúrate de exportar esta acción
import { selectAuthState } from "../auth";
import { changeIsLoading } from "../Loader";
import api from "../../constants/api";
import { openAlert } from "../alert";
// utils
import formatDateObject from "../../utils/formatDateObject";



function* getUsers() {
  yield put(changeIsLoading(true));
  yield delay(500);

  try {
    const { jwt } = yield select(selectAuthState);
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    const response = yield call(() => axios.get(api.getUser, config));
    const dataUser = response.data.data ?? [];
    const formattedUser = formatDateObject(dataUser, "createdAt");

    yield put(setAllUsers(formattedUser));
  } catch (error) {
    if (error.response?.status === 500) {
      yield put(
        openAlert({
          open: true,
          message: "Usuarios no encontrados",
          icon: "error",
        })
      );
    }
  } finally {
    yield put(changeIsLoading(false));
  }
}

export function* watchGetUsers() {
  yield takeEvery(fetchGetUsers.type, getUsers);
}
