import '../../../src/styles/globals.css';
import {
    SignedIn,
    SignedOut,
} from '@clerk/nextjs'

import LandingPage from '../home/page';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export default function Settings(){
    return(
        <div>
            <SignedOut>
                <LandingPage/>
            </SignedOut>
            <SignedIn>
                <div className="backgroundImage min-h-screen w-full flex flex-col items-end py-20 px-8 md:px-20 lg:px-32 gap-y-4">    
                    <div className='flex flex-row space-x-4'>
                        <a href="../logs" className='bg-[#C9C794] text-[#333333] font-semibold px-5 py-1 rounded-lg text-md hover:bg-[#333333] hover:text-white'>View Logs</a>
                        <a href="../" className='bg-[#333333] text-white font-semibold px-5 py-1 rounded-lg text-md hover:bg-[#C9C794] hover:text-[#333333]'><FontAwesomeIcon className='flex items-center ml-1' icon={faRotateLeft}/>  Back</a>
                    </div>
                    <form action="" method="post" className='flex flex-col gap-y-6 bg-white w-full rounded-lg min-h-52 px-16 py-16'>
                        <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-10 gap-y-8 sm:gap-y-0'>
                            <div className='flex flex-col text-lg text-black w-full'>
                                <label htmlFor="interval" className='font-bold mb-3'>Interval</label>
                                <select name="interval" id="interval" className='border bg-gray-300 rounded-sm py-2 px-2 text-sm'>
                                    <option value="1">1 Hour</option>
                                    <option value="2">2 Hours</option>
                                    <option value="3">3 Hours</option>
                                    <option value="4">4 Hours</option>
                                    <option value="5">5 Hours</option>
                                    <option value="6">6 Hours</option>
                                    <option value="7">7 Hours</option>
                                    <option value="8">8 Hours</option>
                                    <option value="9">9 Hours</option>
                                    <option value="10">10 Hours</option>
                                    <option value="11">11 Hours</option>
                                    <option value="12">12 Hours</option>
                                </select>
                            </div>
                            <div className='flex flex-col text-lg text-black w-full'>
                                <label htmlFor="location" className='font-bold mb-3'>Location</label>
                                <input type="text" id='location' name='location' className='border bg-gray-300 rounded-sm py-2 px-4 text-sm'/>
                            </div>
                        </div>
                        <button type="submit" className='bg-[#333333] text-white font-semibold w-32 px-4 py-1 rounded-md mt-3'>Update</button>
                    </form>
                </div>
            </SignedIn>
        </div>
        
    );
}
