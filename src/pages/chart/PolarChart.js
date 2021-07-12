import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'none',
        },
        title: {
            display: true,
            text: "Github Commit Polar Chart",
        },
    },
};

const Polar = (props) => (
    <div className="modal">
        <div className="modal-body">
            <PolarArea data={props.data} options={options} />
        </div>
    </div>
);

export default Polar;
