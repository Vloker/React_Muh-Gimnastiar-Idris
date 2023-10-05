

const Button = ({title,onClick, type}) => {
    

    return (
        <div className="d-flex justify-content-center mt-4" >
        <button className="btn btn-primary" type={type}  onClick={onClick} style={{width:'40%'}}>{title}</button>
        </div>
    )
}
export default Button