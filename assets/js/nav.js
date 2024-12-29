document.addEventListener("DOMContentLoaded", function () {
    // 獲取導航欄的占位元素
    const navPlaceholder = document.getElementById('nav-placeholder');

    // 動態載入 nav.html
    fetch('./pages/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // 將 nav.html 的內容插入到 nav-placeholder 中
            navPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });
});

