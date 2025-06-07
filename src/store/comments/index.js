import { createSlice, createAction } from "@reduxjs/toolkit";

// Acción que será capturada por Redux Saga
export const fetchComments = createAction("comments/fetchComments");

// Estado inicial
const initialState = {
  comments: {
    id: "",
    info: {
      alias: "",
      createdAT: "",
      emailUser: "",
      text: "",
      userID: "",
    },
  },
  dtComments: [],
};

// Slice de comentarios
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComentID: (state, action) => {
      state.comments.id = action.payload.id;
    },
    setCommentInfo: (state, action) => {
      state.comments.info.alias = action.payload.alias ?? "";
      state.comments.info.createdAT = action.payload.createdAT ?? "";
      state.comments.info.emailUser = action.payload.emailUser ?? "";
      state.comments.info.text = action.payload.text ?? "";
      state.comments.info.userID = action.payload.userID ?? "";
    },
    setDtComments: (state, action) => {
      state.dtComments = action.payload;
    },
    fetchGetWalletID: (state, _action) => {},
  },
});

// Exportar actions y reducer
export const { setComentID, setCommentInfo, setDtComments } =
  commentsSlice.actions;

export const selectCommentsState = (state) => state.comments;

export default commentsSlice.reducer;
