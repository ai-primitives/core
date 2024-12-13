import React from 'react'

interface ItemProps {
  activity?: string
  description?: string
}

export const Item: React.FC<ItemProps> = ({ activity, description }) => (
  <div>
    <h2>{activity}</h2>
    <p>{description}</p>
  </div>
)
