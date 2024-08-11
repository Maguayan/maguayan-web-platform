import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import Link from "next/link";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#3e9dc9] to-[#1929b6] text-white">
      <div className='flex-row p-5'>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className='flex flex-grow justify-center items-center'>
        Maguayan Landing Page <br />
        test br
      </div>
    </main>
  );
}
