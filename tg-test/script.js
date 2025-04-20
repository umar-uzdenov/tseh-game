const tg = window.Telegram.WebApp;

function log(message) {
  const logContent = document.getElementById('log-content');
  logContent.textContent += message + '\\n';
  logContent.scrollTop = logContent.scrollHeight;
}

function init() {
  // Show user info
  if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    document.getElementById('user-name').textContent = `Name: ${user.first_name || ''} ${user.last_name || ''}`;
    document.getElementById('user-id').textContent = `ID: ${user.id}`;
    log('User info loaded.');
  } else {
    document.getElementById('user-name').textContent = 'User info not available.';
  }

  // Button event listeners
  document.getElementById('send-data-btn').addEventListener('click', () => {
    tg.sendData('Hello from Web App!');
    log('Sent data to bot: Hello from Web App!');
  });

  document.getElementById('open-link-btn').addEventListener('click', () => {
    tg.openLink('https://core.telegram.org/bots/webapps');
    log('Opened link: https://core.telegram.org/bots/webapps');
  });

  document.getElementById('expand-btn').addEventListener('click', () => {
    tg.expand();
    log('Expanded Web App.');
  });

  document.getElementById('close-btn').addEventListener('click', () => {
    tg.close();
    log('Closed Web App.');
  });

  // Ready
  tg.ready();
  log('Telegram Web App initialized.');
}

window.onload = init;
