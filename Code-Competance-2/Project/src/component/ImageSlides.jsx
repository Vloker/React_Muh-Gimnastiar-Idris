'use client';
import { Carousel } from 'flowbite-react';

const ImageSlides = () => {
  return (
    <>
    <Carousel slideInterval={3000} className='w-4/5 h-56 sm:h-64 xl:h-80 2xl:h-96'>
      <img src="/images/omar-prestwich-CvGHUJ2qA14-unsplash.jpg" />
      <img src="/images/christine-roy-ir5MHI6rPg0-unsplash.jpg" />
      <img src="/images/ian-dooley-3NCA3tbaE5I-unsplash.jpg" />
    </Carousel>
    </>
  )
}
export default ImageSlides