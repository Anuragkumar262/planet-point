import React, { useState } from 'react';
import { applicationData } from '../../../data/applicationData';
import { showNotification } from '../../../utils/notifications';

function Community({ currentUser }) {
  const [shareMessage, setShareMessage] = useState('');
  const [posts, setPosts] = useState(applicationData.communityPosts);

  const handleShare = () => {
    if (shareMessage.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: currentUser?.studentName || 'Student',
        authorImage: '👤',
        message: shareMessage,
        timestamp: 'Just now',
        likes: 0
      };
      setPosts([newPost, ...posts]);
      setShareMessage('');
      showNotification('Posted!', 'Your achievement has been shared with the community!', 'success');
    }
  };

  const handleLike = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'section-header' },
      React.createElement('h2', null, 'Community Hub'),
      React.createElement('p', null, 'Connect with fellow eco-warriors and share your journey.')
    ),
    React.createElement('div', { className: 'community-grid' },
      React.createElement('div', null,
        React.createElement('div', { className: 'card', style: { marginBottom: '24px' } },
          React.createElement('div', { className: 'card__header' },
            React.createElement('h3', null, '📝 Share Achievement')
          ),
          React.createElement('div', { className: 'card__body' },
            React.createElement('div', { className: 'share-form' },
              React.createElement('textarea', {
                className: 'form-control share-textarea',
                placeholder: 'Share your eco-achievement with the community...',
                value: shareMessage,
                onChange: (e) => setShareMessage(e.target.value)
              }),
              React.createElement('div', { className: 'share-actions' },
                React.createElement('button', {
                  className: 'btn btn--primary',
                  onClick: handleShare,
                  disabled: !shareMessage.trim()
                }, '🚀 Share'),
                React.createElement('button', { 
                  className: 'btn btn--outline',
                  onClick: () => showNotification('Teams', 'Team feature coming soon!', 'info')
                }, '👥 Join Team')
              )
            )
          )
        ),
        React.createElement('div', { className: 'card' },
          React.createElement('div', { className: 'card__header' },
            React.createElement('h3', null, '🔥 Recent Activity')
          ),
          React.createElement('div', { className: 'card__body' },
            React.createElement('div', { className: 'activity-feed' },
              posts.map((post, index) =>
                React.createElement('div', { 
                  key: post.id, 
                  className: 'community-post',
                  style: { animationDelay: `${index * 0.1}s` }
                },
                  React.createElement('div', { className: 'post-header' },
                    React.createElement('div', { className: 'post-author-avatar' }, post.authorImage),
                    React.createElement('div', { className: 'post-author-info' },
                      React.createElement('div', { className: 'post-author' }, post.author),
                      React.createElement('div', { className: 'post-timestamp' }, post.timestamp)
                    ),
                    post.badge && React.createElement('div', { className: 'post-badge' }, post.badge)
                  ),
                  React.createElement('div', { className: 'post-message' }, post.message),
                  React.createElement('div', { className: 'post-actions' },
                    React.createElement('div', { 
                      className: 'post-action',
                      onClick: () => handleLike(post.id)
                    },
                      React.createElement('span', null, '❤️'),
                      React.createElement('span', null, post.likes)
                    )
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement('div', null,
        React.createElement('div', { className: 'card' },
          React.createElement('div', { className: 'card__header' },
            React.createElement('h3', null, '🏆 Top Contributors')
          ),
          React.createElement('div', { className: 'card__body' },
            applicationData.students.slice(0, 5).map((student, index) =>
              React.createElement('div', { 
                key: student.id,
                className: 'performer-item',
                style: { animationDelay: `${index * 0.1}s` }
              },
                React.createElement('div', { className: 'performer-rank' }, `#${student.rank}`),
                React.createElement('div', { className: 'performer-name' }, student.name),
                React.createElement('div', { className: 'performer-points' }, `${student.points} pts`)
              )
            )
          )
        )
      )
    )
  );
}

export default Community;