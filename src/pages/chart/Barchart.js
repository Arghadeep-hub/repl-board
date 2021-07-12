import React from 'react';
import { Bar } from 'react-chartjs-2';


const options = {
    indexAxis: 'x',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'none',
        },
        title: {
            display: true,
            text: "Github Commit Bar Chart",
        },
    },
};

const BarHorizontal = (props) => (
    <div className="modal">
        <div className="modal-body">
            <Bar data={props.data} options={options} />
        </div>
    </div>
);

export default BarHorizontal;
