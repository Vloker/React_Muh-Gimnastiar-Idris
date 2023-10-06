const Radio = ({item,name,id}) => {
    return (
        item.map(value=>{
            return(
                <div key={value}>
                <input type="radio" name={name} id={id}/> {value}
                </div>  
            )
        })

    )
}
export default Radio