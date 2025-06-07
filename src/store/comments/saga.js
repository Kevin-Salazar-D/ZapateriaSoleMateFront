import axios from "axios";
import { put, call, delay, takeEvery, select } from "redux-saga/effects";
import { setDtComments, fetchComments } from "./index";
import { changeIsLoading } from "../Loader";
import { openAlert } from "../alert/index.js";
import api from "../../constants/api";
import { selectAuthState } from "../auth";

// utils
import formatDateObject from "../../utils/formatDateObject";

function* getComments() {
  yield put(changeIsLoading(true));
  yield delay(200);

  try {
    const { jwt } = yield select(selectAuthState);
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    const response = yield call(() => axios.get(api.getComments, config));
    const dataComments = response.data.data ?? [];
    const formattedComments = formatDateObject(dataComments, "createdAt");

    yield put(setDtComments(formattedComments));
  } catch (error) {

      if (error.response?.status === 404) {
        yield put(  openAlert({
                    open: true,
                    message: "Comentarios no encontrado",
                    icon: isSuccess ? "success" : "error",
                  }));
      }

  } finally {
    yield put(changeIsLoading(false));
  }
}

export function* watchGetComments() {
  yield takeEvery(fetchComments.type, getComments);
}
