import React from "react"
import AtomNavbar from "./component/AtomNavbar"
import ImageSlides from "./component/ImageSlides"
import ContacUS from "./component/ContacUs"
import AboutUS from "./component/AboutUs"

function App() {

  return (
    <>
    <section className="bg-zinc-950">
      
      {/* Navbar */}
      <div>
      <AtomNavbar />
      </div>
    
    {/* Background Welcome */}
      <div className="h-screen  mt-2 flex justify-center items-center bg-[url(/images/lucas-hoang-Dl82-cM2w0k-unsplash.jpg)]">
            <h1 className="text-white">Welcome to Roadmap</h1>
      </div>

    {/* Slides */}
      <div className=" h-56 sm:h-64 xl:h-80 2xl:h-96 mt-4 flex justify-center">
        <ImageSlides />
      </div>

    {/* Contact */}
        <ContacUS />
    </section>

    </>
  )
}

export default App
