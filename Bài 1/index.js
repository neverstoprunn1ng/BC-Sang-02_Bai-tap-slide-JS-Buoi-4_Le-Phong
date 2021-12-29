/*
Input: Nhập 3 số nguyên
Các bước xử lý:
    Bước 1: tạo biến inputSo1, inputSo2, inputSo3, ketQua
    Bước 2: cho người dùng nhập và gán vào các biến input
    Bước 3: đặt điều kiện các input không được trùng nhau
    Bước 4: so sánh lớn bé các giá trị input
    Bước 5: xuất kết quả
Output: xuất 3 số theo thứ tự tăng dần    
 */

var inputSo1El = document.getElementById('inputSo1')
var inputSo2El = document.getElementById('inputSo2')
var inputSo3El = document.getElementById('inputSo3')
var ketQuaEl = document.getElementById('ketQua')
    
function ketQua() {
        var inputSo1 = inputSo1El.value * 1 
        var inputSo2 = inputSo2El.value * 1
        var inputSo3 = inputSo3El.value * 1
        var ketQua

        if(inputSo3 == inputSo2 || inputSo2 == inputSo1 || inputSo3 == inputSo1){
            ketQua = "Các số không được trùng nhau"
        }
        if (inputSo1 > inputSo2) { 
            if (inputSo1 > inputSo3 && inputSo2 > inputSo3){
                ketQua = inputSo3 + " - " + inputSo2 + " - " + inputSo1

            }else if(inputSo1 > inputSo3 && inputSo3 > inputSo2){
                ketQua = inputSo2 + " - " + inputSo3 + " - " + inputSo1

            }else if(inputSo1 < inputSo3){
                ketQua = inputSo2 + " - " + inputSo1 + " - " + inputSo3
            }
        }
        else if(inputSo1 < inputSo2){
            if(inputSo2 > inputSo3 && inputSo3 > inputSo1){
                ketQua = inputSo1 + " - " + inputSo3 + " - " + inputSo2

            }else if(inputSo2 < inputSo3){
                ketQua = inputSo1 + " - " + inputSo2 + " - " + inputSo3
                
            }else if(inputSo1 > inputSo3){
                ketQua = inputSo3 + " - " + inputSo1 + " - " + inputSo2
            }
        } 
        

        ketQuaEl.innerHTML = ketQua
    }
    