"use client";

import { useState, useRef } from "react";

import { api } from "~/trpc/react";
import { useReactToPrint } from "react-to-print";

export function DetectedDataTable() {

    const componentPDF = useRef();

    const buoyData = api.buoy.getById.useQuery('1');
    const data = api.buoyData.getByBuoy.useQuery(buoyData.data?.id.toString() ?? '0')

    const rows = data.data?.map(({ id, buoyId, detectedMicroplastics, imgUrl, locationTaken, createdAt, updatedAt }, index) => 
        <tr className='border-b border-gray-300' key={index}>
            <td className="py-3 px-6 border-b border-gray-300">{id.toString()}</td>
            <td className="py-3 px-6 border-b border-gray-300">{buoyData.data?.name ?? ""}</td>
            <td className="py-3 px-6 border-b border-gray-300">{locationTaken}</td>
            <td className="py-3 px-6 border-b border-gray-300">{detectedMicroplastics}</td>
            <td className="py-3 px-6 border-b border-gray-300">{createdAt.toLocaleString()}</td>
            <a className='py-3 px-6 text-blue-800 font-semibold flex' href={imgUrl}>View</a>
        </tr>);

    const generatePDF = useReactToPrint({
        content: ()=>componentPDF.current ?? null,
        documentTitle: "Maguayan Detection Logs"
    });

    return (
        <div className="flex flex-row w-full max-w">
            <div className='flex flex-col gap-y-6 bg-white w-full rounded-lg min-h-52 px-16 py-16 overflow-x-auto'>
                <div ref={componentPDF} style={{width: '100%'}}>
                    <table className='w-full text-[#333333] text-sm md:text-lg'>
                        <thead className="bg-gray-300 border-b border-gray-300">
                            <tr>
                                <th className="py-3 px-6 text-left text-gray-600 font-semibold">ID</th>
                                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Buoy</th>   
                                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Location Taken</th>
                                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Microplastics Detected</th>
                                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Date Taken</th>
                                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                                { rows }
                        </tbody>
                    </table> 
                </div>
                <button className="bg-[#333333] text-white px-4 py-1 rounded-lg hover:bg-[#C9C794] hover:text-[#333333] font-semibold" onClick={ generatePDF }>Export Table to PDF</button>
            </div>
        </div>
    );
}
