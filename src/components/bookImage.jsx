import React from 'react'

const BookImage = (props) => {

  return (

    <div style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        height:'300px', backgroundSize: 'cover',
        borderRadius:20}}>

    </div>
  )
}

export default BookImage