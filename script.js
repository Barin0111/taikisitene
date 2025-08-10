// 時間表示更新
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('timeDisplay').textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();

// 通知表示
const notificationsData = [
  { text: '未読14件' },
  { text: '期限切れ' },
  { text: '新しいメッセージがあります' }
];

function showNotifications() {
  const container = document.getElementById('notifications');
  notificationsData.forEach((n, index) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'notification';
      div.textContent = n.text;
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
    document.documentElement.webkitRequestFullscreen(); // iOS Safari
  }
});
