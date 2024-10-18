import React from 'react'

function Mailcard() {
  return (
    <div className="flex m-4 size p-4">
        <div className="m-4">
            <input type="checkbox"></input>
        </div>
        <div className="flex m-4">
            <p>prop.type</p>
            <p>prop.description</p>
            <p>$Date</p>
        </div>
    </div>
  )
}

export default Mailcard