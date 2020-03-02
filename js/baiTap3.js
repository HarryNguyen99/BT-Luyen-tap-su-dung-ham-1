function showMessage(number1, number2) {
    number1 = parseInt(prompt("Nhập số thứ nhất:"));
    number2 = parseInt(prompt("Nhập số thứ hai:"));
    if (number1 <= number2) {
        return number1 + number2;
    }else {
        return "số thứ nhất lớn hơn số thứ hai"
    }
}
alert(showMessage());