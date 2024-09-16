import React from 'react'
import { SignUp } from '@clerk/nextjs'

export default function page() {
  return (
    <div className=" flex justify-center items-center mt-8">
      <SignUp/>
    </div>
  )
}
