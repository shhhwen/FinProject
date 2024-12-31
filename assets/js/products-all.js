// 商品數據
const mockData = [
    { id: 1, name: "豹肝藥", enName: "Leopard Liver Potion", price: 1500, stock: 10, image: "../assets/img/products/good1.png", description: "當你需要熬夜工作時必備，喝完就會有精力更加努力工作!", ingredients: ["豹肝", "蜂蜜", "薰衣草精油"] },
    { id: 2, name: "打嗝藥水", enName: "Hiccup Potion", price: 450, stock: 15, image: "../assets/img/products/good2.png", description: "使服用者打嗝，整人必備!", ingredients: ["蟾蜍唾液", "發酵草莓汁", "閃光粉末"] },
    { id: 3, name: "體溫調節藥水", enName: "Temperature Adjustment Potion", price: 2150, stock: 8, image: "../assets/img/products/good3.png", description: "在炎熱或寒冷的天氣服用後可以改變身體溫度以保持平衡。", ingredients: ["冰晶龍的鱗片", "火焰花瓣", "魔力水"] },
    { id: 4, name: "遺忘汁", enName: "Forget Juice", price: 1450, stock: 12, image: "../assets/img/products/good4.png", description: "不小心看了什麼傷眼睛的東西就可以喝一口保護眼睛和腦袋。", ingredients: ["哥布林肝臟", "忘憂草", "妖精閃粉"] },
    { id: 5, name: "蜥蜴的尾巴", enName: "Lizard Tail", price: 50, stock: 30, image: "../assets/img/products/good5.png", description: "最基本的耗材，便宜而且泛用。", ingredients: ["新鮮蜥蜴尾巴", "濕地苔蘚", "魔法鹽晶"] },
    { id: 6, name: "魔力粉", enName: "Magic Powder", price: 250, stock: 25, image: "../assets/img/products/good6.png", description: "魔法藥水的催化劑，製作魔法藥水。", ingredients: ["星塵碎片", "彩虹石粉末", "龍骨屑"] },
    { id: 7, name: "兔子的腳", enName: "Rabbit Foot", price: 600, stock: 18, image: "../assets/img/products/good7.png", description: "幸運的象徵，可以當作吊飾，也能增加製作魔法藥水的成功機率。", ingredients: ["兔子後腳", "四葉草精華", "月光粉"] },
    { id: 8, name: "鳳凰羽毛", enName: "Phoenix Feather", price: 300000, stock: 2, image: "../assets/img/products/good8.png", description: "用於製作再生或治療功能的藥水，稀有而且非常好看。", ingredients: ["鳳凰尾羽", "光之露珠", "永生之花的花瓣"] },
    { id: 9, name: "古代恐龍的化石", enName: "Ancient Dinosaur Fossil", price: 2500000, stock: 1, image: "../assets/img/products/good9.png", description: "用於製作提升力量的藥水，買一根擺在客廳會非常帥氣。", ingredients: ["恐龍化石碎片", "強力魔法樹脂", "地底熔岩石"] },
    { id: 10, name: "曼德拉草", enName: "Mandrake Root", price: 2290, stock: 5, image: "../assets/img/products/good10.png", description: "用於製作解咒藥水，收到包裹時請戴上耳塞處理。", ingredients: ["曼德拉草根", "黑暗泥土", "靜音草籽"] },
    { id: 11, name: "靈光藍花", enName: "Soul Glow Blueflower", price: 3520, stock: 7, image: "../assets/img/products/good11.png", description: "祭祀魔法的媒介，用以祭祀死去的人、撫慰他們的靈魂。", ingredients: ["靈光藍花花瓣", "星夜之水", "月亮石粉"] },
    { id: 12, name: "魔法掃帚", enName: "Magic Broomstick", price: 12900, stock: 4, image: "../assets/img/products/good12.png", description: "就是可以飛的掃把。", ingredients: ["魔法木材", "鳳凰尾羽", "強化魔法結界符文"] },
    { id: 13, name: "包你醒腦萬靈丹", enName: "Brain Awakening Elixir", price: 990, stock: 20, image: "../assets/img/products/good13.png", description: "可明顯增強服用者腦力的魔藥，在腦子不清楚時可以很好的幫助你清醒。", ingredients: ["善智菇", "金牛乳", "銀光粉"] },
    { id: 14, name: "隱形斗篷", enName: "Invisibility Cloak", price: 8900, stock: 3, image: "../assets/img/products/good14.png", description: "隱蔽你的所有蹤跡。", ingredients: ["巨蛛絲", "光影隱形符文", "夜影布"] },
    { id: 15, name: "記憶吐司", enName: "Memory Toast", price: 790, stock: 15, image: "../assets/img/products/good15.png", description: "將想記住的事寫上去後再吃掉就會一直記得，直到排泄出來。", ingredients: ["忘憂草籽粉", "書頁碎片", "符咒墨水"] },
    { id: 16, name: "使魔的蛋", enName: "Familiar's Egg", price: 99999, stock: 2, image: "../assets/img/products/good16.png", description: "根據照顧者的性格及照顧方式，會孵出屬於照顧者獨一無二的使魔。", ingredients: ["幻獸精華", "魔法火焰孵育晶石", "時間之沙"] }
];

// 初始化商品數據
let products = mockData;

// 選取 DOM 元素
const listProductHTML = document.querySelector('.listProduct');

// 渲染商品到頁面
const addDataToHTML = () => {
    listProductHTML.innerHTML = ''; // 清空商品列表
    if (products.length > 0) {
        products.forEach(product => {
            let newProduct = document.createElement('div'); // 創建商品容器
            newProduct.dataset.id = product.id; // 設置商品 ID
            newProduct.classList.add('item'); // 添加樣式類
            
            // 定義商品內容
            newProduct.innerHTML = `
                <div class="product-image">
                    <a href="../pages/item.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                </div>                    
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    加入購物車
                </button>
            `;
            
            listProductHTML.appendChild(newProduct); // 添加到商品列表
        });
    }
};


// 綁定 "加入購物車" 事件
listProductHTML.addEventListener('click', (event) => {
    let target = event.target;

    // 點擊加入購物車按鈕
    if (target.classList.contains('addCart')) {
        let id_product = target.closest('.item').dataset.id; // 獲取商品 ID
        addToCart(id_product); // 呼叫購物車邏輯
        event.preventDefault(); // 防止預設行為（避免按鈕觸發鏈結行為）
    }
});

// 初始化商品列表
addDataToHTML();
