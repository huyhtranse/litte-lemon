import React from 'react'

const Button = ({children, styles}) => {
  return (
    <button className={`bg-yellow font-semibold rounded-lg px-4 py-2 ${styles}`}>
      {children}
    </button>
  )
}

export default Button