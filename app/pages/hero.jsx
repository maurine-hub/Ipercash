// import {images} from '../lib/images'
import Image from 'next/image';


const Hero = ()=>{
  return(
    <>
      <div className="bg-[#cc1616] w-full px-5 md:px-32">
        <div className="flex w-full max-sm:flex-col py-20 md:mx-16  ">
          <div className="relative border-8 border-red-500 w-full h-[27rem] md:w-1/2">
            <div className="flex flex-col absolute right-4 top-2 bg-white w-full p-6">
              <h1 className="uppercase text-[#cc1616] text-2xl font-bold md:text-4xl">a great app makes your life better</h1>
              <p className="py-4 text-neutral-500 md:py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos, corporis necessitatibus ab maiores dolores ea dolorem quisquam dicta voluptatum cumque vitae explicabo velit, voluptate sunt. Ex soluta magni aspernatur?</p>
              <p className="font-semibold uppercase text-xl md:text-2xl">download app now</p>
              <div className='flex items-center '>
                <div>
                  <Image
                    src='/images/btn1.png'
                    alt=''
                    width={110}
                    height={32}
                  />
                </div>
                <div>
                  <Image
                    src='/images/btn2.png'
                    alt=''
                    width={110}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='md:w-[70%]'>
            <Image
              src='/images/second.png'
              alt=''
              width={900}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero;