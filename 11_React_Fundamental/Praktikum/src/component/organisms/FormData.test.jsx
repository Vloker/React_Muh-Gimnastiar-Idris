import React from "react";
import { render,screen, fireEvent } from "@testing-library/react";
import FormData from "./FormData";
import { Provider } from "react-redux";
import store from "../../Redux/Store"; 
import { expect } from "vitest";
import { test } from "vitest";


describe("FormData",()=>{
    test("render FormData component",()=>{
        render(
        <Provider store={store}>
            <FormData />
        </Provider>
        );
        screen.debug();
    })

    test("render Product Name input",()=>{
        render(
            <Provider store={store}>
                <FormData />
            </Provider>
            );
      const ProductNameInput = screen.getByLabelText("Product Name");
      fireEvent.change(ProductNameInput, {target: {value: "Chocolatos"}});
      expect(ProductNameInput.value).toBe("Chocolatos");
    })

    test("render error jika inputannya memiliki special character",()=>{
        render(
            <Provider store={store}>
                <FormData />
            </Provider>
            );
            const productNameInput = screen.getByLabelText("Product Name");
            fireEvent.change(productNameInput, {
                target: {
                    value: "@#$%^&*()",
                },
            });
            const SubmitButton = screen.getByText('Submit')
            fireEvent.click(SubmitButton)
            const productNameError = screen.getByText("Product Name must be at least 3 characters and no more than 25 characters and no special characters");
            expect(productNameError).toBeInTheDocument();
    })

    test("render error jika inputannya melebihi 25 karakter",()=>{
        render(
            <Provider store={store}>
                <FormData />
            </Provider>
            );
            const productNameInput = screen.getByLabelText("Product Name");
            fireEvent.change(productNameInput, {
                target: {
                    value: "adkjasdjahdaklfdalkhfklafjlalkdajlkjalsdjalkjlk",
                },
            });
            const SubmitButton = screen.getByText('Submit')
            fireEvent.click(SubmitButton)
            const productNameError = screen.getByText("Product Name must be at least 3 characters and no more than 25 characters and no special characters");
            expect(productNameError).toBeInTheDocument();
    })


    test("render Product Category",()=>{
        render(
            <Provider store={store}>
                <FormData />
            </Provider>
            );
      const ProductCategory = screen.getByLabelText("Product Category");
      fireEvent.change(ProductCategory, {target: {value: "Snack"}});
      expect(ProductCategory).toHaveValue("Snack");
    })

    test("render Product Category jika inputannya kosong",()=>{
        render(
            <Provider store={store}>
                <FormData />
            </Provider>
            );
      const ProductCategory = screen.getByLabelText("Product Category");
      fireEvent.change(ProductCategory, {
        target: {
            value: ""
        }});
      const SubmitButton = screen.getByText('Submit')
      fireEvent.click(SubmitButton)
      const productcategoryError = screen.getByText("Product Category is required");
      expect(productcategoryError).toBeInTheDocument();
    })
})