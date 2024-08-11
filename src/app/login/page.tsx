import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
  

import '../../../src/styles/globals.css';
import Image from 'next/image';
import logo from '../../../public/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
  
  export default async function Login() {
    return (
        <div className="backgroundImage min-h-screen w-full flex flex-col justify-center items-center px-10 md:px-20 lg:px-32">
            <div className='bg-white h-auto w-94 rounded-lg py-20 px-16 flex flex-col items-center justify-center gap-y-8'>
                <Image alt='Logo' src={logo} className='h-auto md:w-4/5 lg:w-1/3'/>
                <p className='text-[#333333] w-full text-justify text-sm lg:text-md xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, odio dolores blanditiis voluptate quisquam perferendis commodi aliquam, deserunt quidem quia numquam minus in rem? Rem distinctio saepe porro vero dignissimos. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur voluptatibus ut aut minus animi error temporibus inventore hic, officiis itaque quam vel saepe placeat, possimus corrupti illo quas. Exercitationem?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea reprehenderit sapiente, voluptatem, fuga, quis molestiae vero officiis nemo nam delectus repudiandae? Sint expedita culpa atque fugit iste? Excepturi, facilis voluptates.</p>
                
                <SignInButton>
                    <button className='text-[#333333] text-sm lg:text-md font-bold bg-[#C9C794] px-3 md:px-5 py-2 rounded-lg my-2 hover:bg-[#333333] hover:text-white'>Sign in with Clerk</button>
                </SignInButton>
            </div>
    
        </div>
    );
  }
  