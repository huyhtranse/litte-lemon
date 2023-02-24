import React from 'react'

const Button = ({children, ...rest}) => {
  return (
    <button className='bg-yellow font-semibold rounded-lg px-4 py-2' {...rest}>
      {children}
    </button>
  )
}

export default Button