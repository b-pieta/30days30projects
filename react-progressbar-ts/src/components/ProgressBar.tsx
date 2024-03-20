import React from 'react';
import './ProgressBar.css'; 
interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const fillStyle: React.CSSProperties = {
    width: `${percentage}%`
  };

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={fillStyle}></div>
      <div className="progress-bar-label">{percentage}%</div>
    </div>
  );
};

export default ProgressBar;
