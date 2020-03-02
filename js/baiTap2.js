function showMessage(number) {
    number = prompt("Nhập số:");
    return ++number;
}
function result() {
document.getElementById("resultout").innerHTML = showMessage();
}