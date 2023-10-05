import { useParams } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';


const UserDetail = () => {
    const { id } = useParams();
    const [tableData, setTableData] = useState([]);

    // mengambil data dari local storage
    useEffect(() => {
        const storageData = localStorage.getItem('tableData');
        const tableData = JSON.parse(storageData);
        const user = tableData.find(item => item.id === id);
        setTableData(user);
    },[id])

    // Menampilkan data dari local storage
    return (
        <div className='container m-5'>
            <h5>User Detail dari id: {id}</h5>
            <p>Product Name : {tableData.productname}</p>
            <p>Product Category : {tableData.productcategory}</p>
            <p>Image Product : {tableData.imageproduct}</p>
            <p>Product Freshness : {tableData.productfreshness}</p>
            <p>Product Description : {tableData.productdescription}</p>
            <p>Product Price : {tableData.productprice}</p>
        </div>
    )
}
export default UserDetail