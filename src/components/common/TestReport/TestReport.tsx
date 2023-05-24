import { TestHistoryChartItemPropsType } from '../../../types/profileComponents';
import logoImage from '../../../assets/images/logo.png';
import testReportImage from '../../../assets/images/result.png';
import './TestReport.scss';

const chartData = [
    {
        title: 'Cataract',
        percent: 70,
        arrow: 'right',
        color: '#FF0000',
    },
    {
        title: 'Stargardts Disease',
        percent: 10,
        arrow: 'right',
        color: '#03CE7D',
    },
    {
        title: 'Macular Degenration',
        percent: 30,
        arrow: 'left',
        color: '#FFC300',
    },
    {
        title: 'Glaucoma',
        percent: 90,
        arrow: 'right',
        color: '#FF0000',
    },
];

const TestHistoryChartItem = ({ title, percent, color, arrow }: TestHistoryChartItemPropsType) => {
    return (
        <div className="test-history-chart-item">
            <div className="title-wrapper">
                <span>{title}</span>
                <span style={{ color: color }}>
                    {arrow === 'left' ? '<' : '>'}
                    {percent}%
                </span>
            </div>
            <div className="bar-wrapper">
                <div className="main-bar" style={{ width: `${percent}%`, backgroundColor: color }} />
            </div>
        </div>
    );
};

const TestReport = () => {
    return (
        <div className="test-result">
            <img className="logo-image" src={logoImage} alt="" />
            <h1>Encocare AI Generated Results</h1>
            <p>Thank you for your patience! We've sent a copy of these results on your email address.</p>

            <div className="chart-wrapper">
                <div className="chart-title">
                    <h2>Probability Chart</h2>
                </div>

                <div className="chart-content">
                    {chartData.map((item) => (
                        <div className="chart-content-col" key={item.title}>
                            <TestHistoryChartItem
                                title={item.title}
                                arrow={item.arrow}
                                color={item.color}
                                percent={item.percent}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <img className="result-image" src={testReportImage} alt="" />
        </div>
    );
};

export default TestReport;
