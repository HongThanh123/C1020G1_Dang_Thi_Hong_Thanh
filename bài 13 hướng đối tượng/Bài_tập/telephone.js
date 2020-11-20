class Mobile {
    constructor(pin, dangSoanThao, hopThuDen, daGui, trangThai) {
        this.pin = pin;
        this.dangSoanThao = dangSoanThao;
        this.hopThuDen = hopThuDen;
        this.daGui = daGui;
        this.trangThai = trangThai;
    }

    kiemTra() {
        return this.trangThai == "on" ? true : false;
    }
    batTat() {
        this.trangThai = this.trangThai == "on" ? "off" : "on";
    }
    sac() {
        while (this.pin < 100) {
            this.pin++;
        }
        alert("Pin day");
    }

    soanTinNhan(tinNhan) {
        this.dangSoanThao.push(tinNhan);
        this.pin--;
    }

    nhanTinNhan(tinNhan) {
        this.hopThuDen.push(tinNhan);
        this.pin--;
    }

    guiTinNhan(mobile, tinNhan) {
        this.daGui.push(tinNhan);
        mobile.nhanTinNhan(tinNhan);
        this.pin--;
    }
    xemDaGui() {
        alert(this.daGui);
        this.pin--;
    }
}