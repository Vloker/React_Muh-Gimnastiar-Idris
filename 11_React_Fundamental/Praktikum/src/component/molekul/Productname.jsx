import Label from '../atom/Label.jsx'
import Input from '../atom/Input.jsx'
import React,{useState} from 'react'

const Productname = ({name,title,type,className,onChange}) => {
    return (
        <div className='d-flex flex-column' style={{width:'30%'}}>
            <Label htmlFor={name} title={title}/>
            <Input type={type} name={name} id={name} className={className} onChange={onChange}/>
        </div>
    )
}
export default Productname