import React from 'react'

const Card1 = ({ img, title, price }) => {
    return (
        <div className='md:w-[22%] md:h-[70vh] shadow-xl flex  flex-col justify-between mt-[20px] m-[20px]'>
            <img src={img} />
            <h1 className='text-[#6C6C6C]'>{title}</h1>
            <p  className='font-bold'>{price}</p>
        </div>
    )
}

export default Card1