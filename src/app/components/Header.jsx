import Link from 'next/link'
import React from 'react'
import { SignedIn, SignInButton, UserButton, SignedOut, SignIn } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-blue-300 to-green-400 shadow-lg'>
        <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
            {/* logo */}
            <Link href="/" className = "text-2xl font-extrabold group cursor-pointer">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600' >Auth</span>
            </Link>
            <nav>
                <ul className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href='/about'>About</Link>
                    <SignedIn>
                      <UserButton/>  
                    </SignedIn>
                    <SignedOut>
                        <SignInButton/>
                        {/* <Link href='/sign-in'>Sign in</Link> */}
                    </SignedOut>
                </ul>
            </nav>
        </div>

    </header>
  )
}
