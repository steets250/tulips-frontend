import React from "react";
import * as Charts from './charts';
import './style.less';

const Spacer = () => <div>
    <br />
    <br />
    <br />
</div>

const ReportPage: React.FC = () => {
    return (
        <div className="report-page">
            <h2 className="report-page-title">Data Report</h2>
            <h3 className="report-page-subtitle">Example Subtitle (Like a question)</h3>
            <p className="report-page-paragraph">Example Paragraph</p>
            
            <Spacer />
            <h3 className="report-page-subtitle">How do you describe yourself? (60 responses)</h3>
            <div style={{width: "200px", height: "200px"}} >
                <Charts.GenderBreakdown />
            </div>

            <Spacer />
            <h3 className="report-page-subtitle">Which of these races do you identify with? (56 responses)</h3>
            <div style={{width: "100%", height: "500px", display: 'flex', flexDirection: 'row'}}>
                <Charts.RaceBreakdown />
                <Charts.HispanicBreakdown />
            </div>

            <Spacer />
            <h3 className="report-page-subtitle">Which department do you take most of your classes in?</h3>
            <div>
                <Charts.DepartmentBreakdown />
            </div>

            <Spacer />
            <h3 className="report-page-subtitle">More doughnuts!</h3>
            <div>
                <Charts.GroupSettingsRating />
            </div>
        </div>
    );
}

export default ReportPage;
