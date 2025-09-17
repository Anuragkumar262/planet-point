import React from 'react';

function PointsModal({ show, points, message, onClose }) {
  if (!show) {
    return null;
  }

  return React.createElement('div', {
    className: `modal ${show ? 'active' : ''}`,
    onClick: onClose
  },
    React.createElement('div', {
      className: 'modal-content',
      onClick: e => e.stopPropagation()
    },
      React.createElement('div', { className: 'modal-header' },
        React.createElement('h3', { className: 'modal-title' }, '🎉 Challenge Completed!'),
        React.createElement('button', {
          className: 'modal-close',
          onClick: onClose
        }, '×')
      ),
      React.createElement('div', { className: 'modal-body' },
        React.createElement('div', { className: 'points-animation' },
          React.createElement('div', { className: 'points-earned' }, `+${points}`),
          React.createElement('div', { className: 'points-message' }, message),
          React.createElement('div', { className: 'celebration-emojis' }, '🎉 🌱 🎊')
        )
      )
    )
  );
}

export default PointsModal;