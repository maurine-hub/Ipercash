


import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"
// import {images} from '../lib/images'

function About (){
    return( 
        <>
            <div className="flex flex-col items-center md:mx-32 py-16" id="about">
                <div className="flex flex-col text-center p-12 md:w-1/2">
                    <h1 className="font-bold pb-6 text-3xl text-neutral-800">ABOUT OUR APP</h1>
                    <p className="hidden font-meduim text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum? Sunt voluptatum voluptates magni incidunt, eaque, sapiente eveniet quasi beatae, molestiae laborum maxime. Distinctio, ipsum quaerat aliquid suscipit velit sit.</p>
                    <p className="md:hidden font-meduim text-neutral-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, modi eveniet esse iure placeat amet asperiores.</p>

                </div>

                <div className="flex max-sm:flex-col md:py-14 justify-between">
                    <div className="m-8 md:w-1/2">
                          <Image
                                src= "/images/image3.png" // Chemin relatif à partir de /public
                                alt=""
                                width={500}
                                height={300}
                            />
                            {/* <img src="https://e7.pngegg.com/pngimages/188/225/png-clipart-gold-iphone-8-and-8-plus-iphone-8-iphone-x-iphone-4-smartphone-t-mobile-iphone-x-mobile-phone-gadget-electronics-thumbnail.png" alt="" /> */}
                    </div>

                    <div className="flex flex-col md:w-1/2 max-sm:m-4 ">
                        <div className="shadow-md p-3 rounded-md mb-6">
                            <div className="flex items-center pb-4 ">
                                <FaCheckCircle className="text-[#cc1616]"/>
                                <h3 className="uppercase pl-3 font-semibold">creative design</h3>
                            </div>
                            <p className="max-sm:hidden text-base ml-8 text-neutral-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia, magnam voluptatum vero culpa suscipit cumque nostrum in rerum enim eum veniam iusto rem eos!</p>
                            <p className="md:hidden text-base ml-8 text-neutral-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia.</p>
                        </div>

                        <div className="shadow-md p-3 rounded-md mb-6">
                            <div className="flex items-center pb-4 ">
                                <FaCheckCircle className="text-[#cc1616]"/>
                                <h3 className="uppercase pl-3 font-semibold">easy to use</h3>
                            </div>
                            <p className="max-sm:hidden text-base ml-8 text-neutral-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia, magnam voluptatum vero culpa suscipit cumque nostrum in rerum enim eum veniam iusto rem eos!</p>
                            <p className="md:hidden text-base ml-8 text-neutral-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia.</p>
                        </div>

                        <div className="shadow-md p-3 rounded-md mb-6">
                            <div className="flex items-center pb-4 ">
                                <FaCheckCircle className="text-[#cc1616]"/>
                                <h3 className="uppercase pl-3 font-semibold">best user experience</h3>
                            </div>
                            <p className="text-base  text-neutral-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Labore cum excepturi praesentium mollitia, magnam voluptatum vero culpa suscipit cumque nostrum in rerum enim eum veniam iusto rem eos!</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About