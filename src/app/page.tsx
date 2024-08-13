import {
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'

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