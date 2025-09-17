import React, { useState } from 'react';
import { applicationData } from '../../../data/applicationData';

function Leaderboard({ currentUser }) {
  const [activeTab, setActiveTab] = useState('individual');

  const tabs = [
    { id: 'individual', label: '👤 Individual' },
    { id: 'team', label: '👥 Team' },
    { id: 'school', label: '🏫 School' }
  ];

  const getRankBadgeClass = (rank) => {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return 'rank-other';
  };

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'section-header' },
      React.createElement('h2', null, 'Leaderboard'),
      React.createElement('p', null, 'See how you rank among other eco-warriors.')
    ),
    React.createElement('div', { className: 'leaderboard-tabs' },
      tabs.map(tab =>
        React.createElement('button', {
          key: tab.id,
          className: `tab-btn ${activeTab === tab.id ? 'active' : ''}`,
          onClick: () => setActiveTab(tab.id)
        }, tab.label)
      )
    ),
    React.createElement('div', { className: 'leaderboard-table' },
      React.createElement('div', { className: 'table-header' },
        React.createElement('div', null, 'Rank'),
        React.createElement('div', null, 'Player'),
        React.createElement('div', null, 'Points'),
        React.createElement('div', null, 'Badges'),
        React.createElement('div', null, 'Level'),
        React.createElement('div', null, 'Streak')
      ),
      React.createElement('div', { className: 'table-body' },
        applicationData.students.map((student, index) =>
          React.createElement('div', { 
            key: student.id, 
            className: `table-row ${student.name === currentUser?.studentName ? 'current-user' : ''}`,
            style: { '--i': index }
          },
            React.createElement('div', null,
              React.createElement('div', { className: `rank-badge ${getRankBadgeClass(student.rank)}` }, 
                student.rank
              )
            ),
            React.createElement('div', { className: 'player-info' },
              React.createElement('div', { className: 'player-avatar' }, student.profileImage),
              React.createElement('div', null,
                React.createElement('div', { className: 'player-name' }, student.name),
                React.createElement('div', { className: 'player-school' }, student.school)
              )
            ),
            React.createElement('div', { className: 'points-display' }, student.points.toLocaleString()),
            React.createElement('div', null, student.badges),
            React.createElement('div', null, student.level),
            React.createElement('div', null, `${student.streak} days`)
          )
        )
      )
    )
  );
}

export default Leaderboard;