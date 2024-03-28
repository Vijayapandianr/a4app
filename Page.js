import React from 'react'

export default function Page() {
  return (
    <div>
    <div>Second Comonent</div>
    <ul>
    {[...Array.from(Array(50000).keys())].map((key) => (
    <li>{key}</li>
    ))}
    </ul>
    </div>
    
  )
}
