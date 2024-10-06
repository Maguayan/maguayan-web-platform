/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */
'use client'

import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import { api } from '~/trpc/react';

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineGraph = () => {

    const buoy = api.buoyData.getById.useQuery('1');
    const cur_date = new Date();
    const month_date = new Date(cur_date.getFullYear(), cur_date.getMonth(), 1);
    const id = buoy.data?.id.toString() ?? '0';
    const data = api.buoyData.getThisMonth.useQuery({ id : id, date : month_date });

    const labels_data = data.data?.map(({createdAt}, index) => 
        createdAt.toLocaleString('en-PH', { timeZone : 'Asia/Manila' }),
    );

    const detect_data = data.data?.map(({detectedMicroplastics}, index) => 
        detectedMicroplastics,
    );

    const lineChartData = {
            labels: labels_data,

            datasets: [
                {
                    label: "Microplastics Detected",
                    data: detect_data,
                    borderColor: "Yellow",
                    backgroundColor: "#333333",
                    pointRadius: 7
                }
            ],
        }

    const options : any = {
        animation: true,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 18,
                        family: "Arial",
                        weight: "bold"
                    }
                }
            }
        }
        

    };

    return <div>
                <Line  options={options} data={lineChartData} />;
           </div>
};
