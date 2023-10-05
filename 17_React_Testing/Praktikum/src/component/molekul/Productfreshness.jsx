import Label from "../atom/Label";
import React from "react";
import Radio from "../atom/Radio";

const Productfreshness = ({name,title,item,className, onChange}) => {
    return (
        <div className="d-flex flex-column mt-4">
            <Label htmlFor={name} title={title} />
            <Radio item={item} name={name} className={className} value={item} id={item} onChange={onChange}/>
        </div>
    )
}
export default Productfreshness