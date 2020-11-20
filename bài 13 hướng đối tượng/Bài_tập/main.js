let nokia = new Mobile(100, [], [], [], "on");
let iphone = new Mobile(100, [], [], [], "on");

function soanThao(value) {
    if (nokia.kiemTra()) {
        console.log(value);
        nokia.soanTinNhan(value);
    } else {
        alert("dien thoai dang tat");
    }
}

function xemSoanThao() {
    alert(nokia.dangSoanThao);
}

function guiTinNhan() {
    if (nokia.kiemTra()) {
        let tinNhan = document.getElementById("soanThaoNokia").value;
        nokia.guiTinNhan(iphone, tinNhan);
    } else {
        alert("dien thoai dang tat");
    }
}

function nhanTinNhan() {
    document.getElementById("soanThaoIphone").value = iphone.hopThuDen;

}
let buttonNokia = document.getElementsByClassName("buttonNokia");

function nguon() {

    nokia.batTat();
    if (nokia.kiemTra()) {
        document.getElementById("soanThaoNokia").disabled = false;
        for (let i = 0; i < buttonNokia.length; i++) {
            buttonNokia[i].disabled = false;
        }

    } else {
        document.getElementById("soanThaoNokia").disabled = true;
        for (let i = 0; i < buttonNokia.length; i++) {
            buttonNokia[i].disabled = true;
        }

    }
}