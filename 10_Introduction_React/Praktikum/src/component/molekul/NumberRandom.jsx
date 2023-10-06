import Button from "../atom/Button";
import React, { useState } from "react";

const NumberRandom = () => {

    const [number, setNumber] = useState(0);
    const randomNumber = () => {
        setNumber(Math.floor(Math.random() * 100));
        console.log(number);
    }

    return (
        <>
            <div className="d-flex mt-4 justify-content-center">
            <h3>Number</h3>
            <h3 className="ms-4">{number}</h3>
            </div>
            <Button title='Click for Random Number' type='button' onClick={randomNumber}/>
        </>
    )
}
export default NumberRandom