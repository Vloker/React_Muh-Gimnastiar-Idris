import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../../component/atom/Input";
import * as yup from "yup";
import { useFormik } from "formik";


const LoginSchema = yup.object({
    Email : yup.string()
            .email('email is not valid')
            .required('email is required')
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'email is not valid'),
    Password : yup.string()
            .required('password is required')
            .min(8, 'password must be at least 8 characters'),
})
const Login = () => {

    
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    const onSubmit = (values) => {
        console.log(values);
    }
    
    const handleClik = () => {
    setLogin(!login)
    localStorage.setItem('isLoggedIn', 'true'); login ? navigate('/Created') : navigate('/Login')
    }

    const formik = useFormik({
        initialValues : {
            Email : '',
            Password : ''
        },
        validationSchema : LoginSchema,
        onSubmit,
    })

    
    return (
        <section className="Login Position-relative justify-content-center d-flex align-items-center">
            <div className="elips"></div>
            <div className="elips2"></div>
            <div className="elips3"></div>       
        <div className="container d-flex justify-content-center align-items-center flex-column gap-3">
            <div className="text-center" style={{color:'black'}}>
                <h1>Login</h1>
                <h6>Please enter your Email and your Password</h6>
            </div>

        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className="email d-flex flex-column">
                <Input 
                    type='text' 
                    name='Email'
                    onChange={formik.handleChange}
                    value={formik.values.Email}/>
                <span className="text-danger">{formik.touched.Email && formik.errors.Email ? formik.errors.Email : ''}</span>
            </div>

            <div className="password mt-2 mb-2 d-flex flex-column">
            <Input 
                type='password' 
                name='Password'
                onChange={formik.handleChange}
                value={formik.values.Password}/>
                <span className="text-danger">{formik.touched.Password && formik.errors.Password ? formik.errors.Password : ''}</span>
            </div>

            <button className="btn btn-primary justify-content-center d-flex align-items-center mb-2" type="submit" onClick={handleClik}>Login</button>

            <p>Don't have an account ? <a href="/Register">Register</a></p>
        </form>
        </div>
        </section>
    )
}
export default Login