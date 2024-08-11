import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import Link from "next/link";
import Dashboard from './dashboard/page';
import Login from './login/page';

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SignedOut>
        <Login/>
      </SignedOut>
      <SignedIn>
        <Dashboard/>
      </SignedIn>
    </main>
  );
}