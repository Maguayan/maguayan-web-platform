import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import Link from "next/link";
import Dashboard from './dashboard/page';
import LandingPage from './home/page';

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignedOut>
        <LandingPage/>
      </SignedOut>
      <SignedIn>
        <Dashboard/>
      </SignedIn>
    </main>
  );
}