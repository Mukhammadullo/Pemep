import React from 'react'

const Card1 = ({ img, title, price }) => {
    return (
        <div className='md:w-[22%] h-[70vh] shadow-xl flex  flex-col justify-between'>
            <img src={img} />
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
    )
}

export default Card1