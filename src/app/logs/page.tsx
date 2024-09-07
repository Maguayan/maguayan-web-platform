import '../../../src/styles/globals.css';
import {
    SignedIn,
    SignedOut,
} from '@clerk/nextjs'

import LandingPage from '../home/page';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

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
                    <div className='flex flex-col gap-y-6 bg-white w-full rounded-lg min-h-52 px-16 py-16 overflow-x-auto'>
                        <table className='w-full text-[#333333] text-sm md:text-lg'>
                            <thead className="bg-gray-300 border-b border-gray-300">
                                <tr>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold">ID</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold">Time</th>   
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold">Date</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold">Microplastics Detected</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold">Location</th>
                                    <th className="py-3 px-6 text-left text-gray-600 font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">1</td>
                                    <td className="py-3 px-6 border-b border-gray-300">6:00 AM</td>
                                    <td className="py-3 px-6 border-b border-gray-300">2024-09-07</td>
                                    <td className="py-3 px-6 border-b border-gray-300">12</td>
                                    <td className="py-3 px-6 border-b border-gray-300">Manila City</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">2</td>
                                    <td className="py-3 px-6 border-b border-gray-300">12:00 PM</td>
                                    <td className="py-3 px-6 border-b border-gray-300">2024-09-07</td>
                                    <td className="py-3 px-6 border-b border-gray-300">24</td>
                                    <td className="py-3 px-6 border-b border-gray-300">Manila City</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">3</td>
                                    <td className="py-3 px-6 border-b border-gray-300">6:00 PM</td>
                                    <td className="py-3 px-6 border-b border-gray-300">2024-09-07</td>
                                    <td className="py-3 px-6 border-b border-gray-300">16</td>
                                    <td className="py-3 px-6 border-b border-gray-300">Manila City</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">4</td>
                                    <td className="py-3 px-6 border-b border-gray-300">12:00 AM</td>
                                    <td className="py-3 px-6 border-b border-gray-300">2024-09-08</td>
                                    <td className="py-3 px-6 border-b border-gray-300">20</td>
                                    <td className="py-3 px-6 border-b border-gray-300">Manila City</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">5</td>
                                    <td className="py-3 px-6 border-b border-gray-300">6:00 AM</td>
                                    <td className="py-3 px-6 border-b border-gray-300">2024-09-08</td>
                                    <td className="py-3 px-6 border-b border-gray-300">6</td>
                                    <td className="py-3 px-6 border-b border-gray-300">Manila City</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">6</td>
                                    <td className="py-3 px-6 border-b border-gray-300">12:00 PM</td>
                                    <td className="py-3 px-6 border-b border-gray-300">2024-09-08</td>
                                    <td className="py-3 px-6 border-b border-gray-300">23</td>
                                    <td className="py-3 px-6 border-b border-gray-300">Manila City</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">7</td>
                                    <td className="py-3 px-6 border-b border-gray-300">6:00 PM</td>
                                    <td className="py-3 px-6 border-b border-gray-300">2024-09-08</td>
                                    <td className="py-3 px-6 border-b border-gray-300">11</td>
                                    <td className="py-3 px-6 border-b border-gray-300">Manila City</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">8</td>
                                    <td className="py-3 px-6 border-b border-gray-300">12:00 AM</td>
                                    <td className="py-3 px-6 border-b border-gray-300">2024-09-09</td>
                                    <td className="py-3 px-6 border-b border-gray-300">18</td>
                                    <td className="py-3 px-6 border-b border-gray-300">Manila City</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </SignedIn>
        </div>
        
    );
}
