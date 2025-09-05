import React from 'react'
import Video from './Video';

function HomeHeroText() {
    return (
        <div className='font-[font1] pt-5 text-center'>
            <div className='text-[9vw] flex justify-center items-center  uppercase leading-[8vw]'>
                The spark
            </div >
            <div className='text-[9vw] flex justify-center items-center  uppercase leading-[8vw]'>
                Who
                <div className="h-[7vw] w-[16vw] rounded-6xl -mt-3 overflow-hidden">
                    <Video />
                </div>

                generates
            </div>
            <div className='text-[9vw] flex items-center  uppercase leading-[8vw]'>
                there creativity
            </div>
        </div>
    )
}

export default HomeHeroText