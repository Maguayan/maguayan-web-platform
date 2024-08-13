import '../../../src/styles/globals.css';
import Image from 'next/image';
import logo from '../../../public/logo-white.png';

export default function Home(){
    return(
        <div className="backgroundImage min-h-screen w-full flex flex-col justify-center items-center py-20 px-4 md:px-20 lg:px-32">
            <div className='bg-[#303030] bg-opacity-50 h-auto w-94 rounded-lg py-20 px-12 md:px-20 flex flex-col items-center justify-center gap-y-8'>
                <Image 
                    alt='Logo' 
                    src={logo}  
                    className='h-auto md:w-4/5 lg:w-1/3'
                />
                <p className='text-white w-full text-left md:text-justify text-xs md:text-md xl:text-lg'>
                    Introducing MAGUAYAN: the cutting-edge <strong>Microplastics Assessment and Gathering Unit for Analyzing 
                    Yield in Aquatic Networks.</strong> This innovative buoy is set to transform environmental monitoring through
                    advanced technology deployed across diverse aquatic environments. Equipped with an electronic microscope,
                    Raspberry Pi 4B, and precision motors, MAGUAYAN efficiently collects, detects, and quantifies microplastics 
                    in real-time. The collected data is seamlessly transmitted to a centralized database, offering critical 
                    insights into microplastic pollution. By supporting the United Nations&apos; 17 Sustainable Development Goals, 
                    MAGUAYAN contributes directly to <strong>Clean Water and Sanitation (Goal 6), Life Below Water (Goal 14)</strong>, 
                    and <strong>Responsible Consumption and Production (Goal 12)</strong>, while promoting  
                    <strong> Sustainable Cities and Communities (Goal 11), Climate Action (Goal 13)</strong>, 
                    and <strong>Partnerships for the Goals (Goal 17)</strong>, among others. This tool plays a vital role in advancing global water conservation and environmental sustainability efforts.
                </p>
                <a href='/signin' className='text-[#333333] text-sm lg:text-md font-semibold bg-[#C9C794] px-3 md:px-5 py-2 rounded-lg my-2 hover:bg-[#333333] hover:text-white'>
                    Sign in with Clerk
                </a>
            </div>
        </div>
    );
}
