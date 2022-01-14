
// Xây dựng class cho việc kiểm tra dư liệu input 
function Validation (){
    this.kiemTraRong = function (value , selectorError){
        if ( value.trim() === ''){
            document.querySelector(selectorError).innerHTML = 'Không được bỏ trống !';
            return false ; 

        }
        document.querySelector(selectorError).innerHTML = '';
        return true ;
    }

    

}