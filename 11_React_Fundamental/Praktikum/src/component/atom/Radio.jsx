import React from 'react';

const Radio = ({item,name, onChange}) => {
    return (
        item.map(value=>{
            return(
                <div key={value}>
                <input type="radio" name={name} id={value} onChange={onChange} value={value}/>  {value}
                </div>  
            )
        })

    )
}
export default Radio