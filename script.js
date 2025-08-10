function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  document.getElementById('timeDisplay').textContent = `${hours}:${minutes}`;
  document.getElementById('bigClock').textContent = `${hours}:${minutes}`;

  const options = { weekday: 'short', month: 'long', day: 'numeric' };
  document.getElementById('dateDisplay').textContent =
    now.toLocaleDateString('ja-JP', options);
}
setInterval(updateTime, 1000);
updateTime();

const icons = {
  message: `<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3h20v14H6l-4 4V3z"/>
  </svg>`,
  mail: `<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4h20v16H2V4zm2 2v12h16V6H4zm8 5l8-6H4l8 6z"/>
  </svg>`,
  alert: `<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2zm1 15h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  </svg>`
};

const notificationsData = [
  { icon: 'message', text: '未読14件', detail: `
      <ul>
        <li>山田さんからのメッセージ</li>
        <li>グループチャットの新着</li>
        <li>田中さんから写真が届きました</li>
      </ul>
      ほか11件の未読があります。
    `  },
  { icon: 'mail', text: '新しいメールがあります', detail: '受信トレイに3件の新着メールがあります。' },
  { icon: 'alert', text: '期限切れのタスクがあります', detail: '期限切れのタスクが2件あります。早急に対応してください。' }
];

function showNotifications() {
  const container = document.getElementById('notifications');
  notificationsData.forEach((n, index) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'notification';

      div.innerHTML = `
        <div class="notification-header">
          ${icons[n.icon]}
          <div class="notification-text">${n.text}</div>
        </div>
        <div class="notification-detail">${n.detail}</div>
      `;

      container.appendChild(div);

      requestAnimationFrame(() => {
        div.style.animation = 'slideIn 0.5s forwards';
      });

      div.addEventListener('click', () => {
        div.classList.toggle('open');
      });
    }, index * 1000);
  });
}

document.addEventListener('DOMContentLoaded', showNotifications);

document.getElementById('fullscreenBtn').addEventListener('click', () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  }
});
