const Label = ({htmlFor,title}) => {
    return (
        <label className="pb-2" htmlFor={htmlFor}>{title}</label>
    )
}
export default Label