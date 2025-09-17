export const hideLoadingScreen = () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      if (loadingScreen.parentElement) {
        loadingScreen.remove();
      }
    }, 500);
  }
};