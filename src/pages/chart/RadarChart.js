import React from 'react';
import { Radar } from 'react-chartjs-2';


const options = {
    scale: {
        ticks: { beginAtZero: true },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'none',
        },
        title: {
            display: true,
            text: "Github Commit Radar Chart",
        },
},
};

const RadarChart = (props) => (
    <div className="modal">
        <div className="modal-body">
            <Radar data={props.data} options={options} />
        </div>
    </div>
);

export default RadarChart;
