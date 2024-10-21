import React from 'react'

const Uses = () => {
  return (
    <section>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap 5">
                <div className='flex flex-col justify0center xl:pr-14'>
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

export default Uses