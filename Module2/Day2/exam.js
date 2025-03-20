
//Quizz0
// let s = prompt("Nhap vao chuoi : ");
// if(s.length >= 8) {
//     alert("Chuoi nay ok");
// } else {
//     alert("Ngan qua, dai them ti nua.");
// }

//Quizz0 1
// let a = parseInt(prompt("Nhap vao so a : "));
// if(a >= 18) {
//     alert("Du 18 thi quay tiep");
// } else if(a >=16) {
//     alert("Doi them it nam nua");
// } else {
//     alert("Con qua na tre.")
// }

//Quizz0 //Tong cac so tu 1 den 50
// let sum = 0;
// for(let i = 1; i <= 50; i++) {sum+=i};
// alert("Tong cac so tu 1 den 50 la: " + sum);

//Quizz0 1. Tong cac so chan tu -10 den 50
// let sum = 0;
// for(let i = -10; i <= 50; i++) {if(i%2==0) {sum+=i}};
// alert("Tong cac so chan tu -10 den 50 la: " +sum);

//Quizz0 2. Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for(let i = -100; i<= 100; i++){if(i%9 == 0){process.stdout.write(i + " ");}};

//Quizz0 3. Hãy dùng while để in ra dãy số từ 1 đến 200.
// let i = 1;
// while(i <= 200) {
//     process.stdout.write(i +" ");
//     i++;
// }

// Quizz0 4. Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// let s = prompt("Nhap vao chuoi s: ");
// let l = parseInt(prompt("Nhap vao so l: "));

// while(s.length < l) {
//     s += 'a';
//     alert(s);
// }

// Quizz0 5. Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
// while(true) {
//     let x = parseInt(prompt("Nhap vao so x:"));
//     let y = parseInt(prompt("Nhap vao so y:"));

//     while(x > 100 || x < 0) {
//         x = parseInt(prompt("Nhap vao so x phai thuoc doan [0,100]:"));
//         if((x >= 0 && x<= 100)) {
//             break;
//         }
//     }
//     while(y > 100 || y < 0) {
//         y = parseInt(prompt("Nhap vao so y phai thuoc doan [0,100]:"));
//         if((y >= 0 && y<= 100)) {
//             break;
//         }
//     }
//     while(x < y) {
//         x++;
//         alert("x = " + x);
//         y--;
//         alert("y = " + y);
//     }
//     break;
// }

//Practice

//1. In ra dãy số từ 1 đến 500.
// for(let i = 1; i <= 500; i++) {process.stdout.write(i + " ")};

//2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for(let i = 1; i <= 300; i++) {
//     if(i % 2 == 0 && i % 3 == 0) {
//         process.stdout.write(i +" ");
//     }
// }

//3.Tính tổng các số chẵn trong đoạn [-30, 50].
// let sum = 0;
// for(let i = -30; i <= 50; i++) {
//     if(i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log("Tong cac so chan trong doan [-30, 50] la: " + sum);

//4. Nhập vào số n. Tính giai thừa của số n.
// let n = parseInt(prompt("Nhap vao so n: "));
// let fac = 1;
// for(let i = 1; i <=n; i++) {
//     fac *= i;
// }
// alert("Giai thua cua " + n + " la " + fac);

//5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
// while(true) {
//     let a = parseInt(prompt("Nhap vao so a: "));
//     let b = parseInt(prompt("Nhap vao so b: "));
//     let x = parseInt(prompt("Nhap vao so x: "));

//     while(a >= b) {
//         a = parseInt(prompt("Nhap vao so a phai nho hon so b: "));
//     }
//     for(let i = a; i <=b ;i++) {
//         if(i % x == 0) {
//             alert(i + " la so nho nhat thuoc doan [" + a + "," + b +"]" +" chia het cho " + x);
//             break;
//         }
//     }
// }

//6. Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)
// let sum = 0;
// while(true) {
//     let n = parseInt(prompt("Nhap vao so n: "));
//     while(n < 2) {
//         n = parseInt(prompt("Nhap vao so n phai lon hon 2: "));
//     }
//     for(let i = 1; i <= n; i++) {
//         sum += 1 / (i * (i+1));
//     }
//     alert("Tong chuoi thu dc: " + sum);
//     break;
// }

//7. Nhập vào số n. Hãy in ra số ước của n.
// let n = parseInt(prompt("Nhap vao so n: "));
// let s = ""
// for(let i = 1; i <= n; i++) {
//     if(n % i == 0) {
//         s += i + " ";
//     }
// }
// alert("Cac uoc cua " + n + " la " + s);

//8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// let n = parseInt(prompt("Nhap vao so n: "));
// let isPrime = true;
// if(n <= 0 || n==1) {
//     alert(n + " khong phai la so nguyen to. ");
// } else {
//     for(let i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i == 0) {
//             isPrime = false;
//         }
//     }
//     if(isPrime) {
//         alert(n + " la so nguyen to.");
//     } else {
//         alert(n + " khong la so nguyen to.");
//     }
// }

//9. Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.

// let s = prompt("Nhập vào chuỗi số: ");
// let l = parseInt(prompt("Nhap vao l: "))
// let checkValid = false; 

// while (!checkValid) {
//     checkValid = true; 

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] < '0' || s[i] > '9') {
//             checkValid = false; 
//             break; 
//         }
//     }

//     if (!checkValid) {
//         s = prompt("Chuỗi không hợp lệ! Vui lòng nhập lại chuỗi chỉ chứa số:");
//     }
// }
// while(s.length < l) {
//     s += '0';
//     alert(s);
//}

//10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.

// while(true) {
//     let m = parseInt(prompt("Nhap vao so m: "));
//     let n = parseInt(prompt("Nhap vao so n: "));

//     while(m <= 0) {
//         m = parseInt(prompt("Nhap vao so m phai lon hon 0: "));
//     }
//     while(n <= 0) {
//         n = parseInt(prompt("Nhap vao so n phai lon hon 0: "));
//     }

//     let max = n;
//     let min = m;
//     if(m < n) {
//         max = m;
//         min = n;
//     }

//     while(true) {
//         if(min % m == 0, min % n == 0) {
//             alert("Boi chung nho nhat cua " + m + " va " +n +" la " + min);
//             break;
//         } else {
//             min++;
//         }
//     }
//     while(true) {
//         if(max % m == 0, max % n == 0) {
//             alert("Uoc chung lon nhat cua " + m + " va " +n +" la " + max);
//             break;
//         } else {
//             max--;
//         }
//     }
// }

//11. Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in
// let random = Math.floor(Math.random() * 20) + 1;
// alert(random);
// let count =0;

// while (count < 5) {
//     number = parseInt(prompt("Nhập vào số bạn đoán: "));
    
//     if (number == random) {
//         alert("Đoán đúng!");
//         break;
//     } 
    
//     count++;
//     alert(count == 5 ? "Bạn đã thua cuộc." : "Đoán sai, thử lại!");
// }

//12. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.

// let n = parseInt(prompt("Nhap vao so n: "))
// for(let i = 1; i <= 10; i++) {
//     console.log(n + " * " + i + " = " + (n*i));
// }

//13.Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
// const readlineSync = require("readline-sync");

// let number = parseInt(readlineSync.question("Nhập một số: "));
// for(let i = 0; i < number; i++) {
//     for(let j = 0; j < number; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//14. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3
// const readlineSync = require("readline-sync");
// let n = parseInt(readlineSync.question("Nhập số n: "));
// let m = parseInt(readlineSync.question("Nhập số m: "));
// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < m; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//15. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n. VD: n = 3
// const readlineSync = require("readline-sync");
// let n = parseInt(readlineSync.question("Nhập số n: "));
// for(let i = 1; i <= n; i++) {
//     for(let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//16. Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả: Nếu BMI < 18.5 → in ra “Nhẹ cân” Nếu 18.5 <= BMI < 23 → in ra “Bình thường” Nếu 23 <= BMI < 25 → in ra “Thừa cân” Nếu BMI >= 25 → in ra “Béo phì”
// let w = parseFloat(prompt("Nhap vao can nang: "));
// let h = parseFloat(prompt("Nhap vao chieu cao: "));

// while(w <= 0 || h <= 0) {
//     w = parseFloat(prompt("Nhap lai can nang: "));
//     h = parseFloat(prompt("Nhap lai chieu cao: "));
// }
// let bmi = w /Math.pow(h, 2);
// alert(bmi)
// if(bmi < 18.5) {
//     alert("Nhe can");
// } else if(bmi >= 18.5 && bmi < 23) {
//     alert("Binh thuong");
// } else if(bmi >= 23 && bmi < 25) {
//     alert("Thua can");
// } else {
//     alert("Beo phi");
// }

//17. Tạo 1 biến a có giá trị là 1 số tự nhiên ngẫu nhiên trong [5, 10]. Hãy nhập vào số n cho đến khi giá trị của n bằng a.
// let random = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
// alert(random)
// let n = parseInt(prompt("Nhap vao so: "));
// while(n != random) {
//     n = parseInt(prompt("Nhap lai so: "));  
// }
