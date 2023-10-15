import FormData from '../component/organisms/FormData'
import React from 'react'
import Tagline from '../component/organisms/Tagline'
import Editing from '../component/atom/Modal'

const CreatedPage = () => {
    return (
        <>
        <div className='container mt-5'>
        <div className='row justify-content-center'>
            <Tagline />
            <FormData />
        </div>
        </div>

        </>
    )
}
export default CreatedPage