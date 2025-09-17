import React from 'react';

function AdminSidebar({ currentSection, onSectionChange, user, onLogout, isOpen, onClose }) {
  const menuItems = [
    { id: 'adminOverview', icon: '📊', label: 'Analytics' },
    { id: 'studentReview', icon: '✅', label: 'Review Submissions' }
  ];

  return React.createElement('nav', { className: `sidebar ${isOpen ? 'open' : ''}` },
    React.createElement('div', { className: 'sidebar-header' },
      React.createElement('button', { className: 'close-btn', onClick: onClose }, '×'),
      //React.createElement('h2', null, '🌱 PlanetPoint Admin'),
      React.createElement('div', { className: 'user-info' },
        React.createElement('div', { className: 'user-avatar' }, '👩‍💼'),
        React.createElement('div', { className: 'user-details' },
          React.createElement('div', { className: 'user-name' }, user?.adminName || 'Admin'),
          React.createElement('div', { className: 'user-school' }, user?.institution || 'Institution')
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
            onClose(); // Automatically closes the sidebar on item click
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

export default AdminSidebar;