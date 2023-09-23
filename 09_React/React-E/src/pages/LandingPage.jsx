import React from 'react'
import Header from '../component/organisms/Header/Header'
import Footer from '../component/organisms/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LandingPage = () => {

    const [LandingPage, setLandingPage] = useState(false)
    const navigate = useNavigate()

    const handlePage = () => {
        setLandingPage(!LandingPage)
        navigate('/Created')
    }

    return (
        <>
            <Header />
            <div className='container-fluid mt-5' style={{backgroundColor: '#37517E'}}>
                <div className='d-flex justify-content-center align-items-center p-5'>
                    <div style={{color: 'white'}}>
                        <h1>Better Solutions For Your Business</h1>
                        <h5>We are team of talented designers making websites with Bootstrap</h5>
                        <div className='d-flex gap-5 mt-5'>
                            <button className='btn btn-primary px-4 py-2' onClick={handlePage} style={{borderRadius: '10px'}}>Go to Created</button>
                            <button className='btn'>Watch Video</button>
                        </div>
                    </div>
                    <div>
                    <img src="hero-img.png.png"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default LandingPage