import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import Link from "next/link";

export default async function Home() {

  // const backgroundImageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fijc.org%2Fen%2Fyeah-buoy-emergence-nearshore-smart-buoy-network-great-lakes&psig=AOvVaw2rebwqFWZEIdlBWktUMETI&ust=1723112043426000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjvisfS4ocDFQAAAAAdAAAAABAJ';
  // const style = {
  //   backgroundImage: `url(${backgroundImageUrl})`,
  //   backgroundSize: 'cover',       // Optional: to cover the entire element
  //   backgroundPosition: 'center',  // Optional: to center the image
  //   backgroundRepeat: 'no-repeat', // Optional: to prevent image repetition
  //   height: '500px',               // Specify a height for the element
  //   width: '100%',                 // Specify width
  // };

  return (
      <div className="grid grid-cols-3 min-h-screen flex-col bg-gray-200 text-black px-20 py-10 place-items-center gap-4">
          <div className='col-span-1 bg-white p-10 rounded-lg w-full h-full'>
            
          </div>
          <div className='grid grid-cols-2 col-span-2 rounded-lg w-full h-full gap-x-4'>
            <div className='col-span-1 p-10 rounded-lg bg-white w-full h-32'>

            </div>
            <div className='col-span-1 p-10 rounded-lg bg-white w-full h-32'>

            </div>
            <div className='col-span-2 p-10 rounded-lg bg-white w-full h-60'>

            </div>
            <div className='col-span-1 p-10 rounded-lg bg-white w-full h-32'>

            </div>
            <div className='col-span-1 p-10 rounded-lg bg-white w-full h-32'>

            </div>
          </div>
      </div>
  );
}
