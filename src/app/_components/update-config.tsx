"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function UpdateConfig() {
  const buoyId = api.config.getById.useQuery('1').data?.id;

  const utils = api.useUtils();
  
  const [interval, setInterval] = useState("");

  const updateConfig = api.config.update.useMutation({
    onSuccess: async () => {
      await utils.config.invalidate();
      setInterval("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      <form 
        className='flex flex-col gap-y-6 bg-white w-full rounded-lg min-h-52 px-16 py-16'
        onSubmit={(e) => {
          e.preventDefault();
          updateConfig.mutate({ id : buoyId?.toString() || "0", interval : interval });
        }}
      >
        <div className='flex flex-col text-lg text-black w-full'>
            <label htmlFor="interval" className='font-bold mb-3'>Interval</label>
            <select 
                name="interval" 
                id="interval" 
                onChange={(e) => setInterval(e.target.value)}
                className='border bg-gray-300 rounded-sm py-2 px-2 text-sm'>

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
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={updateConfig.isPending}
        >
          {updateConfig.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
