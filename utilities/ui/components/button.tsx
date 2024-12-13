'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  appName: string
}

export const Button: React.FC<ButtonProps> = ({ children, className, appName }) => {
  return (
    <button className={className} onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  )
}
