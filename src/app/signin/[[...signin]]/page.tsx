import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    SignIn
} from '@clerk/nextjs'
  

import '../../../../src/styles/globals.css';
import Image from 'next/image';
import logo from '../../../public/logo-white.png'

  
export default async function Login() {
    return (
        <div className="backgroundImage min-h-screen w-full flex flex-col justify-center items-center py-20 px-4 md:px-20 lg:px-32">
            <SignIn/>
            
        </div>
    );
}
  