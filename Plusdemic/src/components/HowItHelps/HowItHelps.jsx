import React from 'react'
import Cards from './Cards.jsx'
import icon1 from '../../assets/1.png'
import icon2 from '../../assets/2.png'
import icon3 from '../../assets/3.png'

const HowItHelps = () => {
  return (
    <section>
        <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                        <Cards 
                        icon={icon1}
                        heading='Symptoms'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non.'/>
                         <Cards 
                        icon={icon2}
                        heading='Symptoms'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non.'/>
                         <Cards 
                        icon={icon3}
                        heading='Symptoms'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non.'/>
                    </div>
                   
                    
                </div>
                <div className='flex flex-col justify-center xl:pr-14'>
                    <h1 className='text-3xl font-bold text-darkBlue'>
                        How it helps people
                    </h1>
                    <p className='text-lg text-gray-400 mt-4'> 
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Error eos eum 
                        accusantium laborum id repellat.</p>
                        <p className='text-sm text-gray-400 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <a href='#' className='text-primary'>Learn More</a></p>
                    <button className='w-fit
                     mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300'>Get in Touch</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItHelps