
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

