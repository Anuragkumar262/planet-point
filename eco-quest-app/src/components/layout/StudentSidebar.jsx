import React from 'react';

function StudentSidebar({ currentSection, onSectionChange, user, onLogout, isOpen, onClose }) {
  const menuItems = [
    { id: 'overview', icon: '🏠', label: 'Dashboard' },
    { id: 'challenges', icon: '🎯', label: 'Challenges' },
    { id: 'progress', icon: '📈', label: 'My Progress' },
    { id: 'leaderboard', icon: '🏆', label: 'Leaderboard' },
    { id: 'community', icon: '💬', label: 'Community' },
    { id: 'profile', icon: '👤', label: 'Profile' }
  ];

  return React.createElement('nav', { className: `sidebar ${isOpen ? 'open' : ''}` },
    React.createElement('div', { className: 'sidebar-header' },
      React.createElement('button', { className: 'close-btn', onClick: onClose }, '×'),
      //React.createElement('h2', null, '🌱 PlanetPoint'),
      React.createElement('div', { className: 'user-info' },
        React.createElement('div', { className: 'user-avatar' }, '👤'),
        React.createElement('div', { className: 'user-details' },
          React.createElement('div', { className: 'user-name' }, user.studentName || 'Student'),
          React.createElement('div', { className: 'user-school' }, user.schoolCode || 'School')
        )
      )
    ),
    React.createElement('div', { className: 'sidebar-menu' },
      menuItems.map((item, index) =>
        React.createElement('div', {
          key: item.id,
          className: `menu-item ${currentSection === item.id ? 'active' : ''}`,
          onClick: () => {
            onSectionChange(item.id);
            onClose(); // Add this to close the sidebar after an item is clicked
          },
          style: { '--i': index }
        },
          React.createElement('span', { className: 'menu-icon' }, item.icon),
          React.createElement('span', null, item.label)
        )
      )
    ),
    React.createElement('div', { className: 'sidebar-footer' },
      React.createElement('button', {
        className: 'btn btn--secondary btn--sm',
        onClick: onLogout
      }, '🚪 Logout')
    )
  );
}

export default StudentSidebar;