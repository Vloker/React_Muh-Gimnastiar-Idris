import Label from '../atom/Label.jsx'
import Price from '../atom/Price.jsx'

const Productprice = ({name,title,type,className, onChange}) => {
    return (
        <div className='d-flex flex-column mt-4' style={{width:'60%'}}>
            <Label htmlFor={name} title={title}/>
            <Price type={type} className={className} name={name} onChange={onChange} />
    </div>
    )
}
export default Productprice