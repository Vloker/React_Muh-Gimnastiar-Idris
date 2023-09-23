import Label from "../atom/Label";

const Description = ({name,title,className, onChange}) => {
    return (   
        <div className="d-flex flex-column mt-4">
            <Label htmlFor={name} title={title}/>
            <textarea className={className} name={name} id={name} onChange={onChange} rows="9"></textarea>
        </div>
    )
}
export default Description