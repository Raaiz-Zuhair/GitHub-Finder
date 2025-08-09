import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-white rounded-xl p-8 min-w-3xl shadow-lg mt-5'>
        {children}
    </div>
  )
}

export default Card