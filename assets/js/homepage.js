const panels = document.querySelectorAll(".panel"); // 选取所有 .panel 元素

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.add("active"); 
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active"); // 移除每个 panel 的 .active 类
  });
}
