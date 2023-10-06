const Input = ({type,id,name,className,onChange}) => {
    return (
        <input type={type} name={name} className={className} id={id} onChange={onChange} />
    )
}
export default Input