import Link from 'next/link'
import React from 'react'

import { SignInButton, SignedOut, SignedIn, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className=' bg-blue-500 shadow-lg py-3'>
        <div className=' max-w-6xl mx-auto flex justify-between items-center '>
            <Link href={'/'}>
                <span>AuthApp</span>
            </Link>

            <nav>
                <ul className='w-52 flex justify-between'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/about'}>About</Link>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                </ul>
            </nav>
        </div>
    </header>
  )
}
