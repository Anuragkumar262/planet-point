import React, { useState } from 'react';
import { showNotification } from '../../../utils/notifications';

// Add the new prop updateProfileData
function Profile({ user, userStats, updateProfileData }) {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.studentName || '',
    school: user?.schoolCode || '',
    ecoInterests: 'Climate Action'
  });

  const handleUpdate = () => {
    // Call the function from the parent component (App.jsx)
    updateProfileData({
      studentName: profileData.name,
      schoolCode: profileData.school
    });
    setEditing(false);
    showNotification('Updated!', 'Profile updated successfully!', 'success');
  };

  const achievements = [
    { label: 'Total Points', value: userStats.points, icon: '⭐' },
    { label: 'Challenges Completed', value: userStats.completedChallenges, icon: '✅' },
    { label: 'Current Streak', value: `${userStats.streak} days`, icon: '🔥' },
    { label: 'Level', value: userStats.level, icon: '🎖️' },
    { label: 'Badges Earned', value: userStats.badges, icon: '🏅' },
    { label: 'Global Rank', value: `#${userStats.rank}`, icon: '🏆' }
  ];

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'section-header' },
      React.createElement('h2', null, 'Profile Settings'),
      React.createElement('p', null, 'Manage your account and view achievements.')
    ),
    React.createElement('div', { className: 'profile-grid' },
      React.createElement('div', { className: 'card' },
        React.createElement('div', { className: 'card__header' },
          React.createElement('h3', null, '👤 Personal Information'),
          React.createElement('button', {
            className: 'btn btn--outline btn--sm',
            onClick: () => setEditing(!editing)
          }, editing ? 'Cancel' : 'Edit')
        ),
        React.createElement('div', { className: 'card__body' },
          React.createElement('div', { className: 'profile-form' },
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Username'),
              React.createElement('input', {
                type: 'text',
                className: 'form-control',
                value: profileData.name,
                disabled: !editing,
                onChange: (e) => setProfileData(prev => ({ ...prev, name: e.target.value }))
              })
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Institution Code'),
              React.createElement('input', {
                type: 'number',
                className: 'form-control',
                value: profileData.school,
                disabled: !editing,
                onChange: (e) => setProfileData(prev => ({ ...prev, school: e.target.value }))
              })
            ),
            editing && React.createElement('button', {
              className: 'btn btn--primary',
              onClick: handleUpdate
            }, 'Save Changes')
          )
        )
      ),
      React.createElement('div', null,
        React.createElement('div', { className: 'card' },
          React.createElement('div', { className: 'card__header' },
            React.createElement('h3', null, '🏆 Achievement Summary')
          ),
          React.createElement('div', { className: 'card__body' },
            React.createElement('div', { className: 'achievement-stats' },
              achievements.map((achievement, index) =>
                React.createElement('div', { 
                  key: achievement.label,
                  className: 'achievement-item',
                  style: { animationDelay: `${index * 0.1}s` }
                },
                  React.createElement('span', { className: 'achievement-label' }, 
                    achievement.icon + ' ' + achievement.label
                  ),
                  React.createElement('span', { className: 'achievement-value' }, achievement.value)
                )
              )
            )
          )
        )
      )
    )
  );
}

export default Profile;