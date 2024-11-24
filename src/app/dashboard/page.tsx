import {
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

import LandingPage from '../home/page';
import '../../styles/globals.css';

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { LineGraph } from '../_components/line';

import { api } from '~/trpc/server';
import { auth } from '@clerk/nextjs/server';
import Imagebox from '../_components/lightbox';



export default async function Dashboard() {

    const { userId } = await auth.protect();
    const getUser = await api.user.getById( userId ?? "");
    const getBuoy = await api.buoy.getById( '1' );
    const getDetectList = await api.buoyData.getByBuoy( '1' );
    const getLatest = await api.buoyData.getLatest( '1' );
    const getConfig = await api.config.getById( ( getBuoy?.configId ?? 0 )?.toString() )
    const getAccess = await api.access.getByBuoy( '1' );

    const today = new Date().toLocaleDateString('en-PH' , { timeZone: 'Asia/Manila' });

    let count = 0
    getDetectList.forEach( data => { count += data.detectedMicroplastics });

    const min_diff = (getConfig?.interval ?? 0) * 60
    const next_collection = new Date((getLatest?.createdAt.getTime() ?? 0) + (min_diff)*60000).toLocaleString('en-PH', { timeZone: 'Asia/Manila' });

    let access  = false; 
    getAccess?.forEach( data => { 
        if (data.userId == getUser?.id) { 
                access = true
            } 
        });

    return (
        <div>
            <SignedOut>
                <LandingPage/>
            </SignedOut>
            <SignedIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 min-h-screen flex-col text-black px-6 sm:px-10 md:px-14 lg:px-24 xl:px-32 2xl:px-40 py-28 place-items-center lg:place-items-start 2xl:place-items-center gap-4 backgroundImage">
                    <div className='col-span-2 md:col-span-2 2xl:col-span-3 w-full h-auto items-center grid place-content-end grid-flow-col gap-x-4'>
                        <a href="/settings" className='font-bold text-xs md:text-sm px-5 md:px-7 py-2 bg-[#C9C794] text-[#333333] rounded-lg hover:bg-[#333333] hover:text-white'>Settings <FontAwesomeIcon className='flex items-center ml-1' icon={faGear}/></a>
                        <UserButton />
                    </div>
                    <div className='flex flex-col lg:flex-col 2xl:flex-col items-center col-span-2 md:col-span-2 lg:col-span-1 2xl:col-span-1 bg-white text-[#303030] p-10 rounded-lg w-full h-full'>
                        <Imagebox image_url={ getLatest?.imgUrl ?? '' }/>
                        <div className='text-sm md:text-md lg:text-lg py-6 flex w-full lg:items-start 2xl:items-start flex-col'>
                            <div className='flex  flex-col md:flex-row font-medium gap-2'>
                                <p>DATE TAKEN:</p>
                                <p className='font-bold'>{ getLatest?.createdAt.toLocaleDateString('en-PH', { timeZone: 'Asia/Manila' }) }</p>
                            </div>
                            <div className='flex flex-col md:flex-row font-medium gap-2'>
                                <p>TIME:</p>
                                <p className='font-bold'>{ getLatest?.createdAt.toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila' }) }</p>
                            </div>
                            <div className='flex flex-col md:flex-row font-medium gap-2'>
                                <p>MICROPLASTICS DETECTED:</p>
                                <p className='font-bold'>{ getLatest?.detectedMicroplastics }</p>
                            </div>
                            <div className='flex flex-col md:flex-row font-medium gap-2'>
                                <p>LOCATION:</p>
                                <p className='font-bold'> { getLatest?.locationTaken } </p>
                            </div>
                        </div>
                        <div className='flex w-full items-start'>
                            <a href={"/logs?buoyId=1&dateFrom=01/01/1997&dateTo=".concat(today) } className='bg-[#C9C794] text-[#333333] font-bold px-4 py-2 rounded-lg text-xs hover:bg-white hover:text-[333333]'>View Logs</a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 col-span-2 lg:col-span-1 2xl:col-span-2 rounded-lg w-full h-full gap-x-4'>
                        <div className='col-span-2 md:col-span-1 p-10 rounded-lg bg-white text-[#303030] w-full md:h-28 lg:h-32 flex flex-col justify-center md:my-2 lg:my-4 2xl:my-0'>
                            <p className='px-4 font-medium text-[0.8rem] md:text-xs lg:text-sm 2xl:text-md'>
                                TOTAL MICROPLASTICS DETECTED
                            </p>
                            <p className='px-4 font-extrabold md:text-lg lg:text-xl 2xl:text-2xl'>
                                { count } MICROPLASTICS
                            </p>
                        </div>
                        <div className='col-span-2 md:col-span-1 p-10 rounded-lg bg-white text-[#303030] w-full md:h-28 lg:h-32 flex flex-col justify-center my-4 md:my-2 lg:my-4 2xl:my-0'>
                            <p className='px-4 font-medium text-[0.8rem] md:text-xs lg:text-sm 2xl:text-md'>
                                LOCATION
                            </p>
                            <p className='px-4 font-extrabold md:text-lg lg:text-xl 2xl:text-2xl'>
                                { getBuoy?.location }
                            </p>
                        </div>
                        <div className='flex lg:hidden 2xl:flex col-span-2 lg:col-span-1 2xl:col-span-2 p-10 rounded-lg bg-white w-full h-96 justify-center items-center'>
                            <div className='w-full h-full'>
                                <LineGraph />
                            </div>
                        </div>
                        <div className='col-span-2 md:col-span-1 p-10 rounded-lg bg-white text-[#303030] w-full h-32 flex flex-col justify-center my-4 md:my-2 lg:my-4 2xl:my-0'>
                            <p className='px-4 font-medium text-[0.8rem] md:text-xs lg:text-sm 2xl:text-md'>
                                NEXT COLLECTION TIME
                            </p>
                            <p className='px-4 font-extrabold md:text-lg lg:text-xl 2xl:text-2xl'>
                                { next_collection }
                            </p>
                        </div>
                        <div className='col-span-2 md:col-span-1 p-10 rounded-lg bg-white text-[#303030] w-full h-32 flex flex-col justify-center md:my-2 lg:my-4 2xl:my-0'>
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
                <div className='hidden lg:flex 2xl:hidden col-span-2 lg:col-span-2 p-10 rounded-lg bg-white w-full h-96 justify-center items-center'>
                    <div className='w-full h-full'>
                        <LineGraph />
                    </div>
                </div>
            </div>
            </SignedIn>
        </div>
        
    );
}
  
