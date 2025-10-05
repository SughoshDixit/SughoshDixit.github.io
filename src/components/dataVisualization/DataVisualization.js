import React from 'react';
import './DataVisualization.scss';

const DataVisualization = ({ data, type = 'bar' }) => {
  const renderBarChart = () => {
    const maxValue = Math.max(...data.map(item => item.value));
    
    return (
      <div className="data-viz-container">
        <div className="chart-title">Skills & Expertise</div>
        <div className="bar-chart">
          {data.map((item, index) => (
            <div key={index} className="bar-item">
              <div className="bar-label">
                <span className="bar-icon">{item.icon}</span>
                <span className="bar-name">{item.name}</span>
                <span className="bar-percentage">{item.value}%</span>
              </div>
              <div className="bar-container">
                <div 
                  className="bar-fill" 
                  style={{ 
                    width: `${(item.value / maxValue) * 100}%`,
                    background: item.color || '#007ACC'
                  }}
                >
                  <div className="bar-glow"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPieChart = () => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercentage = 0;

    return (
      <div className="data-viz-container">
        <div className="chart-title">Identity Distribution</div>
        <div className="pie-chart">
          <svg viewBox="0 0 200 200" className="pie-svg">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const startAngle = cumulativePercentage * 3.6;
              const endAngle = (cumulativePercentage + percentage) * 3.6;
              
              const x1 = 100 + 80 * Math.cos((startAngle - 90) * Math.PI / 180);
              const y1 = 100 + 80 * Math.sin((startAngle - 90) * Math.PI / 180);
              const x2 = 100 + 80 * Math.cos((endAngle - 90) * Math.PI / 180);
              const y2 = 100 + 80 * Math.sin((endAngle - 90) * Math.PI / 180);
              
              const largeArcFlag = percentage > 50 ? 1 : 0;
              const pathData = [
                `M 100 100`,
                `L ${x1} ${y1}`,
                `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                `Z`
              ].join(' ');
              
              cumulativePercentage += percentage;
              
              return (
                <path
                  key={index}
                  d={pathData}
                  fill={item.color}
                  stroke="white"
                  strokeWidth="2"
                  className="pie-slice"
                />
              );
            })}
          </svg>
          <div className="pie-center">
            <div className="pie-center-icon">📊</div>
            <div className="pie-center-text">100%</div>
          </div>
        </div>
        <div className="pie-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <div className="legend-color" style={{ background: item.color }}></div>
              <span className="legend-icon">{item.icon}</span>
              <span className="legend-name">{item.name}</span>
              <span className="legend-value">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderRadarChart = () => {
    const maxValue = Math.max(...data.map(item => item.value));
    const centerX = 150;
    const centerY = 150;
    const radius = 100;
    
    return (
      <div className="data-viz-container">
        <div className="chart-title">Multi-Dimensional Profile</div>
        <div className="radar-chart">
          <svg viewBox="0 0 300 300" className="radar-svg">
            {/* Grid circles */}
            {[1, 2, 3, 4, 5].map(level => (
              <circle
                key={level}
                cx={centerX}
                cy={centerY}
                r={(radius / 5) * level}
                fill="none"
                stroke="#e9ecef"
                strokeWidth="1"
              />
            ))}
            
            {/* Grid lines */}
            {data.map((_, index) => {
              const angle = (index * 360) / data.length;
              const x = centerX + radius * Math.cos((angle - 90) * Math.PI / 180);
              const y = centerY + radius * Math.sin((angle - 90) * Math.PI / 180);
              
              return (
                <line
                  key={index}
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke="#e9ecef"
                  strokeWidth="1"
                />
              );
            })}
            
            {/* Data polygon */}
            <polygon
              points={data.map((item, index) => {
                const angle = (index * 360) / data.length;
                const valueRadius = (radius / maxValue) * item.value;
                const x = centerX + valueRadius * Math.cos((angle - 90) * Math.PI / 180);
                const y = centerY + valueRadius * Math.sin((angle - 90) * Math.PI / 180);
                return `${x},${y}`;
              }).join(' ')}
              fill="rgba(85, 25, 139, 0.2)"
              stroke="#55198b"
              strokeWidth="2"
              className="radar-polygon"
            />
            
            {/* Data points */}
            {data.map((item, index) => {
              const angle = (index * 360) / data.length;
              const valueRadius = (radius / maxValue) * item.value;
              const x = centerX + valueRadius * Math.cos((angle - 90) * Math.PI / 180);
              const y = centerY + valueRadius * Math.sin((angle - 90) * Math.PI / 180);
              
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill={item.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={x}
                    y={y - 10}
                    textAnchor="middle"
                    className="radar-value"
                    fontSize="12"
                    fill="#333"
                  >
                    {item.value}%
                  </text>
                </g>
              );
            })}
            
            {/* Labels */}
            {data.map((item, index) => {
              const angle = (index * 360) / data.length;
              const labelRadius = radius + 30;
              const x = centerX + labelRadius * Math.cos((angle - 90) * Math.PI / 180);
              const y = centerY + labelRadius * Math.sin((angle - 90) * Math.PI / 180);
              
              return (
                <g key={index}>
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    className="radar-label"
                    fontSize="14"
                    fill="#333"
                  >
                    {item.icon} {item.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    );
  };

  switch (type) {
    case 'pie':
      return renderPieChart();
    case 'radar':
      return renderRadarChart();
    default:
      return renderBarChart();
  }
};

export default DataVisualization;
