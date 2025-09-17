import React, { useState } from 'react';
import { showNotification } from '../utils/notifications';

function LandingPage({ onLogin }) {
    let [studentForm, setStudentForm] = useState({ schoolCode: '', studentName: '' });
  const [adminForm, setAdminForm] = useState({ institution: '', adminName: '' });
  const [loading, setLoading] = useState(false);

  const handleStudentLogin = () => {
    if (!studentForm.schoolCode.trim() || !studentForm.studentName.trim()) {
      showNotification('Error', 'Please fill in all fields', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onLogin('student', {
        studentName: studentForm.studentName.trim(),
        schoolCode: studentForm.schoolCode.trim()
      });
      showNotification('Welcome!', `Hello ${studentForm.studentName}! Ready to save the planet?`, 'success');
      setLoading(false);
    }, 1000);
  };

  const handleAdminLogin = () => {
    if (!adminForm.institution.trim() || !adminForm.adminName.trim()) {
      showNotification('Error', 'Please fill in all fields', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onLogin('admin', {
        adminName: adminForm.adminName.trim(),
        institution: adminForm.institution.trim()
      });
      showNotification('Admin Access', `Welcome ${adminForm.adminName}!`, 'success');
      setLoading(false);
    }, 1000);
  };

  return React.createElement('div', { className: 'landing-page' },
    React.createElement('div', { className: 'landing-container' },
      React.createElement('div', { className: 'landing-header' },
   React.createElement(
  'img', 
  { 
    className: 'landing-title',
    src: '/vite.svg', // Using existing public asset
     
  },
  null
),
        React.createElement('p', { className: 'landing-subtitle' }, 'Gamified Environmental Education Platform'),
        React.createElement('div', { className: 'eco-icons' },
          ['🌳', '🌊', '♻️', '🌍', '🌿'].map((icon, i) =>
            React.createElement('span', { 
              key: i, 
              style: { '--i': i }
            }, icon)
          )
        )
      ),
      React.createElement('div', { className: 'login-options' },
        React.createElement('div', { className: 'login-card' },
          React.createElement('h3', null, '👨‍🎓 Student Login'),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'Institution Code'),
            React.createElement('input', {
              type: 'number',
              className: 'form-control',
              placeholder: 'Enter your Institution Code',
              value: studentForm.schoolCode,
              onChange: (e) => setStudentForm(prev => ({ ...prev, schoolCode: e.target.value })),
              disabled: loading
            })
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'Username'),
            React.createElement('input', {
              type: 'text',
              className: 'form-control',
              placeholder: 'Enter Username',
              value: studentForm.studentName,
              
              onChange: (e) => setStudentForm(prev => ({ ...prev, studentName: e.target.value })),
              disabled: loading
            })
          ),
          React.createElement('button', {
            className: 'btn btn--primary btn--full-width',
            onClick: handleStudentLogin,
            disabled: loading
          }, loading ? React.createElement('span', { className: 'loading' }) : 'Join PlanetPoint')
        ),
        React.createElement('div', { className: 'login-card' },
          React.createElement('h3', null, '👩‍🏫 Teacher/Admin Login'),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'Institution Code'),
            React.createElement('input', {
              type: 'number',
              className: 'form-control',
              placeholder: 'Enter your institution Code',
              value: adminForm.institution,
              onChange: (e) => setAdminForm(prev => ({ ...prev, institution: e.target.value })),
              disabled: loading
            })
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'Admin Name'),
            React.createElement('input', {
              type: 'text',
              className: 'form-control',
              placeholder: 'Enter your name',
              value: adminForm.adminName,
              onChange: (e) => setAdminForm(prev => ({ ...prev, adminName: e.target.value })),
              disabled: loading
            })
          ),
          React.createElement('button', {
            className: 'btn btn--primary btn--full-width',
            onClick: handleAdminLogin,
            disabled: loading
          }, loading ? React.createElement('span', { className: 'loading' }) : 'Admin Access')
        )
      )
    )
  );


}

export default LandingPage;
