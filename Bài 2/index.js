/* 
Input: Chọn người sử dụng máy
Các bước xử lý:
    Bước 1: tạo biến nhanVat, cauChao
    Bước 2: cho người dùng chọn option từ dropdown select
    Bước 3: xét giá trị option được chọn để xuất ra câu chào tương ứng
Output:
    Đưa ra câu chào phù hợp
*/

var nhanVatEl = document.getElementById('selectOption')
var cauChaoEl = document.getElementById('xuatCauChao')

function chaoHoi(){
    var nhanVat = nhanVatEl.value
    var cauChao  
    switch (nhanVat){
    case "Ba":
        cauChao = "hello Ba";
        break;
    case "Mẹ":
        cauChao = "hello Mẹ";
        break;
    case "Anh trai":
        cauChao = "hello Anh trai";
        break;
    case "Em gái":
        cauChao = "hello Em gái";
        break;            
    default:
        cauChao = "Mời chọn lại";
    }

    cauChaoEl.innerHTML = cauChao
}