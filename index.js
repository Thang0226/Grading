function calculate() {
    // Input
    let diem_toan = + document.getElementById("toan").value;
    let diem_van = + document.getElementById("van").value;
    let diem_anh = + document.getElementById("anh").value;

    // Calculate
    let diem_tb = (diem_toan + diem_van + diem_anh) / 3;
    diem_tb = Math.round(diem_tb * 100) / 100;
    let loai = "";

    if (diem_tb < 5) {
        loai = "Không đạt";
    } else if (diem_tb <= 7) {
        loai = "Đạt"
    } else if (diem_tb < 8) {
        loai = "Khá"
    } else if (diem_tb <9) {
        loai = "Tốt"
    } else {
        loai = "Xuất sắc"
    }

    // Output
    document.getElementById("diem_tb").innerHTML = " " + diem_tb;
    document.getElementById("loai").innerHTML = " " + loai;
    con = confirm('Xoá điểm đã điền?');
    if (con) {
        document.getElementById("toan").value = "";
        document.getElementById("van").value = "";
        document.getElementById("anh").value = "";
    }
    document.getElementById("toan").focus();
}
