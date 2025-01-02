// 定義商品數量操作函數
function minus(index) {
    // 根據 index 選取對應的數量輸入框
    const input = document.querySelectorAll('.input_num')[index];
    let currentValue = parseInt(input.value) || 1; // 默認值為 1
    if (currentValue > 1) {
        input.value = currentValue - 1; // 減少數量
    }
}

function add(index) {
    // 根據 index 選取對應的數量輸入框
    const input = document.querySelectorAll('.input_num')[index];
    let currentValue = parseInt(input.value) || 1; // 默認值為 1
    if (currentValue < 100) {
        input.value = currentValue + 1; // 增加數量
    }
}
