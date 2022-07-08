import React from 'react'

const Container = ({children}) => {
  return (
    <div className='m-auto max-w-7xl flex flex-col h-full px-4'>{children}</div>
  )
}

export default Container