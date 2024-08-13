import '../../../src/styles/globals.css';
import {
    SignedIn,
    SignedOut,
} from '@clerk/nextjs'

import LandingPage from '../home/page';

export default function Settings(){
    return(
        <div>
            <SignedOut>
                <LandingPage/>
            </SignedOut>
            <SignedIn>
                <div className="backgroundImage min-h-screen w-full flex flex-col justify-center items-center py-20 px-4 md:px-20 lg:px-32">
                    <h1 className='font-bold text-4xl text-white'>SETTINGS</h1>
                </div>
            </SignedIn>
        </div>
        
    );
}
