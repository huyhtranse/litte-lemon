import React from 'react'

const Button = ({children, styles, typeButton}) => {
  return (
    <button className={`bg-yellow font-semibold rounded-lg px-4 py-2 ${styles}`} type={typeButton ? typeButton : 'button'}>
      {children}
    </button>
  )
}

export default Button