import { createSlice } from "@reduxjs/toolkit";

const storedFormValues = JSON.parse(localStorage.getItem('tableData'));

const ListProduct = createSlice({
  name: 'list',
  initialState: {
    formValues: storedFormValues || {
      productname: '',
      productcategory: '',
      productfreshness: '',
      productprice: '',
      productdescription: '',
      imageproduct: '',
    }
  },
  reducers: {
    updateFormValue: (state, action) => {
      const { name, value } = action.payload;
      state.formValues = { ...state.formValues, [name]: value };
    },
  },
});

export const { updateFormValue } = ListProduct.actions;
export default ListProduct.reducer;
