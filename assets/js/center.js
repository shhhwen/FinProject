// 檢查會員帳號是否符合Gmail格式
function validateAccount() {
    const account = document.getElementById("account").value;
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!regex.test(account)) {
        alert("會員帳號需為有效的Gmail地址！");
        return false;
    }
    return true;
}

// 檢查會員暱稱是否符合規則
function validateNickname() {
    const nickname = document.getElementById("nickname").value;
    const regex = /^[a-zA-Z0-9._]+$/;
    if (!regex.test(nickname)) {
        alert("會員暱稱只能包含英文字母、數字、底線或句點！");
        return false;
    }
    return true;
}

// 檢查會員密碼是否符合規則
function validatePassword() {
    const password = document.getElementById("password").value;
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(password)) {
        alert("會員密碼只能包含英文字母和數字！");
        return false;
    }
    return true;
}

// 綁定按鈕事件
document.getElementById("updateInfo").addEventListener("click", function () {
    if (validateAccount() && validateNickname() && validatePassword()) {
        alert("修改資料已送出審核！");
    }
});