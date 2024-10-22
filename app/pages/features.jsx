
import { FaReadme } from "react-icons/fa"
import {Svg} from "../lib/svg"
import Image from 'next/image'
// import {images} from '../lib/images'

const Features = ()=>{
    return(
        <div id="features">
            <div className="relative bg-[#cc1616] flex flex-col items-center max-sm:px-6 py-16 md:p-16 text-white">
                <div className="flex flex-col text-center md:w-1/2">
                    <h1 className="font-bold pb-6 text-3xl text-white">APP FEATURES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus maiores iusto, nisi aliquam quia error eligendi quasi, repellat reiciendis modi? Quo, odit ducimus amet illo sint ratione incidunt maiores.</p>
                </div>

                <div className="flex flex-col items-center py-10 w-80 md:h-80 md:mb-10 ">
                    <FaReadme className="text-4xl w-96"/>
                    <h3 className="uppercase text-lg py-3 md:text-xl">full free chat</h3>
                    <p className="text-base text-center text-[#f2f2f2]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
                <div className="relative w-full max-sm:hidden ">
                <Image
                    src="/images/first.png" // Chemin relatif à partir de /public
                    alt="Description de l'image"
                    width={800}
                    height={500}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[25%] p-6  " // Optionnel : arrondir les bords de l'image
                />
                </div>

                <div className="flex max-sm:flex-col md:container mx-auto md:px-10 md:pb-28 md:w-[85%] justify-between ">
                    <div className="flex flex-col items-center w-72 md:items-end ">
                        <Image
                        src={Svg[0].src}
                        alt=""
                        width={50}
                        height={50}
                        />
                        <h1 className=" text-lg py-3 md:text-xl">ISO & ANDROID VERSION</h1>
                        <p className="text-base text-center md:text-end text-[#f2f2f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col w-72 items-center max-sm:my-8 md:items-start ">
                    <Image
                      src={Svg[0].src}
                      alt=""
                      width={50}
                      height={50}
                    />                        
                    <h1 className="py-3 text-lg md:text-xl">ISO & ANDROID VERSION</h1>
                    <p className=" text-base text-center md:text-start text-[#f2f2f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className=" w-full md:hidden ">
                <Image
                    src="/images/first.png" // Chemin relatif à partir de /public
                    alt="Description de l'image"
                    width={800}
                    height={500}
                />
                </div>

                <div className="flex max-sm:flex-col container pb-10 md:px-10 md:pb-28 w-[85%] justify-between ">
                    <div className="flex flex-col w-72 max-sm:pb-6 items-center md:items-end ">
                        {/* <Images/> */}
                        <h1 className="py-3 text-lg md:text-xl">ISO & ANDROID VERSION</h1>
                        <p className="text-base text-center md:text-end text-[#f2f2f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col w-72 items-center md:items-start ">
                        {/* <Images/> */}
                        <h1 className="py-3 text-lg md:text-xl">ISO & ANDROID VERSION</h1>
                        <p className=" text-base text-center md:text-start text-[#f2f2f2]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center w-80 md:mt-24">
                    <FaReadme className="text-4xl w-96"/>
                    <h1 className="uppercase text-xl py-3">full free chat</h1>
                    <p className="text-base text-center text-[#f2f2f2]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    )
}

export default Features;