import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallet: {
    id: "",
    open: false,
    info: {
      userID: "",
      name: "",
      emailUser: "",
      balance: 0,
      currency: "points",
      history: [],
      lastUpdated: "",
    },
  },
  dtWallet: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletID: (state, action) => {
      state.wallet.id = action.payload.id;
    },
    openModal: (state, action) => {
      state.wallet.open = action.payload.open;
      state.wallet.id = action.payload.id;
    },

    closeModal: (state) => {
      state.wallet.open = false;
      state.wallet.id = "";
    },

    setWelletInfo: (state, action) => {

      state.wallet.info.userID = action.payload.userID ?? "";
      state.wallet.info.name = action.payload.name ?? "";
      state.wallet.info.emailUser = action.payload.emailUser ?? "";
      state.wallet.info.balance = action.payload.balance ?? 0;
      state.wallet.info.currency = action.payload.currency ?? "points";
      state.wallet.info.history = action.payload.history ?? [];

    },
    fetchGetWalletID: (state, _action) => {},
  },
});

export const { setWalletID, setWelletInfo, fetchGetWalletID, closeModal, openModal } =
  walletSlice.actions;
export const selectWalletState = (state) => state.wallet;

export default walletSlice.reducer;
