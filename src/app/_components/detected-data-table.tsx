"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function DetectedDataTable() {
  const buoyData = api.buoy.getById.useQuery('1');
  const data = api.buoyData.getByBuoy.useQuery(buoyData.data?.id.toString() ?? '0')

  return (
    <div className="flex flex-row w-full max-w">
        <div className='flex flex-col gap-y-6 bg-white w-full rounded-lg min-h-52 px-16 py-16 overflow-x-auto'>
            <table className='w-full text-[#333333] text-sm md:text-lg'>
                <thead className="bg-gray-300 border-b border-gray-300">
                    <tr>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">ID</th>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Buoy</th>   
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Microplastics Detected</th>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Image</th>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Date Taken</th>
                        <th className="py-3 px-6 text-left text-gray-600 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            data.data?.map(({ id, buoyId, detectedMicroplastics, imgUrl, createdAt, updatedAt }, index) => 
                                <tr className='border-b border-gray-300'>
                                    <td className="py-3 px-6 border-b border-gray-300">{id.toString()}</td>
                                    <td className="py-3 px-6 border-b border-gray-300">{buoyData.data?.name ?? ""}</td>
                                    <td className="py-3 px-6 border-b border-gray-300">{detectedMicroplastics}</td>
                                    <td className="py-3 px-6 border-b border-gray-300">{imgUrl}</td>
                                    <td className="py-3 px-6 border-b border-gray-300">{createdAt.toLocaleString()}</td>
                                    <a className='py-3 px-6 text-blue-800 font-semibold flex' href="#">View</a>
                                </tr>
                        )}
                </tbody>
            </table>
        </div>
    </div>
  );
}
