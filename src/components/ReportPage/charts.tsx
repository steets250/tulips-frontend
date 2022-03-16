import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, BarElement, LinearScale, Title, ChartOptions } from 'chart.js';
import React from 'react';
import { Bar, Doughnut, Pie, Chart } from 'react-chartjs-2';
import { departmentBreakdownData, genderBreakdownData, groupSettingsRating, hispanicOrLatinoBreakdownData, racesBreakdownData } from "./data";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement, 
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels,
    Title,
    Tooltip, 
    Legend);

ChartJS.defaults.set("plugins.datalabels", {
    color: '#000000'
});

// Stack Overflow: https://stackoverflow.com/questions/53068562/add-text-inside-the-doughnut-chart-of-the-react-chartjs-2-box-to-react
const generateDoughnutPlugins = (averageValue: number) => {
    return [{
        id: 'some-id',
        beforeDraw: function(chart) {
            const width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
            ctx.restore();
            const fontSize = (height / 120).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            const text = `${averageValue}`,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        } 
    }]
};

export const GenderBreakdown = () => <Pie data={genderBreakdownData} />

export const HispanicBreakdown = () => <Pie data={hispanicOrLatinoBreakdownData} />

export const RaceBreakdown = () => <Bar data={racesBreakdownData} options={{
    indexAxis: 'y' as const,
    responsive: true,
    elements: {
        bar: {
          borderWidth: 2,
        },
      },
    plugins: {
        legend: {
            position: 'right' as const,
        },
    },
}}/> 

export const DepartmentBreakdown = () => <Doughnut data={departmentBreakdownData} />

export const GroupSettingsRating = () => <Doughnut data={groupSettingsRating} plugins={generateDoughnutPlugins(2.98)}/>