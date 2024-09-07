"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function UpdateBuoy() {
  const buoyData = api.buoy.getById.useQuery('1');
  const utils = api.useUtils();

  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const updateBuoy = api.buoy.update.useMutation({
    onSuccess: async () => {
      await utils.config.invalidate();
      setLocation("");
      setName("");
    },
  });

  return (
    <div className="flex flex-row w-full max-w">
      <div className='flex flex-col text-black w-64'>
          <p className='font-bold mb-3'>Current Buoy Info</p>
          <p className='font-bold mb-3'>Buoy Name : {buoyData.data?.name}</p>
          <p className='font-bold mb-3'>Buoy Location : {buoyData.data?.location}</p>
      </div>
      <form 
        className='flex flex-col gap-y-6 bg-white w-full rounded-lg min-h-52 px-8 py-4'
        onSubmit={(e) => {
          e.preventDefault();
          updateBuoy.mutate({ 
                id : buoyData.data?.id.toString() ?? "0",
                name : name,
                location : location,
                configId : buoyData.data?.configId.toString() ?? "0",
            });
        }}
      >
        <div className="flex flex-row gap-x-10">
            <div className='flex flex-col text-lg text-black w-full max-w-xs'>
                <label htmlFor="name" className='font-bold mb-3'>Buoy Name</label>
                <input 
                    type="text" 
                    placeholder="Set Buoy Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border bg-gray-300 rounded-sm py-2 px-4 text-sm'/>
            </div>
            <div className='flex flex-col text-lg text-black w-full max-w-xs'>
                <label htmlFor="location" className='font-bold mb-3'>Buoy Location</label>
                <input 
                    type="text" 
                    placeholder="Set Buoy Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className='border bg-gray-300 rounded-sm py-2 px-4 text-sm'/>
            </div>
        </div>
        <button
          type="submit"
          className='bg-[#333333] text-white font-semibold w-32 px-4 py-1 rounded-md mt-3'
          disabled={updateBuoy.isPending}
        >
          {updateBuoy.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
