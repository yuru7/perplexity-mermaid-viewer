// 設定読み込み
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('theme', (data) => {
        document.getElementById('theme').value = data.theme || "auto";
    });
});

// 設定保存
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const color = document.getElementById('theme').value;
    if (color === 'auto') {
        chrome.storage.local.remove('theme');
    } else {
        chrome.storage.local.set({ theme: color });
    }
    document.getElementById('confirmation-message').style.display = 'block';
});

// セレクトボックスが変更されたら設定完了メッセージを非表示にする
document.getElementById('theme').addEventListener('change', () => {
    document.getElementById('confirmation-message').style.display = 'none';
});
