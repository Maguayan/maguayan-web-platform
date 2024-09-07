import '../../../src/styles/globals.css';
import {
    SignedIn,
    SignedOut,
} from '@clerk/nextjs'

import LandingPage from '../home/page';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { DetectedDataTable } from '../_components/detected-data-table';

export default function Settings(){
    return(
        <div>
            <SignedOut>
                <LandingPage/>
            </SignedOut>
            <SignedIn>
                <div className="backgroundImage min-h-screen w-full flex flex-col items-end py-20 px-8 md:px-20 lg:px-32 gap-y-4">    
                    <div className='flex flex-row space-x-4'>
                        <a href="../settings" className='bg-[#C9C794] text-[#333333] font-semibold px-5 py-1 rounded-lg text-md hover:bg-[#333333] hover:text-white'><FontAwesomeIcon className='flex items-center ml-1' icon={faGear}/> Settings</a>
                        <a href="../" className='bg-[#333333] text-white font-semibold px-5 py-1 rounded-lg text-md hover:bg-[#C9C794] hover:text-[#333333]'><FontAwesomeIcon className='flex items-center ml-1' icon={faRotateLeft}/>  Back</a>
                    </div>
                    <DetectedDataTable /> 
                </div>
            </SignedIn>
        </div>
        
    );
}
