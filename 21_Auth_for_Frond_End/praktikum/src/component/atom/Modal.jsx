import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Productname from '../molekul/Productname';
import Productcategory from '../molekul/Productcategory';
import Imagefile from '../molekul/Imagefile';
import Productfreshness from '../molekul/Productfreshness';
import Description from '../molekul/Description';
import Productprice from '../molekul/Productprice';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { updateFormValue } from '../../Redux/Slices/ListProduct'
import axios from 'axios';

const Editing = ({ buttonLeft, buttonRight, buttonShow, onEdit, onChange }) => {

  const [show, setShow] = useState(false)
  const dispatch = useDispatch();

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [tableData, setTableData] = useState([]);
  const [formError, setFormError] = useState({}); 
  const formValues = useSelector((state) => state.list.formValues);

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateFormValue({name, value}));
    }

  // Pengubahan Data Perbaris
  const handleEditItem = async (id) => {
    const errors = validasi(formValues);
    setFormError(errors);
  
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.put(`https://651ba6f4194f77f2a5aea95f.mockapi.io/Product/${id}`, formValues);
  
        if (response.status === 200) {
          alert("Sukses mengubah data!");
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  const validasi = (values) => {
    const error = {};
    const regexProductName = /^[a-zA-Z0-9\s]{3,25}$/
    const regexProductPrice = /^[0-9\s]{1,25}$/
    
    if(!values.productname){
      error.productname = 'Product Name is required'
    }else if (!regexProductName.test(values.productname)){
      error.productname = 'Product Name must be at least 3 characters and no more than 25 characters and no special characters'
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
        <Button variant="primary" onClick={handleShow}>{buttonShow}</Button>

      <div
        className="modal show"
        style={{ display: 'block', position: 'initial', width: '100%' }}
      >

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <form >
              <div>
              <Productname
                  title='Product Name' 
                  type='text' 
                  name='productname' 
                  className='form-control' 
                  value={formValues.productname}
                  onChange={handleChange}
                  />
                  <span style={{color:'red'}}>{formError.productname}</span>
              </div>

              <div>
              <Productcategory 
                  title='Product Category' 
                  name='productcategory' 
                  className='form-select'
                  value={formValues.productcategory}
                  onChange={handleChange}
                  />
                  <span style={{color:'red'}}>{formError.productcategory}</span>
              </div>

              <div>
              <Imagefile 
                  title='Image of Product' 
                  type='file' 
                  name='imageproduct' 
                  className='form-control'
                  value={formValues.imageproduct}
                  onChange={handleChange}
                  />
              </div>

              <div>
              <Productfreshness 
                  name='productfreshness'
                  title='Product Freshness'
                  item={['Brand New', 'Second Hand', 'Refurbished']}
                  className='form-check-input'
                  value={formValues.productfreshness}
                  onChange={handleChange}
                  />
                  <span style={{color:'red'}}>{formError.productfreshness}</span>
              </div>

              <div>
              <Description 
                  name='productdescription'
                  title='Additional Description'
                  className='form-control'
                  value={formValues.productdescription}
                  onChange={handleChange}
                  />
              </div>

              <div> 
              <Productprice 
                  name='productprice'
                  title='Product Price'
                  type='text'
                  className='form-control' 
                  value={formValues.productprice}
                  onChange={handleChange}
                  />
                  <span style={{color:'red'}}>{formError.productprice}</span>
              </div>  
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>{buttonLeft}</Button>
                  <Button variant="primary" onClick={handleEditItem}>{buttonRight}</Button>
                  </Modal.Footer>
            </form>
          </Modal.Body>
  
        </Modal>
      </div>
      </>
    );
}
export default Editing;