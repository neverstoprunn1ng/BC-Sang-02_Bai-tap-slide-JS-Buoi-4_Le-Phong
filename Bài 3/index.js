/* Mô hình 3 khối:

Input: 3 số nguyên
Các bước xử lý: 
    Bước 1: Tạo các biến input1, input2, input3, ketQua, soChan, soLe
    Bước 2: Cho người dùng nhập và gán vào các biến input1, input2, input3
    Bước 3: Xét từng input là chẵn hay không
    Bước 4: Nếu bước 3 kết quả là true thì tăng 1 đơn vị cho soChan
    Bước 5: Ngược lại thì tăng 1 đơn vị cho soLe
    Bước 6: Xuất kết quả
Output: Tính ra bao nhiêu số chẵn và lẻ    
*/

var inputSo1El = document.getElementById('inputSo1')
var inputSo2El = document.getElementById('inputSo2')
var inputSo3El = document.getElementById('inputSo3')
var ketQuaEl = document.getElementById('ketQua')
    
function ketQua() {
        var inputSo1 = inputSo1El.value * 1 
        var inputSo2 = inputSo2El.value * 1
        var inputSo3 = inputSo3El.value * 1
        var soChan = 0
        var soLe = 0
        var ketQua

        if(inputSo1 % 2 == 0){
            soChan += 1
        }else {
            soLe += 1
        }
        if(inputSo2 % 2 == 0){
            soChan += 1
        }else { 
            soLe += 1
        }
        if(inputSo3 % 2 == 0){
            soChan += 1
        }else { 
            soLe += 1
        }
        ketQua = "Số Chẵn: " + soChan + " và " + "Số Lẻ: " + soLe
        ketQuaEl.innerHTML = ketQua
    }