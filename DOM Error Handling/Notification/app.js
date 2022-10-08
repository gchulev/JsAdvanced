function notify(message) {
  let notificationDiv = document.querySelector('div#notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
  notificationDiv.addEventListener('click', () => notificationDiv.style.display = 'none');
}