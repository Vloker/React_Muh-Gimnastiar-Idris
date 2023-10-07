import React from "react"
import AtomContacUs from "./AtomContacUs"
import { ImInstagram,ImLinkedin,ImGithub,ImLocation, ImPhone} from "react-icons/im";



const ContacUS = () => {
    return (
        <>
            <div className="flex flex-col bg-white">

                <div className="text-center my-10">
                    <p className="text-3xl font-extrabold hover:underline cursor-pointer">Contac Us</p>
                </div>

                <AtomContacUs />
                
                <div className="flex justify-center my-10 text-xl grid grid-cols-3 divide-x divide-black">
                    
                    <div className="flex flex-col space-y-2 items-center">
                        <div className="flex justify-center">
                            <p>Follow Us</p>
                        </div>
                            <div className="flex space-x-10 justify-center">
                                <ImInstagram className="hover:underline cursor-pointer" />
                                <ImLinkedin className="hover:underline cursor-pointer"/>
                                <ImGithub className="hover:underline cursor-pointer"/>
                            </div>
                    </div>

                    <div className="flex gap-2 justify-center items-center">
                        <ImPhone />
                        <p>+62 877 7097 3374</p>
                    </div>

                    <div className="flex gap-2 justify-center items-center">
                        <ImLocation />
                        <p> Gowa, Sulawesi Selatan, Indonesia</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ContacUS