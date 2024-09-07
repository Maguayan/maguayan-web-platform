"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function UpdateConfig() {
  const buoyData = api.buoy.getById.useQuery('1');
  const buoyConfig = api.config.getById.useQuery(buoyData.data?.configId.toString() ?? '0');
  const utils = api.useUtils();
  
  const options = [
    {value: '1', label: '1 Hour'},
    {value: '2', label: '2 Hours'},
    {value: '3', label: '3 Hours'},
    {value: '4', label: '4 Hours'},
    {value: '5', label: '5 Hours'},
    {value: '6', label: '6 Hours'},
    {value: '7', label: '7 Hours'},
    {value: '8', label: '8 Hours'},
    {value: '9', label: '9 Hours'},
    {value: '10', label: '10 Hours'},
    {value: '11', label: '11 Hours'},
    {value: '12', label: '12 Hours'},
  ]; 

  const [interval, setInterval] = useState("");

  const updateConfig = api.config.update.useMutation({
    onSuccess: async () => {
      await utils.config.invalidate();
      setInterval("");
    },
  });

  const selections = options.map(({ value, label }, index) => <option key={index} value={value}>{label}</option>)

  return (
    <div className="flex flex-row w-full max-w">
      <div className='flex flex-col text-black w-64'>
          <p className='font-bold mb-3'>Current Config Info</p>
          <p className='font-bold mb-3'>Interval between Collections : {buoyConfig.data?.interval} Hour/s</p>
      </div>
      <form 
        className='flex flex-col gap-y-6 bg-white w-full rounded-lg min-h-52 px-8 py-4'
        onSubmit={(e) => {
          e.preventDefault();
          updateConfig.mutate({ id : buoyConfig.data?.id.toString() ?? "0", interval : interval });
        }}
      >
        <div className='flex flex-col text-lg text-black w-full max-w-xs'>
            <label htmlFor="interval" className='font-bold mb-3'>Interval</label>
            <select 
                name="interval" 
                id="interval" 
                onChange={(e) => setInterval(e.target.value)}
                className='border bg-gray-300 rounded-sm py-2 px-2 text-sm'>
                { selections }
            </select>
        </div>
        <button
          type="submit"
          className='bg-[#333333] text-white font-semibold w-32 px-4 py-1 rounded-md mt-3'
          disabled={updateConfig.isPending}
        >
          {updateConfig.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
