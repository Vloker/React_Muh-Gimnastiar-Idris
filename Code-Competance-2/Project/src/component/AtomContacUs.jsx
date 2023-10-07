import Button from "./Button"
import React from "react"
import {useFormik} from "formik"
import * as Yup from "yup"

const AtomContacUs = () => {

    const validationSchema = Yup.object({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        message: Yup.string().required("Required")
    })
    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2))
    }

    const formik = useFormik({
        initialValues:{
            firstname: "",
            lastname: "",
            email: "",
            message: ""
        },
        validationSchema,
        onSubmit,
        validateOnBlur: true,
    })

    return(
        <>
        <div className="flex justify-center">
            <form onSubmit={formik.handleSubmit}>

                <div className="flex gap-4 mb-8">
                
                    <div className="flex flex-col">
                        <label htmlFor="firstname">Firstname</label>
                        <input 
                            type="text" 
                            name="firstname" 
                            id="firstname" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.firstname} />
                            {formik.touched.firstname && formik.errors.firstname ? 
                        <span className="text-xs" style={{color:"red"}}>{formik.errors.firstname}</span> : null}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="lastname">Lastname</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            id="lastname" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.lastname} />
                            {formik.touched.lastname && formik.errors.lastname ? 
                        <span className="text-xs" style={{color:"red"}}>{formik.errors.lastname}</span> : null}
                    </div>

                </div>

                <div className="flex flex-col mb-8 ">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? 
                    <span className="text-xs" style={{color:"red"}}>{formik.errors.email}</span> : null}
                </div>

                <div className="flex flex-col mb-8">
                <label htmlFor="message">Message</label>
                <textarea 
                    rows={5}
                    name="message" 
                    id="message" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.message} />
                    {formik.touched.message && formik.errors.message ? 
                    <span className="text-xs" style={{color:"red"}}>{formik.errors.message}</span> : null}
                </div>
                
                <div className="flex justify-end">
                    <Button type="submit" title="Send" />
                </div>

            </form>
        </div>
        </>
    )
}
export default AtomContacUs