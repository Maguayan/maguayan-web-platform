/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicir-any */
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

import { lineChartData } from './graphData';

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

    return <Line  options={options} data={lineChartData} />;
};
