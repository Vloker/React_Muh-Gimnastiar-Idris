import Label from '../atom/Label.jsx'
import Price from '../atom/Price.jsx'

const Productprice = ({name,title,type,className}) => {
    return (
        <div className='d-flex flex-column mt-4' style={{width:'60%'}}>
            <Label htmlFor={name} title={title}/>
            <Price type={type} className={className} name={name} />
    </div>
    )
}
export default Productprice