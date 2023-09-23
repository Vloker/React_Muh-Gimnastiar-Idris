import Label from '../atom/Label.jsx'
import Input from '../atom/Input.jsx'

const Imagefile = ({name,title,type,className, onChange}) => {
    return (
        <div className='d-flex flex-column mt-4' style={{width:'23%'}}>
            <Label htmlFor={name} title={title}/>
            <Input type={type} name={name} id={name} className={className} onChange={onChange} />
        </div>
    )
}
export default Imagefile