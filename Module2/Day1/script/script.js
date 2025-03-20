let year = parseInt(prompt("Nhap vao nam: "));
if(year < 0) {
    alert("Nam khong the am");
    year = parseInt(prompt("Nhap vao nam: "));
} 
let month = parseInt(prompt("Nhap vao thang: "));

switch(month) {
    case 2:
        if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            alert("29");
            break;
        } else {
            alert("28");
            break;
        }
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: 
        alert("31");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("30");
        break;
    default:
        alert("Thang k hop le!");
        break;
}
