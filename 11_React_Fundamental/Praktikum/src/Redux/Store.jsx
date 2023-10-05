import { configureStore } from "@reduxjs/toolkit";
import ListProductReducere from "./Slices/ListProduct";

const store = configureStore({
    reducer: {
        list : ListProductReducere
    },
})

store.subscribe(() => {
    console.log("Updated Store Data:", store.getState());
  });

console.log(store.getState());

export default store;