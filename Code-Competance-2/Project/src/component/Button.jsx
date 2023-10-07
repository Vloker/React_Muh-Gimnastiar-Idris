import React from "react"

const Button = ({type,title,onClick}) => {
    return(
        <>
            <button className="px-8 py-2 rounded-lg border border-black " type={type} onClick={onClick} >{title}</button>
        </>
    )
}
export default Button