import Label from "../atom/Label";
import Radio from "../atom/Radio";

const Productfreshness = ({name,title,item,className}) => {
    return (
        <div className="d-flex flex-column mt-4">
            <Label htmlFor={name} title={title} />
            <Radio item={item} name={name} className={className} value={item} id={name}/>
        </div>
    )
}
export default Productfreshness