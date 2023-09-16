import Label from "../atom/Label";
import Textarea from "../atom/Textarea";

const Description = ({name,title,className}) => {
    return (   
        <div className="d-flex flex-column mt-4">
            <Label htmlFor={name} title={title}/>
            <Textarea className={className} name={name} id={name}/>
        </div>
    )
}
export default Description