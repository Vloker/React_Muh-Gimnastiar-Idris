import Button from "../atom/Button"
import React, { useState } from "react"


const Tagline = () => {
  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account"
  },
    description: {
      id : "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya",
      en : "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it"
    }
}

const [text,setText]= useState('id')
const gantibahasa = () => {
  if(text === 'id'){
    setText('en')
  }else{
    setText('id')
  }
}

    return (
        <div className="col1 text-center">
          <img src="bootstrap-logo.svg.png"/>
          <h2 className="h2 mt-3">{article.title[text]}</h2>
          <p  className="below">{article.description[text]}</p>
          <Button title='Change Language' type='button' onClick={gantibahasa}/>
      </div>
    )
}
export default Tagline