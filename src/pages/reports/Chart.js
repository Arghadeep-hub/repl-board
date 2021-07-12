import React from 'react'
import Sidebar from '../../components/Sidebar';
import Pie from "../chart/PieChart"
import Polar from '../chart/PolarChart';
import Radar from '../chart/RadarChart'
import Doughunt from '../chart/DoughuntChart'
import './Reports.css'
import { useAuth } from '../../contexts/AuthContext';
import { Typography } from '@material-ui/core';

const PieChart = () => {
    const {Date, Number, provider} = useAuth();

    const data = {
        labels: Date,
        datasets: [
            {
                data: Number,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const Radardata = {
        labels:Date,
        datasets: [
            {
                label: 'Commits',
                data: Number,
                backgroundColor: 'rgba(255, 99, 132, 0.3)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="report_body">
            <Sidebar />
            <div className='reports'>
                {
                    provider === 'github.com' ?
                        (<div className="card_reports">
                            <Pie data={data} />
                            <Polar data={data} />
                            <Radar data={Radardata} />
                            <Doughunt data={data} />
                        </div>) :
                        (<div className="modal">
                            <Typography color="primary" variant="h5" align="center">
                                Notification
                            </Typography>
                            <Typography color="inherit" variant="h6" className="modal-header">
                                Hello user, We find that this account is not connected with Github!!! So, you can't able to access the actual graph. To use all features fill the form in the update section.
                            </Typography>
                        </div>)
                }
            </div>
        </div>
    );
};
export default PieChart