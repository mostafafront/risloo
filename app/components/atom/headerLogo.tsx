import Image from 'next/image'
import React from 'react'

export default function HeaderLogo() {
  return (
    <div>
        <Image width={50} height={50} alt='logo' src={'/images/rislo.webp'}/>
    </div>
  )
}
