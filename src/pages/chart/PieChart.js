import React from 'react';
import { Pie } from 'react-chartjs-2';



const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'none',
        },
        title: {
            display: true,
            text: "Github Commit Pie Chart",
        },
    },
};

const PieChart = (props) => (
    <div className="modal">
        <div className="modal-body">
            <Pie data={props.data} options={options} />
        </div>
    </div>
);

export default PieChart;
