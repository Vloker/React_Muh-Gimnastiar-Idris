import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Input from "../../component/atom/Input";
import * as yup from "yup";
import { useFormik } from "formik";

const Login = () => {
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            Email: '',
            Password: ''
        },
        validationSchema: yup.object().shape({
            Email: yup.string().required('email is required').email('email is not valid').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'email is not valid'),
            Password: yup.string().required('password is required').min(8,'password must be at least 8 characters')
        }),
        onSubmit: values => {
            alert('Login Success')
            console.log(values);
        }
    })

    const handleKey = () => {
    setLogin(!login)
    localStorage.setItem('isLoggedIn', 'true');
    navigate(`/Created`);
    console.log(login)
    }
    
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
        <form onSubmit={formik.handleSubmit}>
            <div className="email d-flex flex-column">
                <Input 
                    type='text' 
                    name='Email'
                    onChange={formik.handleChange}
                    value={formik.values.Email}/>
                {formik.errors.Email && <span style={{ color: 'red' }}>{formik.errors.Email}</span>}
            </div>
            <div className="password mt-2 mb-2 d-flex flex-column">
            <Input 
                type='text' 
                name='Password'
                onChange={formik.handleChange}
                value={formik.values.Password}/>
                {formik.errors.Password && <span style={{ color: 'red' }}>{formik.errors.Password}</span>}
            </div>

            <button className="btn btn-primary justify-content-center d-flex align-items-center mb-2" type="submit">Login</button>

            <button className="btn btn-primary justify-content-center d-flex align-items-center" onClick={handleKey} type="button">Back to Created</button>
        
            <p>Don't have an account ? <a href="/Register">Register</a></p>
        </form>
        </div>
        </section>
    )
}
export default Login