function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  // 上の小さい時間
  document.getElementById('timeDisplay').textContent = `${hours}:${minutes}`;
  // ロック画面風の大きな時計
  document.getElementById('bigClock').textContent = `${hours}:${minutes}`;

  // 日付表示
  const options = { weekday: 'short', month: 'long', day: 'numeric' };
  document.getElementById('dateDisplay').textContent =
    now.toLocaleDateString('ja-JP', options);
}
setInterval(updateTime, 1000);
updateTime();

// 通知データ
const notificationsData = [
  { icon: 'https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg', text: '未読14件' },
  { icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg', text: '新しいメールがあります' },
  { icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/OOjs_UI_icon_alert-destructive.svg', text: '期限切れのタスクがあります' }
];

function showNotifications() {
  const container = document.getElementById('notifications');
  notificationsData.forEach((n, index) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'notification';

      const img = document.createElement('img');
      img.src = n.icon;
      img.alt = '通知アイコン';

      const textDiv = document.createElement('div');
      textDiv.className = 'notification-text';
      textDiv.textContent = n.text;

      div.appendChild(img);
      div.appendChild(textDiv);
      container.appendChild(div);
    }, index * 1000);
  });
}

document.addEventListener('DOMContentLoaded', showNotifications);

// 全画面表示
document.getElementById('fullscreenBtn').addEventListener('click', () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  }
});
