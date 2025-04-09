import React from 'react'
import HeaderLogo from '../atom/headerLogo'
// import HeaderLogo from '../organism/mainHeader'

export default function MainHeader() {
  return (
    <header className='bg-bgWhite py-3 flex justify-center items-center shadow-[0px_5px_10px_#80808040] rounded-b-2xl'>
        <HeaderLogo/>
    </header>
  )
}
