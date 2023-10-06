import Input from '../atom/Input'

const Price = ({ name, type, className}) => {
    return (
            <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <Input type={type} id={name} className={className} name={name}/>
            <span className="input-group-text">.00</span>
            </div>
    )
}

export default Price