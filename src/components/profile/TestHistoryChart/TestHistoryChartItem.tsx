import { TestHistoryChartItemPropsType } from '../../../types/profileComponents';
import './TestHistoryChartItem.scss';

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

export default TestHistoryChartItem;
