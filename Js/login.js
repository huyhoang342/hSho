function kiemtra(){
    var loi = "";
    // Kiểm tra mã sv
    var masv = document.getElementById("masv");
    if(masv.value ==""){
        masv.className="loi";
        loi += "Mã sinh viên không được bỏ trống<br>";
    }else if(masv.value.length!=7){
        masv.className="loi";
        loi += "Mã sinh viên không đúng 7 ký tự<br>";
    }else{
        masv.className="txt";
    }
    
    // Kiểm tra họ và tên
    var hoten = document.getElementById("hoten");
    if(hoten.value == ""){
        hoten.className="loi";
        loi += "Họ tên không được bỏ trống.<br>";
    }else if(hoten.value.length>30){
        hoten.className="loi";
        loi += "Họ tên quá dài. <br>";
    }else{
        hoten.className="txt";
    }
    
// KIểm tra email
var email = document.getElementById("email");
if(email.value==""){
    email.className="loi";
    loi += "Email không được bỏ trống.<br>";
}else{
    email.className="txt";
}
// KIỂM TRA GIỚI TÍNH
dem = 0;
var arr_phai= document.getElementsByName("phai");
for(var i =0; i<arr_phai.length; i++){
    if(arr_phai[i].checked == true){
        dem++;
    }
}
if(dem==0){
    document.getElementById("fs1").className="loi";
    loi+= "Phải chọn giới tính.<br>";
}else{
    document.getElementById("fs1").className="";
}
// Kiểm Tra sở thích
arr_sothich = document.getElementsByName("st");
dem=0;
for(var i=0;i<arr_sothich.length;i++){
    if(arr_sothich[i].checked){
        dem++;
    }
}
if(dem==0){
    document.getElementById("fs2").className="loi";
    loi += "Phải chọn ít nhất 1 sở thích.<br>"
}else{
    document.getElementById("fs2").className="";
}
// KIỂM TRA QUỐC TỊCH
var qt = document.getElementById("quoctich");
if(qt.value==0){
    qt.className="loi";
    loi += "Phải chọn quốc tích.<br>";
}else{
    qt.className="txt";
}
// KIỂM TRA GHI CHÚ 
var gc = document.getElementById('ghichu');
if(gc.value.length>200){
    gc.className="loi";
    loi+="Ghi chú phải dưới 200 kí tự.<br>";
}else{
    gc.className="txt";
}
document.getElementById("baoloi").innerHTML = loi;
   
}