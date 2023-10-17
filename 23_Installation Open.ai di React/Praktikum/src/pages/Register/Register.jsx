import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Input from '../../component/atom/Input';
import { Container } from 'react-bootstrap'
import * as Yup from 'yup';
import Label from '../../component/atom/Label';
import axios from 'axios';

const RegisterSchema = Yup.object({
    firstname : Yup.string()
                .required('firstname is required')
                .min(3, 'firstname must be at least 3 characters'),
    lastname : Yup.string()
                .required('lastname is required')
                .min(3, 'lastname must be at least 3 characters'),
    username : Yup.string()
                .required('username is required'),
    email : Yup.string()
            .email('email is not valid')
            .required('email is required'),
    password : Yup.string()
            .required('password is required')
            .min(8, 'password must be at least 8 characters'),
    confirmpassword : Yup.string()
            .required('ConfirmPassword is required')
            .min(8, 'ConfirmPassword must be at least 8 characters')
            .oneOf([Yup.ref('password')], 'password must match')
})

const Register = () => {

const onSubmit = (values) => {
    axios.post('https://651ba6f4194f77f2a5aea95f.mockapi.io/Users', values)
    .then((response)=>{
        if (response.status == 201){
            alert("Sukses menambahkan data!")
            console.log(response);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

    const formik = useFormik({
        initialValues : {
            firstname : '',
            lastname : '',
            username : '',
            email : '',
            password : '',
            confirmpassword : ''
        },
        validationSchema : RegisterSchema,
        onSubmit,
    })
    return (
            <Container className="mt-5 justify-content-center d-flex align-items-center ">
            <form onSubmit={formik.handleSubmit}>
            <div className="d-flex gap-5">
                <div>
                <Label>Firstname</Label>
                <Input className="d-flex flex-column"
                    type="text" 
                    name="firstname" 
                    onChange={formik.handleChange} 
                    value={formik.values.firstname} />
                <span className="text-danger">{formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname : ''}</span>
                </div>

                <div >
                <Label>Lastname</Label>
                <Input className="d-flex flex-column"
                    type="text" 
                    name="lastname" 
                    onChange={formik.handleChange}
                    value={formik.values.lastname} />
                    <span className="text-danger">{formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname : ''}</span>
                </div>
            </div>

                <div className="mt-3 d-flex flex-column " style={{width: '80%'}}>
                <Label>Username</Label>
                <Input 
                    type="text" 
                    name="username" 
                    onChange={formik.handleChange}
                    value={formik.values.username} />
                <span className="text-danger">{formik.touched.username && formik.errors.username ? formik.errors.username : ''}</span>
                </div>

                <div className="mt-3 d-flex flex-column" style={{width: '80%'}}>
                <Label>Email</Label>
                <Input 
                    type="email" 
                    placeholder="name@example.com" 
                    name="email"  
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                <span className="text-danger">{formik.touched.email && formik.errors.email ? formik.errors.email : ''}</span>
                </div>

                <div className="mt-3 d-flex flex-column " style={{width: '80%'}}>
                <Label>Password</Label>
                <Input 
                    type="password" 
                    name="password"   
                    onChange={formik.handleChange}
                    value={formik.values.password}/>
                <span className="text-danger">{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</span>
                </div>

                <div className="mt-3 mb-3 d-flex flex-column" style={{width: '80%'}}>
                <Label>Confirm Password</Label>
                <Input 
                    type="password" 
                    name="confirmpassword"  
                    onChange={formik.handleChange}
                    value={formik.values.confirmpassword} />
                <span className="text-danger">{formik.touched.confirmpassword && formik.errors.confirmpassword ? formik.errors.confirmpassword : ''}</span>
                </div>

                <Button variant="primary" type="submit">Submit</Button>

                <p className='mt-2'>Already Have an account ? <a href="/Login">Login</a></p>

        </form>
    </Container>
    )
}
export default Register