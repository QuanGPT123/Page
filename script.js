function BMICalc() {
    var CanNang=document.getElementById("w").value;
    var ChieuCao=document.getElementById("h").value/100;
    var congthuc = CanNang / (ChieuCao * ChieuCao);
    document.getElementById("ketqua").innerHTML="BMI của bạn : "+Math.floor(congthuc);
    return congthuc;
}
function CheckBody(){
    var bmi = BMICalc();
    if (bmi<=18.5){
        document.getElementById("comment").innerHTML="Bạn đang thiếu cân, bạn nên ăn nhiều hơn.";
    }else if (bmi<=24.9){
        document.getElementById("comment").innerHTML="Bạn đang có cân nặng và chiều cao khoẻ mạnh!";
    }else if (bmi<=29.9){
        document.getElementById("comment").innerHTML="Bạn đang hơi thừa cân, bạn nên ăn ít và tập thể dục nhiều hơn.";
    }else{
        document.getElementById("comment").innerHTML="tú béo";
    }
}