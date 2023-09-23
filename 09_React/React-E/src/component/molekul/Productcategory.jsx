import Label from "../atom/Label";

const Productcategory = ({name,title, className, value, onChange}) => {
    return (
    <div className="d-flex flex-column mt-4" style={{width:'20%'}}>
        <Label htmlFor={name} title={title}/>
        <select className={className} name={name} id={name} value={value} onChange={onChange}>
            <option value="">Pilih Kategori</option>
            <option value="Makanan">Makanan</option>
            <option value="Minuman">Minuman</option>
            <option value="Snack">Snack</option>
        </select>
    </div>
    )
}
export default Productcategory