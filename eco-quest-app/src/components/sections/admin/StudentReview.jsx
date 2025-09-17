import React, { useState } from 'react';
import { applicationData } from '../../../data/applicationData';
import { showNotification } from '../../../utils/notifications';

function StudentReview() {
  const [submissions, setSubmissions] = useState(applicationData.pendingSubmissions);

  const handleApprove = (submissionId) => {
    setSubmissions(prev => prev.filter(s => s.id !== submissionId));
    showNotification('Approved!', 'Submission approved and points awarded', 'success');
  };

  const handleReject = (submissionId) => {
    setSubmissions(prev => prev.filter(s => s.id !== submissionId));
    showNotification('Rejected', 'Submission has been rejected', 'warning');
  };

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'section-header' },
      React.createElement('h2', null, 'Review Student Submissions'),
      React.createElement('p', null, 'Evaluate and approve student challenge submissions.')
    ),
    React.createElement('div', { className: 'submissions-list' },
      submissions.length > 0 ? submissions.map((submission, index) =>
        React.createElement('div', { 
          key: submission.id,
          className: 'submission-item',
          style: { animationDelay: `${index * 0.1}s` }
        },
          React.createElement('div', { className: 'submission-header' },
            React.createElement('div', { className: 'submission-student' },
              React.createElement('div', { className: 'submission-avatar' }, submission.studentImage),
              React.createElement('div', { className: 'submission-info' },
                React.createElement('h4', null, submission.student),
                React.createElement('div', { className: 'submission-challenge' }, submission.challenge)
              )
            ),
            React.createElement('div', { className: `submission-status ${submission.status}` }, submission.status)
          ),
          React.createElement('div', { className: 'submission-content' }, submission.description),
          submission.photoEvidence && React.createElement('div', { className: 'submission-evidence' },
            React.createElement('img', { 
              src: '/vite.svg', 
              alt: 'Photo Evidence', 
              className: 'evidence-photo' 
            })
          ),
          React.createElement('div', { className: 'submission-actions' },
            React.createElement('button', {
              className: 'approve-btn',
              onClick: () => handleApprove(submission.id)
            }, '✅ Approve'),
            React.createElement('button', {
              className: 'reject-btn',
              onClick: () => handleReject(submission.id)
            }, '❌ Reject')
          )
        )
      ) : React.createElement('div', {
        style: { textAlign: 'center', padding: '48px', color: 'var(--color-text-secondary)' }
      },
        React.createElement('div', { style: { fontSize: '48px', marginBottom: '16px' } }, '✅'),
        React.createElement('h3', null, 'All caught up!'),
        React.createElement('p', null, 'No pending submissions to review.')
      )
    )

  );
}

export default StudentReview;
