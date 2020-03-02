let star = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe ", "Regulus"];
let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function constellationDisplay() {
    let star_name = prompt("nhập tên sao");
    let index = null;
    for (let i = 0; i < star.length; i++) {
        if (star_name == star[i]) {
            index = i;
        }
    }
    if (index != null) {
        let result = constellation[index];
        alert(result)
    } else {
        alert("không tìm thấy")
    }
}
window.onload = constellationDisplay();