import React from 'react'

const show = (data) => {
  return (
    <div>
        <h3>{data.center_name}</h3>
        <p>{data.address}</p>

    </div>
  )
}

export default show;