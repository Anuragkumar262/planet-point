import React, { useState } from 'react'; // Corrected import line
import { applicationData } from '../../../data/applicationData';

function Challenges({ onChallengeSelect }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredChallenges = applicationData.challenges.filter(challenge => {
    const matchesFilter = filter === 'all' || challenge.type === filter;
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters = [
    { id: 'all', label: '🌍 All', count: applicationData.challenges.length },
    { id: 'quiz', label: '🧠 Quizzes', count: applicationData.challenges.filter(c => c.type === 'quiz').length },
    { id: 'action', label: '📷 Actions', count: applicationData.challenges.filter(c => c.type === 'action').length }
  ];

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'section-header' },
      React.createElement('h2', null, 'Challenges & Quizzes'),
      React.createElement('p', null, 'Complete challenges to earn points and contribute to SDGs.')
    ),
    React.createElement('div', { className: 'form-group', style: { maxWidth: '400px', margin: '0 auto 24px' } },
      React.createElement('input', {
        type: 'text',
        className: 'form-control',
        placeholder: '🔍 Search challenges...',
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value)
      })
    ),
    React.createElement('div', { className: 'challenge-filters' },
      filters.map(filterItem =>
        React.createElement('button', {
          key: filterItem.id,
          className: `filter-btn ${filter === filterItem.id ? 'active' : ''}`,
          onClick: () => setFilter(filterItem.id)
        },
          React.createElement('span', null, `${filterItem.label} (${filterItem.count})`)
        )
      )
    ),
    React.createElement('div', { className: 'challenges-grid' },
      filteredChallenges.map((challenge, index) =>
        React.createElement('div', {
          key: challenge.id,
          className: 'challenge-card',
          onClick: () => {
    console.log('Challenge card clicked:', challenge.title); // Yeh line add karein
    onChallengeSelect && onChallengeSelect(challenge);
  },
          style: { animationDelay: `${index * 0.1}s` }
        },
          React.createElement('div', { className: 'challenge-header' },
            React.createElement('div', null,
              React.createElement('h4', { className: 'challenge-title' }, challenge.title),
              React.createElement('span', { className: 'challenge-type' }, challenge.type)
            )
          ),
          React.createElement('p', { className: 'challenge-description' }, challenge.description),
          React.createElement('div', { className: 'challenge-meta' },
            React.createElement('span', { className: 'challenge-points' }, challenge.points),
            React.createElement('span', { className: 'challenge-sdg' }, challenge.sdg),
            React.createElement('span', { 
              className: `status status--${challenge.difficulty.toLowerCase()}`,
              style: { fontSize: '10px', padding: '2px 6px' }
            }, challenge.difficulty)
          )
        )
      )
    ),
    filteredChallenges.length === 0 && React.createElement('div', {
      style: { textAlign: 'center', padding: '48px', color: 'var(--color-text-secondary)' }
    },
      React.createElement('div', { style: { fontSize: '48px', marginBottom: '16px' } }, '🔍'),
      React.createElement('h3', null, 'No challenges found'),
      React.createElement('p', null, 'Try adjusting your search or filter criteria.')
    )
  );
}

export default Challenges;