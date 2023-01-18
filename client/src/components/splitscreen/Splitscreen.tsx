import React from 'react'

interface SplitscreenProps {
    left: React.Component
    right: React.Component
}

export const Splitscreen = ({ left: Left, right: Right }: any) => {
  return (
    <div>
        <Left />
        <Right /> 
    </div>
  )
}
