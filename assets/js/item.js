
function minus(ctn_num) {
    var num = Number(document.getElementsByClassName("input_num")[ctn_num].value);
    if (num > 1) {
        document.getElementsByClassName("input_num")[ctn_num].value = num - 1;
    }
}

function add(ctn_num) {
    var num = Number(document.getElementsByClassName("input_num")[ctn_num].value);
    if (num < 100) {
        document.getElementsByClassName("input_num")[ctn_num].value = num + 1;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 獲取商品 ID
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // 查找商品
    const product = mockData.find(item => item.id === productId);

    if (product) {
        // 更新商品信息
        document.querySelector('.introduce .image img').src = product.image;
        document.querySelector('.titpro .title_a').innerHTML = `${product.enName}<br>${product.name}`;
        document.querySelector('.titpro .proprice').innerText = `NT$${product.price}`;
        document.querySelector('.title .title_c').innerText = `庫存：${product.stock}`;
        document.querySelector('.description').innerText = product.description;
        document.querySelector('.ingredients').innerHTML = product.ingredients.map(i => `${i}<br>`).join('');
    } else {
        // 商品未找到
        document.querySelector('main').innerHTML = `<p>商品未找到</p>`;
    }
});

// 初始化
loadProduct();
