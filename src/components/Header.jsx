import React from 'react'

const Header = ({children}) => {
  return (
    <div className='text-center my-5 text-4xl font-bold'>
        <h1>
            {children}
        </h1>
    </div>
  )
}

export default Header