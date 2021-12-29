/* 
Input: 3 cạnh của tam giác
Các bước xử lý:
    Bước 1: Tạo biến 3 cạnh tam giác A, B, C, ketQua
    Bước 2: Cho người dùng nhập và gán vào A, B, C
    Bước 3: Xét loại tam giác theo điều kiện:
        Có 2 cạnh bằng nhau: tam giác cân
        Có 3 cạnh bằng nhau: tam giác đều
        Có 3 cạnh thỏa mãn công thức Pytago: tam giác vuông
        Không thỏa cả 3 điều kiện trên: tam giác thường
    Bước 4: Xuất kết quả
Outout: Cho biết loại tam giác 
*/

var inputCanhAEl = document.getElementById('inputCanhA')
var inputCanhBEl = document.getElementById('inputCanhB')
var inputCanhCEl = document.getElementById('inputCanhC')
var ketQuaEl = document.getElementById('ketQua')
    
function ketQua() {
        var A = inputCanhAEl.value * 1 
        var B = inputCanhBEl.value * 1
        var C = inputCanhCEl.value * 1
        var ketQua

    if((A == B && A != C) || (A == C && A != B) || (B == C && B != A)){
        ketQua = "Tam giác cân"
    }
    else if(A == B && B == C){
        ketQua = "Tam giác đều"
    }
    else if((A*A == B*B + C*C) || (B*B == C*C + A*A) || (C*C == A*A + B*B)){
        ketQua = "Tam giác vuông"
    }
    else {
        ketQua = "Tam giác thường"
    }

    ketQuaEl.innerHTML = ketQua
}
