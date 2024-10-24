import React from 'react'
import HeroImage from '../../assets/Hero-image.png'
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
        <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2
        gap-6 min-h-[650px]">
            <div className='flex flex-col justify-center xl:pr-40'>
                <div className='mt-24 mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left'>
                    <h1 className='text-5xl font-black text-darkBlue'>COVID-19 Risk <br/> Assessment Tool</h1>
                    <p className='text-lg text-gray-400 mt-4'>A set of solutions designed to help quickly indentify coronavirus symptopms and get information regarding COVID-19 concerns.</p>
                    <div className='bg-primary text-white px-6 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-200'>
                        <button>See How To Use it</button>
                    </div>
                </div> 
            </div>
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}

            className='flex items-center justify-center'>
                <img src={HeroImage} alt='Collage of Supplements'></img>
            </motion.div>
           
        </div>
    </section>
  )
}

export default Hero