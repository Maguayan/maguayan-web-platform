'use client';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DateFilter() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(type:string, date:string) {
        if (type == 'From') {
            params.set('dateFrom', date)
        } 
        else if (type == 'To') {
            params.set('dateTo', date)
        } 

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="grid grid-cols-3 rounded-xl bg-white w-full p-2">
            <div className="py-3 align-middle text-center text-2xl font-bold">
                Filter Data
            </div>
            <div className="grid grid-cols-1">
                <label htmlFor="dateFrom"> Date From </label>
                <input className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " 
                       placeholder="Date From"
                       id="dateFrom" 
                       type="date"
                       value={params.get('dateFrom') ?? 0}
                       onChange={(e) => {
                            handleSearch('From', e.target.value);
                           }}
                       />
            </div>
            <div className="grid grid-cols-1">
                <label htmlFor="dateTo"> Date To </label>
                <input className="max-w-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " 
                       placeholder="Date To"
                       id="dateTo" 
                       type="date" 
                       value={params.get('dateTo') ?? 0}
                       onChange={(e) => {
                            handleSearch('To', e.target.value);
                           }}
                       />
            </div>
        </div>
    );
}


