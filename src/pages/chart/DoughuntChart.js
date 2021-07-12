import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'none',
        },
        title: {
            display: true,
            text: "Github Commit Doughunt Chart",
        },
    },
};

const DoughnutChart = (props) => (
    <div className="modal">
        <Doughnut data={props.data} options={options} />
    </div>
);

export default DoughnutChart;
