import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

import LandingPage from '../home/page';
import Link from "next/link";
import '../../styles/globals.css';
import Image from 'next/image';
import microplastic from '../../../public/microplastic.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default async function Dashboard() {
    return (
        <div>
            <SignedOut>
                <LandingPage/>
            </SignedOut>
            <SignedIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 min-h-screen flex-col text-black px-6 sm:px-10 md:px-14 lg:px-24 xl:px-32 2xl:px-40 py-28 place-items-center lg:place-items-start 2xl:place-items-center gap-4 backgroundImage">
                    <div className='col-span-2 md:col-span-2 2xl:col-span-3 w-full h-auto items-center grid place-content-end grid-flow-col gap-x-4'>
                        <a href="#" className='font-bold text-xs md:text-sm px-5 md:px-7 py-2 bg-[#C9C794] text-[#333333] rounded-lg hover:bg-[#333333] hover:text-white'>Settings <FontAwesomeIcon className='flex items-center ml-1' icon={faGear}/></a>
                        <UserButton />
                    </div>
                    <div className='flex flex-col lg:flex-col 2xl:flex-col items-center col-span-2 md:col-span-2 lg:col-span-1 2xl:col-span-1 bg-[#303030] bg-opacity-50 text-white p-10 rounded-lg w-full h-full border-2 border-[#C9C794]'>
                        <Image alt='Sample Image' src={microplastic} className='md:w-full lg:w-full 2xl:w-full h-full lg:h-auto 2xl:h-full'/>
                        <div className='text-sm md:text-md lg:text-lg py-6 flex w-full lg:items-start 2xl:items-start flex-col gap-y-4'>
                            <div className='flex  flex-col md:flex-row font-medium gap-2'>
                                <p>DATE TAKEN:</p>
                                <p className='font-bold'>August 7, 2024</p>
                            </div>
                            <div className='flex flex-col md:flex-row font-medium gap-2'>
                                <p>TIME:</p>
                                <p className='font-bold'>12:30 PM</p>
                            </div>
                            <div className='flex flex-col md:flex-row font-medium gap-2'>
                                <p>MICROPLASTICS DETECTED:</p>
                                <p className='font-bold'>12</p>
                            </div>
                            <div className='flex flex-col md:flex-row font-medium gap-2'>
                                <p>LOCATION:</p>
                                <p className='font-bold'>MANILA CITY</p>
                            </div>
                        </div>
                        <div className='flex w-full items-start'>
                            <a href="#" className='bg-[#C9C794] text-[#333333] font-bold px-4 py-2 rounded-lg text-xs hover:bg-white hover:text-[333333]'>View Logs</a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 col-span-2 lg:col-span-1 2xl:col-span-2 rounded-lg w-full h-full gap-x-4'>
                        <div className='col-span-2 md:col-span-1 p-10 rounded-lg bg-[#303030] bg-opacity-50 text-white w-full md:h-28 lg:h-32 flex flex-col justify-center md:my-2 lg:my-4 2xl:my-0 border-2 border-[#C9C794]'>
                            <p className='px-4 font-medium text-[0.8rem] md:text-xs lg:text-sm 2xl:text-md'>
                                TOTAL MICROPLASTICS DETECTED
                            </p>
                            <p className='px-4 font-extrabold md:text-lg lg:text-xl 2xl:text-2xl'>
                                12 MICROPLASTICS
                            </p>
                        </div>
                        <div className='col-span-2 md:col-span-1 p-10 rounded-lg bg-[#303030] bg-opacity-50 text-white w-full md:h-28 lg:h-32 flex flex-col justify-center my-4 md:my-2 lg:my-4 2xl:my-0 border-2 border-[#C9C794]'>
                            <p className='px-4 font-medium text-[0.8rem] md:text-xs lg:text-sm 2xl:text-md'>
                                LOCATION
                            </p>
                            <p className='px-4 font-extrabold md:text-lg lg:text-xl 2xl:text-2xl'>
                                MANILA CITY
                            </p>
                        </div>
                        <div className='flex lg:hidden 2xl:flex col-span-2 lg:col-span-1 2xl:col-span-2 p-10 rounded-lg bg-[#303030] bg-opacity-50 w-full h-96 border-2 border-[#C9C794]'>

                        </div>
                        <div className='col-span-2 md:col-span-1 p-10 rounded-lg bg-[#303030] bg-opacity-50 text-white w-full h-32 flex flex-col justify-center my-4 md:my-2 lg:my-4 2xl:my-0 border-2 border-[#C9C794]'>
                            <p className='px-4 font-medium text-[0.8rem] md:text-xs lg:text-sm 2xl:text-md'>
                                TIME UNTIL NEXT CAPTURE
                            </p>
                            <p className='px-4 font-extrabold md:text-lg lg:text-xl 2xl:text-2xl'>
                                5.32 HOURS
                            </p>
                        </div>
                        <div className='col-span-2 md:col-span-1 p-10 rounded-lg bg-[#303030] bg-opacity-50 text-white w-full h-32 flex flex-col justify-center md:my-2 lg:my-4 2xl:my-0 border-2 border-[#C9C794]'>
                            <p className='px-4 font-medium text-[0.8rem] md:text-xs lg:text-sm 2xl:text-md'>
                                BATTERY STATUS
                            </p>
                            <div className='flex flex-col sm:flex-row px-4 sm:gap-2'>
                            <p className='font-extrabold md:text-lg lg:text-xl 2xl:text-2xl'>
                                12.50 HOURS
                            </p>
                            <p className='font-extrabold md:text-xs lg:text-md 2xl:text-lg flex items-center'>
                                remaining
                            </p>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex 2xl:hidden col-span-2 lg:col-span-2 p-10 rounded-lg bg-[#303030] bg-opacity-50 w-full h-96 border-2 border-[#C9C794]'>

                </div>
            </div>
            </SignedIn>
        </div>
        
    );
}
  