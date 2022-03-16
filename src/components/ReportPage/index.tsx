import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import './style.less';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Non-Binary', 'Female', 'Male'],
    datasets: [
      {
        label: '# of Votes',
        data: [1.7, 45, 53.3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const ReportPage: React.FC = () => {
    return (
        <div className="report-page">
            <h2 className="report-page-title">Data Report</h2>
            <h3 className="report-page-subtitle">Example Subtitle (Like a question)</h3>
            <p className="report-page-paragraph">Example Paragraph</p>
            <br />
            <br />
            <br />
            <h3 className="report-page-subtitle">How do you describe yourself?* (60 responses)</h3>
            <div style={{width: "200px", height: "200px"}} >
                <Pie data={data} />
            </div>
        </div>
    );
}

export default ReportPage;
