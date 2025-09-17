import React, { useEffect, useRef } from 'react';
import { applicationData } from '../../../data/applicationData';
import { animateValue } from '../../../utils/animate';
import { showNotification } from '../../../utils/notifications';

function Overview({ userStats, onQuickAction }) {
      const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((el, index) => {
      if (el) {
        const values = [userStats.points, userStats.level, userStats.badges, userStats.rank];
        setTimeout(() => {
          animateValue(el, 0, values[index], 1000);
        }, index * 200);
      }
    });
  }, [userStats]);

  const quickActions = [
    { id: 'quiz', label: '📝 Take Quiz' },
    { id: 'action', label: '📷 Log Action' },
    { id: 'share', label: '🎉 Share Achievement' }
  ];

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'section-header' },
      React.createElement('h2', null, 'Dashboard Overview'),
      React.createElement('p', null, "Welcome back! Here's your environmental impact summary.")
    ),
    React.createElement('div', { className: 'stats-grid' },
      React.createElement('div', { 
        className: 'stat-card', 
        onClick: () => showNotification('Points', 'Keep earning points by completing challenges!', 'info') 
      },
        React.createElement('div', { 
          className: 'stat-value animated',
          ref: el => statsRef.current[0] = el
        }, '0'),
        React.createElement('div', { className: 'stat-label' }, 'Total Points'),
        React.createElement('div', { className: 'stat-icon' }, '⭐')
      ),
      React.createElement('div', { 
        className: 'stat-card', 
        onClick: () => showNotification('Level', 'Great progress! Keep learning to level up!', 'info') 
      },
        React.createElement('div', { 
          className: 'stat-value animated',
          ref: el => statsRef.current[1] = el
        }, '0'),
        React.createElement('div', { className: 'stat-label' }, 'Current Level'),
        React.createElement('div', { className: 'stat-icon' }, '🎖️')
      ),
      React.createElement('div', { 
        className: 'stat-card', 
        onClick: () => showNotification('Badges', 'Amazing collection! Unlock more by completing challenges!', 'info') 
      },
        React.createElement('div', { 
          className: 'stat-value animated',
          ref: el => statsRef.current[2] = el
        }, '0'),
        React.createElement('div', { className: 'stat-label' }, 'Badges Earned'),
        React.createElement('div', { className: 'stat-icon' }, '🏅')
      ),
      React.createElement('div', { 
        className: 'stat-card', 
        onClick: () => showNotification('Rank', 'You\'re doing great! Keep up the eco-efforts!', 'info') 
      },
        React.createElement('div', { 
          className: 'stat-value animated',
          ref: el => statsRef.current[3] = el
        }, '#0'),
        React.createElement('div', { className: 'stat-label' }, 'Global Rank'),
        React.createElement('div', { className: 'stat-icon' }, '🏆')
      )
    ),
    React.createElement('div', { className: 'overview-grid' },
      React.createElement('div', { className: 'card' },
        React.createElement('div', { className: 'card__header' },
          React.createElement('h3', null, '🏅 Recent Badges')
        ),
        React.createElement('div', { className: 'card__body' },
          React.createElement('div', { className: 'badges-grid' },
            applicationData.badges.slice(0, 4).map((badge, index) =>
              React.createElement('div', { 
                key: badge.id, 
                className: 'badge-item earned',
                style: { animationDelay: `${index * 0.1}s` }
              },
                React.createElement('div', { className: 'badge-icon' }, badge.icon),
                React.createElement('div', { className: 'badge-name' }, badge.name),
                React.createElement('div', { className: `badge-rarity ${badge.rarity}` }, badge.rarity)
              )
            )
          )
        )
      ),
      React.createElement('div', { className: 'card' },
        React.createElement('div', { className: 'card__header' },
          React.createElement('h3', null, '⚡ Quick Actions')
        ),
        React.createElement('div', { className: 'card__body' },
          React.createElement('div', { className: 'quick-actions' },
            quickActions.map((action, index) =>
              React.createElement('button', { 
                key: action.id,
                className: 'btn btn--outline btn--sm',
                onClick: () => onQuickAction && onQuickAction(action.id),
                style: { animationDelay: `${index * 0.1}s` }
              }, action.label)
            )
          )
        )
      )
    )
  );
  // ... Paste the entire Overview component code here
}

export default Overview;