import React from "react";
import { Link } from "react-router-dom";

const Table = ({data, onDelete}) => {
    const noUrut = 1000
    return(
        <div className="col3 mt-4">
             <table className="table">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Image of Product</th>
                    <th>Product Freshness</th>
                    <th>Additonal Description</th>
                    <th>Product Price</th>
                    </tr>
                </thead>
                    <tbody>
                        {data.map((item,i) => (
                            <tr key={item.id}>
                            <td><Link to={`/Account/${item.id}`}>{noUrut + i + 1}</Link></td>
                            <td>{item.productname}</td>
                            <td>{item.productcategory}</td>
                            <td>{item.imageproduct}</td>
                            <td>{item.productfreshness}</td>
                            <td>{item.productdescription}</td>
                            <td>{item.productprice}</td>
                            <td>
                            <button className="btn btn-danger" style={{color:'black'}} onClick={() => onDelete(item.id)}>Hapus</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    )
}
export default Table