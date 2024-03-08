import React from 'react'

function Logo({width = '100px'}) {  //<img src="https://cdn.dribbble.com/users/3512994/screenshots/6459452/bloggersunited_4x.jpg" />
  return (
    <div className='hidden md:block' ><img src="https://cdn.dribbble.com/users/3512994/screenshots/6459452/bloggersunited_4x.jpg"  width={width} className='rounded-xl'  /></div>
  )
}

export default Logo