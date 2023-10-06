import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Input from '../../component/atom/Input';
import { Container } from 'react-bootstrap'
import * as Yup from 'yup';

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
    ConfirmPassword : Yup.string()
            .required('ConfirmPassword is required')
            .min(8, 'ConfirmPassword must be at least 8 characters')
            .oneOf([Yup.ref('password')], 'password must match')
})

const Register = () => {
    return (
        <>
            <Container className="mt-5 justify-content-center d-flex align-items-center">
                <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    username: '',
                    email: '',
                    password: '',
                    ConfirmPassword: '',
                }}
                validationSchema={RegisterSchema}

                onSubmit={(values) => {
                    alert('Register Success')
                    console.log(values);
                 }}>
                    
                {formik => (
                <Form onSubmit={formik.handleSubmit}  >
                        {console.log(formik)}

            <div className="d-flex gap-5">
                <Form.Group >
                <Form.Label>Firstname</Form.Label>
                <Input className="d-flex flex-column"
                    type="text" 
                    name="firstname" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.firstname} />
                {formik.touched.firstname && formik.errors.firstname && (
                    <span className="text-danger">{formik.errors.firstname}</span>
                    )}
                </Form.Group>

                <Form.Group >
                <Form.Label>Lastname</Form.Label>
                <Input className="d-flex flex-column"
                    type="text" 
                    name="lastname" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.lastname} />
                    {formik.touched.lastname && formik.errors.lastname && (
                    <span className="text-danger">{formik.errors.lastname}</span>
                    )}
                </Form.Group>
                </div>

                <Form.Group className="mt-3 d-flex flex-column " style={{width: '80%'}}>
                <Form.Label>Username</Form.Label>
                <Input 
                    type="text" 
                    name="username" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.username} />
                {formik.touched.username && formik.errors.username && (
                <span className="text-danger">{formik.errors.username}</span>
                )}
                </Form.Group>

                <Form.Group className="mt-3 d-flex flex-column" style={{width: '80%'}}>
                <Form.Label>Email</Form.Label>
                <Input 
                    type="email" 
                    placeholder="name@example.com" 
                    name="email"  
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email && (
                <span className="text-danger">{formik.errors.email}</span>
                )}
                </Form.Group>

                <Form.Group className="mt-3 d-flex flex-column " style={{width: '80%'}}>
                <Form.Label>Password</Form.Label>
                <Input 
                    type="password" 
                    name="password"   
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.password}/>
                {formik.touched.password && formik.errors.password && (
                <span className="text-danger">{formik.errors.password}</span>
                )}
                </Form.Group>

                <Form.Group className="mt-3 mb-3 d-flex flex-column" style={{width: '80%'}}>
                <Form.Label>Confirm Password</Form.Label>
                <Input 
                    type="password" 
                    name="ConfirmPassword"  
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.ConfirmPassword} />
                {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword && (
                <span className="text-danger">{formik.errors.ConfirmPassword}</span>
                )}
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>

                <p className='mt-2'>Already Have an account ? <a href="/Login">Login</a></p>
            </Form>
            )}
        </Formik>
        </Container>
        </>
    )
}
export default Register