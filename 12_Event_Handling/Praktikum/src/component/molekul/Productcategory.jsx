import Label from "../atom/Label";
import Option from "../atom/Option";

const Productcategory = ({name,title, className }) => {
    return (
    <div className="d-flex flex-column mt-4" style={{width:'20%'}}>
        <Label htmlFor={name} title={title}/>
        <Option id={name} className={className}/>
    </div>
    )
}
export default Productcategory