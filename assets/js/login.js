document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector(".register");
    const emailInput = registerForm.querySelector("input[type='email']");
    const phoneInput = registerForm.querySelector("input[placeholder='手機']");
    const passwordInput = registerForm.querySelector("input[placeholder='密碼']");
    const confirmPasswordInput = registerForm.querySelector("input[placeholder='確認密碼']");
    const registerButton = registerForm.querySelector("input[type='button']");

    registerButton.addEventListener("click", () => {
        let isValid = true;

        // 驗證信箱格式
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("信箱格式錯誤，請輸入有效的 Gmail 地址。");
            isValid = false;
        }

        // 驗證手機號碼格式
        const phonePattern = /^09\d{8}$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert("手機格式錯誤，請輸入有效的台灣手機號碼 (範例: 0912345678)。");
            isValid = false;
        }

        // 驗證密碼格式
        const passwordPattern = /^[a-zA-Z0-9]+$/;
        if (!passwordPattern.test(passwordInput.value)) {
            alert("密碼只能包含英文字母和數字。");
            isValid = false;
        }

        // 驗證確認密碼是否相同
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("確認密碼與密碼不相符，請重新輸入。");
            isValid = false;
        }

        // 必填檢查
        if (!emailInput.value || !phoneInput.value || !passwordInput.value || !confirmPasswordInput.value) {
            alert("所有欄位都是必填的，請完整填寫。");
            isValid = false;
        }

        if (isValid) {
            alert("註冊成功！");
            // 可新增提交資料的邏輯
        }
    });
});
