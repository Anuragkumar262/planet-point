import React, { useState, useRef } from 'react';
import { showNotification } from '../../../utils/notifications';

function ActionInterface({ challenge, onBack, onComplete }) {
     const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [qrScanned, setQrScanned] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showNotification('File Too Large', 'Please select an image smaller than 5MB', 'error');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
        showNotification('Photo Uploaded', 'Image uploaded successfully!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQRScan = () => {
    setQrScanned(true);
    showNotification('QR Verified', 'Location verified successfully!', 'success');
    setTimeout(() => setQrScanned(false), 3000);
  };

  const handleSubmit = async () => {
    if (!photo && !description.trim()) {
      showNotification('Incomplete', 'Please upload photo evidence or add description', 'warning');
      return;
    }

    setUploading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    showNotification('Submitted!', 'Your challenge submission is under review', 'success');
    onComplete(100, challenge.points);
  };

  return React.createElement('section', { className: 'content-section active' },
    React.createElement('div', { className: 'action-container' },
      React.createElement('div', { className: 'action-header' },
        React.createElement('h3', { className: 'action-title' }, challenge.title),
        React.createElement('button', {
          className: 'btn btn--secondary btn--sm',
          onClick: onBack
        }, '← Back')
      ),
      React.createElement('div', { className: 'action-content' },
        React.createElement('div', { className: 'action-description' }, challenge.description),
        
        challenge.requirements && React.createElement('div', { className: 'requirements-list' },
          React.createElement('h4', { className: 'requirements-title' }, '📋 Requirements:'),
          React.createElement('ul', null,
            challenge.requirements.map((req, index) =>
              React.createElement('li', { key: index }, req)
            )
          )
        ),

        React.createElement('div', { className: 'action-form' },
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, '📷 Photo Evidence'),
            React.createElement('div', { 
              className: 'photo-upload-area',
              onClick: () => fileInputRef.current?.click()
            },
              React.createElement('div', { className: 'upload-icon' }, '📷'),
              React.createElement('div', { className: 'upload-text' }, 
                photo ? 'Click to change photo' : 'Click to upload photo'
              ),
              React.createElement('div', { className: 'upload-hint' }, 
                'Supported formats: JPG, PNG, GIF (Max 5MB)'
              )
            ),
            React.createElement('input', {
              ref: fileInputRef,
              type: 'file',
              accept: 'image/*',
              onChange: handlePhotoUpload,
              style: { display: 'none' }
            }),
            photo && React.createElement('div', { className: 'photo-preview' },
              React.createElement('img', {
                src: photo,
                alt: 'Evidence'
              })
            )
          ),
          
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, '📝 Description'),
            React.createElement('textarea', {
              className: 'form-control share-textarea',
              placeholder: 'Tell us about your eco-action...',
              value: description,
              onChange: (e) => setDescription(e.target.value)
            })
          ),

          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, '📍 Location (Optional)'),
            React.createElement('input', {
              type: 'text',
              className: 'form-control',
              placeholder: 'Where did this take place?',
              value: location,
              onChange: (e) => setLocation(e.target.value)
            })
          ),

          
          React.createElement('button', {
            className: 'btn btn--primary btn--full-width',
            onClick: handleSubmit,
            disabled: uploading || (!photo && !description.trim())
          }, uploading ? 
            React.createElement('span', null, 
              React.createElement('span', { className: 'loading' }), 
              ' Submitting...'
            ) : 
            `Submit Challenge (+${challenge.points} points)`
          )
        )
      )
    )
  );
  // ... Paste the entire ActionInterface component code here
}

export default ActionInterface;