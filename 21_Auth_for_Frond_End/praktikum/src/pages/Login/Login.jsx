import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../../component/atom/Input";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";


const LoginSchema = yup.object({
    Username : yup.string()
            .required('username is required')
            .min(3, 'username must be at least 3 characters'),
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
    
    const handleClik = (e) => {
        e.preventDefault()
    
    const dummyUser = {
        Username : 'admin',
        Password : 'password123'
    }

    const user = JSON.parse(localStorage.getItem('registerUser'))

    if(user && user.Username === formik.values.Username && user.Password === formik.values.Password){
        localStorage.setItem('isLoggedIn', 'true');
        setLogin(!login)
        navigate('/Created')
    }else if (formik.values.Username === dummyUser.Username && formik.values.Password === dummyUser.Password){
        localStorage.setItem('user', JSON.stringify(dummyUser))
        localStorage.setItem('isLoggedIn', 'true');
        setLogin(!login)
        navigate('/Created')
    }else{
        alert('Username atau Password salah')
    }
}

    const formik = useFormik({
        initialValues : {
            Username : '',
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
            <div className="username d-flex flex-column">
                <Input 
                    type='text' 
                    name='Username'
                    onChange={formik.handleChange}
                    value={formik.values.Username}/>
                <span className="text-danger">{formik.touched.Username && formik.errors.Username ? formik.errors.Username : ''}</span>
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