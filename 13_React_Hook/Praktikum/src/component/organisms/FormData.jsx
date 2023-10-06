import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Productname from '../molekul/Productname'
import Productcategory from '../molekul/Productcategory'
import NumberRandom from '../molekul/NumberRandom'
import Description from '../molekul/Description'
import Productprice from '../molekul/Productprice'
import Table from '../molekul/Table'
import Button from '../atom/Button'
import Productfreshness from '../molekul/Productfreshness'
import Imagefile from '../molekul/Imagefile'


const FormData = () => {
  const dataValues = {
    productname: '',
    productcategory: '',
    imageproduct: '',
    productprice: '',
    productdescription: '',
    productfreshness: ''
  }

  const [formValues, setFormValues] = useState(dataValues);
  const [formError, setFormError] = useState({}); 
  const [tableData, setTableData] = useState([]);

  // Value pada Form
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
      setFormValues({
      ...formValues,
      [name]: value
    })
  }

  // Pengambinan Data pada Local Storage
  useEffect(() => {
    alert('Welcome');
    const storedTableData = localStorage.getItem('tableData');
    if (storedTableData) {
        setTableData(JSON.parse(storedTableData));
    }
  },[])

  // Penambahan Data pada tabel dan Local Storage
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validasi(formValues);
    setFormError(errors)
    
    if(Object.keys(errors).length === 0){
      const newItem = {id: uuidv4(),...formValues};
      setTableData([...tableData, newItem]);
      setFormValues(dataValues);

      localStorage.setItem('tableData', JSON.stringify([...tableData, newItem]));
    }
  }

// Penghapusan Data dari Local Storage
  const removeItemFromLocalStorage = (id) => {
    const storedTableData = JSON.parse(localStorage.getItem('tableData'));
    const updatedTableData = storedTableData.filter((item) => item.id !== id);
    localStorage.setItem('tableData', JSON.stringify(updatedTableData));
};

// Penghapusan Data Perbaris
  const handleDeleteItem = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus item ini?')) {
      const indexToRemove = tableData.filter((item) => item.id !== id);

      if (indexToRemove !== -1) {
        const updatedTableData = [...tableData];
        updatedTableData.splice(indexToRemove, 1);
        setTableData(updatedTableData);
        removeItemFromLocalStorage(id);
      }
    }
  };


  // Validasi Inputan
  const validasi = (values) => {
    const error = {};
    const regexProductName = /^[a-zA-Z0-9\s]{3,25}$/
    const regexProductPrice = /^[0-9\s]{1,25}$/
    
    if(!values.productname){
      error.productname = 'Product Name is required'
    }else if (!regexProductName.test(values.productname)){
      error.productname = 'Product Name must be at least 3 characters'
    }
    if(!values.productcategory){
      error.productcategory = 'Product Category is required'
    }
    if(!values.productfreshness){
      error.productfreshness = 'Product Freshness is required'
    }
    if(!values.productprice){
      error.productprice = 'Product Price is required'
    }else if (!regexProductPrice.test(values.productprice)){
      error.productprice = 'Product Price must be at least 1 character'
    }
   return error
  }

    return (
    <>
    <div className='col2' style={{width:'70%'}}>
    <form onSubmit={handleSubmit} autoComplete='off'>
        <NumberRandom />
        <h3>Detail Product</h3>

        <div>
        <Productname
            title='Product Name' 
            type='text' 
            name='productname' 
            className='form-control' 
            value={formValues.productname} 
            onChange={handleChange}/>
            <span style={{color:'red'}}>{formError.productname}</span>
        </div>

        <div>
        <Productcategory 
            title='Product Category' 
            name='productcategory' 
            className='form-select'
            value={formValues.productcategory}
            onChange={handleChange}/>
            <span style={{color:'red'}}>{formError.productcategory}</span>
        </div>

        <div>
        <Imagefile 
            title='Image of Product' 
            type='file' 
            name='imageproduct' 
            className='form-control' 
            value={formValues.imageproduct} 
            onChange={handleChange} />
        </div>

        <div>
        <Productfreshness 
            name='productfreshness'
            title='Product Freshness'
            item={['Brand New', 'Second Hand', 'Refurbished']}
            className='form-check-input'
            onChange={handleChange}
            value={formValues.productfreshness}/>
            <span style={{color:'red'}}>{formError.productfreshness}</span>
        </div>

        <div>
        <Description 
            name='productdescription'
            title='Additional Description'
            className='form-control'
            value={formValues.productdescription}
            onChange={handleChange}/>
        </div>

        <div> 
        <Productprice 
            name='productprice'
            title='Product Price'
            type='text'
            className='form-control'
            value={formValues.productprice}
            onChange={handleChange} />
            <span style={{color:'red'}}>{formError.productprice}</span>
        </div>  

        <Button title='Submit' type='submit'/>
      </form>

      </div>
            <Table data={tableData} onDelete={handleDeleteItem}/>
      </>
    )
}
export default FormData