export const showNotification = (title, message, type = 'info') => {
  const container = document.getElementById('notification-container');
  if (!container) return;
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-header">
      <span class="notification-title">${title}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
    <div class="notification-message">${message}</div>
  `;
  
  container.appendChild(notification);
  
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
};