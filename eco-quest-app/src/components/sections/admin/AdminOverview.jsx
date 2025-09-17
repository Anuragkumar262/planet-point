import React, { useEffect, useRef } from 'react';
import { applicationData } from '../../../data/applicationData';
import { chartColors } from '../../../utils/constants';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function AdminOverview() {
  const chartRef = useRef(null);
  // 1. Create a ref to store the chart instance itself
  const chartInstance = useRef(null);

  useEffect(() => {
    // This check is good practice, but the cleanup function is the main fix
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
      
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      // 2. Store the new chart instance in our ref
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{
            label: 'Participation Rate',
            data: [85, 90, 87, 92, 95, 78, 82],
            borderColor: chartColors[0],
            backgroundColor: chartColors[0] + '20',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: { duration: 1500 },
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, max: 100 }
          }
        }
      });
    }

    // 3. THIS IS THE CLEANUP FUNCTION 👇
    // It runs when the component is about to unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // The empty array means this effect runs only on mount and unmount

  const stats = [
    { label: 'Active Students', value: applicationData.schoolStats.activeStudents, icon: '👨‍🎓' },
    { label: 'Challenges Completed', value: applicationData.schoolStats.challengesCompleted, icon: '✅' },
    { label: 'Participation Rate', value: `${applicationData.schoolStats.participationRate}%`, icon: '📈' },
    { label: 'Trees Planted', value: applicationData.schoolStats.treesPlanted, icon: '🌳' }
  ];

  // The rest of your component's JSX remains the same
  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'section-header' },
      React.createElement('h2', null, 'School Analytics Dashboard'),
      React.createElement('p', null, 'Monitor student engagement and environmental impact.')
    ),
    React.createElement('div', { className: 'stats-grid' },
      stats.map((stat, index) =>
        React.createElement('div', {
          key: stat.label,
          className: 'stat-card',
          style: { animationDelay: `${index * 0.1}s` }
        },
          React.createElement('div', { className: 'stat-value animated' }, stat.value),
          React.createElement('div', { className: 'stat-label' }, stat.label),
          React.createElement('div', { className: 'stat-icon' }, stat.icon)
        )
      )
    ),
    React.createElement('div', { className: 'admin-charts-grid' },
      React.createElement('div', { className: 'chart-wrapper' },
        React.createElement('h3', { className: 'chart-title' }, '📊 Weekly Participation Trends'),
        React.createElement('div', { className: 'chart-container' },
          React.createElement('canvas', { ref: chartRef })
        )
      ),
      React.createElement('div', { className: 'card' },
        React.createElement('div', { className: 'card__header' },
          React.createElement('h3', null, '🌟 Top Performers')
        ),
        React.createElement('div', { className: 'card__body' },
          React.createElement('div', { className: 'performer-list' },
            applicationData.students.slice(0, 5).map((student, index) =>
              React.createElement('div', {
                key: student.id,
                className: 'performer-item',
                style: { animationDelay: `${index * 0.1}s` }
              },
                React.createElement('div', { className: 'performer-rank' }, `#${student.rank}`),
                React.createElement('div', { className: 'performer-name' }, student.name),
                React.createElement('div', { className: 'performer-points' }, `${student.points} pts`)
              )
            )
          )
        )
      )
    )
  );
}

export default AdminOverview;