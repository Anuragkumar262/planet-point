import React, { useEffect, useRef } from 'react';
import { applicationData } from '../../../data/applicationData';
import { Chart, registerables } from 'chart.js';

// 1. Import the missing chartColors constant
import { chartColors } from '../../../utils/constants';

// Register Chart.js components
Chart.register(...registerables);

function Progress({ userStats }) {
  const chartRefs = {
    points: useRef(null),
    category: useRef(null),
    sdg: useRef(null),
    performance: useRef(null)
  };

  // 2. Create a ref to hold all the active chart instances
  const chartInstances = useRef({});

  useEffect(() => {
    const createCharts = () => {
      // Clean up any existing charts before creating new ones
      Object.values(chartInstances.current).forEach(chart => chart.destroy());

      // Points Progress Chart
      if (chartRefs.points.current) {
        const ctx = chartRefs.points.current.getContext('2d');
        chartInstances.current.points = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
            datasets: [{
              label: 'Points Earned',
              data: [120, 250, 380, 520, 680, 850],
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
            plugins: { legend: { display: false } }
          }
        });
      }

      // Category Chart
      if (chartRefs.category.current) {
        const ctx = chartRefs.category.current.getContext('2d');
        chartInstances.current.category = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ["Water", "Climate", "Forest", "Ocean", "Energy", "Waste"],
            datasets: [{
              data: [25, 30, 20, 15, 20, 18],
              backgroundColor: chartColors.slice(0, 6)
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1500 }
          }
        });
      }

      // SDG Chart
      if (chartRefs.sdg.current) {
        const ctx = chartRefs.sdg.current.getContext('2d');
        chartInstances.current.sdg = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["SDG 6", "SDG 7", "SDG 12", "SDG 13", "SDG 14", "SDG 15"],
            datasets: [{
              label: 'Impact Score',
              data: [65, 45, 55, 80, 40, 70],
              backgroundColor: chartColors.slice(0, 6)
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1500 },
            plugins: { legend: { display: false } }
          }
        });
      }

      // Performance Radar Chart
      if (chartRefs.performance.current) {
        const ctx = chartRefs.performance.current.getContext('2d');
        chartInstances.current.performance = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ["Completion Rate", "Average Score", "Engagement", "Consistency", "Leadership"],
            datasets: [{
              label: 'Performance',
              data: [88, 92, 85, 78, 65],
              borderColor: chartColors[0],
              backgroundColor: chartColors[0] + '20'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 1500 },
            plugins: { legend: { display: false } }
          }
        });
      }
    };

    // Use a small timeout to ensure canvas elements are ready
    const timeout = setTimeout(createCharts, 100);

    // 3. Return the cleanup function to destroy all charts on unmount
    return () => {
      clearTimeout(timeout);
      Object.values(chartInstances.current).forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []); // Empty dependency array ensures this runs only once

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'section-header' },
      React.createElement('h2', null, 'My Progress'),
      React.createElement('p', null, 'Track your environmental impact and learning journey.')
    ),
    React.createElement('div', { className: 'progress-grid' },
      React.createElement('div', { className: 'chart-wrapper' },
        React.createElement('h3', { className: 'chart-title' }, '📈 Points Progress'),
        React.createElement('div', { className: 'chart-container' },
          React.createElement('canvas', { ref: chartRefs.points })
        )
      ),
      React.createElement('div', { className: 'chart-wrapper' },
        React.createElement('h3', { className: 'chart-title' }, '🎯 Challenge Categories'),
        React.createElement('div', { className: 'chart-container' },
          React.createElement('canvas', { ref: chartRefs.category })
        )
      ),
      React.createElement('div', { className: 'chart-wrapper' },
        React.createElement('h3', { className: 'chart-title' }, '🌍 SDG Impact'),
        React.createElement('div', { className: 'chart-container' },
          React.createElement('canvas', { ref: chartRefs.sdg })
        )
      ),
      React.createElement('div', { className: 'chart-wrapper' },
        React.createElement('h3', { className: 'chart-title' }, '⚡ Performance Metrics'),
        React.createElement('div', { className: 'chart-container' },
          React.createElement('canvas', { ref: chartRefs.performance })
        )
      )
    ),
    React.createElement('div', { className: 'badges-section', style: { marginTop: '32px' } },
      React.createElement('h3', { style: { textAlign: 'center', marginBottom: '24px' } }, '🏅 Badge Collection'),
      React.createElement('div', { className: 'badges-grid' },
        applicationData.badges.map((badge, index) =>
          React.createElement('div', { 
            key: badge.id, 
            className: 'badge-item earned',
            style: { animationDelay: `${index * 0.1}s` }
          },
            React.createElement('div', { className: 'badge-icon' }, badge.icon),
            React.createElement('div', { className: 'badge-name' }, badge.name),
            React.createElement('div', { className: 'badge-description' }, badge.description),
            React.createElement('div', { className: `badge-rarity ${badge.rarity}` }, badge.rarity)
          )
        )
      )
    )
  );
}

export default Progress;