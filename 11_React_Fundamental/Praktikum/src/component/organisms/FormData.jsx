import Productname from '../molekul/Productname'
import Imagefile from '../molekul/Imagefile'
import Productcategory from '../molekul/Productcategory'
import Productprice from '../molekul/Productprice'
import Description from '../molekul/Description'
import Productfreshness from '../molekul/Productfreshness'
import Button from '../atom/Button'
import NumberRandom from '../molekul/NumberRandom'
import React,{useState, useEffect} from 'react'

const FormData = () => {
  const insialValues = {
    productname: ''
  }
  
  const [formValues, setformValues] = useState(insialValues);
  const [formError, setformError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);


  const handleChange = (e) => {
    const {name, value} = e.target;
    setformValues({
      ...formValues,
      [name]: value
    })

  }

  useEffect(() => {
    if(Object.keys(formError).length === 0 && isSubmit){
  }
  },[formError])

  const handleSubmit = (e) => {
    console.log(formValues);
    e.preventDefault();
    setformError(validasi(formValues));
    setisSubmit(true);
  }

  const validasi = (values) => {
    const error = {};
    if (!values.productname) {
      error.productname = 'Please enter a valid product name';
    }else if(values.productname.length > 25){
      error.productname = 'Product Name must be at least 25 characters';
    }
    return error
  }
    return (
    <div className='col2' style={{width:'70%'}}>
    <form onSubmit={handleSubmit} autoComplete='off'>
        <NumberRandom />
        <div>
        <h3>Detail Product</h3>
        <Productname title='Product Name' type='text' name='productname' className='form-control' value={formValues.productname} onChange={handleChange}/>
        <span style={{color:'red'}}>{formError.productname}</span>
        <Productcategory title='Product Category' name='productcategory' className='form-select' />
        <Imagefile title='Image of Product' type='file' name='imageproduct' className='form-control' />
        <Productfreshness name='productfreshness' title='Product Freshness' item={['Brand New', 'Second Hand', 'Refurbished']} className='form-check-input'/>
        <Description name='description' title='Additonal Description' className='form-control' />
        <Productprice name='productprice' title='Product Price' type='text' className='form-control' />
        </div>

        <Button title='Submit' type='submit'/>
      </form>
      </div>
    )
}
export default FormData