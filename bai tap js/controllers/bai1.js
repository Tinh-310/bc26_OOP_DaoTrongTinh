

// Khai báo biến đối tượng Menu

// var menu = new  prototypeMenu();
// console.log('menu',menu)
var mangMenu = [];
var validator = new Validation();
// Viết chức năng cho btnThemMon
document.querySelector('#btnThemMon').onclick = function (){
    //Lấy thông tin người dùng nhập từ dao diện
    var menu = new prototypeMenu();

    menu.giaTien = document.querySelector('#giaTien').value;
    menu.maMonAn = document.querySelector('#maMonAn').value;
    menu.tenMonAn = document.querySelector('#tenMonAn').value;
    menu.linkAnh = document.querySelector('#linkAnh').value;


    // Bắt Validation ( bắt lỗi dữ liệu input ko hợp lợi )
    var valid = true ; // Cờ hiệu 

    valid &= validator.kiemTraRong(  menu.giaTien,'#spanGiaMon') 
    & validator.kiemTraRong (menu.maMonAn, '#spanMaMon')
    & validator.kiemTraRong (menu.tenMonAn, '#spanTenMon')
    & validator.kiemTraRong (menu.linkAnh, '#spanLink') ;

    if (!valid) { // 0 <=> false
        return;
    }

    // Lưu thông tin Menu vào mảng 
    mangMenu.push(menu);

    //gọi hàm tạo table 
    renderTable(mangMenu);
   


}


function renderTable(arrMangMenu){
    var ketQua = '';
    // Duyệt mảng 
    for(var index = 0 ; index < arrMangMenu.length; index++){
        var taoMenu = arrMangMenu[index];emai

        //Từ biến taoMenu => tạo ra các thẻ tr bằng chuỗi
        ketQua +=`
          <tr>
          <td>${taoMenu.maMonAn}</td>        
          <td>${taoMenu.tenMonAn}</td>        
          <td>${taoMenu.giaTien}</td>        
          <td>
              <img style="width: 100px;height:100px;" src="${taoMenu.linkAnh}"/>
          </td>
          <td>
              <button class="btn btn-danger" onclick = "btnXoaMenu('${taoMenu.maMonAn}')"> Xóa </button>
          </td>

          </tr>
        
        `

    }
    document.querySelector('tbody').innerHTML = ketQua;
    return ketQua; //OutPut
}


// Chức nằng cho btnXoa

function btnXoaMenu(maMonAnClick) {
    console.log('mã món ăn' , maMonAnClick)
    for( var index = 0 ; index < mangMenu.length ; index++){
        var taoMenu = mangMenu[index];
        if (taoMenu.maMonAn === maMonAnClick ){
            mangMenu.splice(index,1);
        }
    }
    renderTable(mangMenu);
}