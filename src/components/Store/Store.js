import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {
    transactionSlice: "transactionSlice",
  },
});
