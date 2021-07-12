import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'none',
        },
        title: {
            display: true,
            text: "Github Commit Line Chart",
        },
    },
};

const LineChart = (props) => (
    <div className="modal">
        <Line data={props.data} options={options} />
    </div>
);

export default LineChart;
