// 이미지파일 여부 체크
function chk_file_type(obj) {
    var file_kind = obj.value.lastIndexOf('.');
    var file_name = obj.value.substring(file_kind+1,obj.length);
    var file_type = file_name.toLowerCase();

    var check_file_type= [];

    check_file_type=['jpg','gif','png','jpeg','bmp'];

    if(check_file_type.indexOf(file_type)==-1){
        alert('이미지 파일만 선택할 수 있습니다.');
        var parent_Obj=obj.parentNode
        // var node = parent_Obj.replaceChild(obj.cloneNode(true), obj);
        return false;
    } else {
        return true;
    }
}

// 이미지 파일 이미지 등록 표시
function image_register(input, imgSection) {
    console.log(input.files);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(e.target.result);
            imgSection.src = e.target.result;
            // $('#image_section').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// 회사 Logo 파일 등록 input[type="file"]
// 직인(도장) 등록 input[type="file"]
var inputLogoFile = document.getElementById('input_logo_file');
var inputSignFile = document.getElementById('input_sign_file');

// 회사 Logo IMG [id: img_logo]
// 직인(도장) IMG [id: img_sign]
var imgLogoSection = document.getElementById('img_logo');
var imgSignSection = document.getElementById('img_sign');

inputLogoFile.onchange = function(e) {
    var isImgFile = chk_file_type(this);

    if(!isImgFile) {
        e.stopPropagation()
    } else {
        image_register(this, imgLogoSection);
    }
}

inputSignFile.onchange = function(e) {
    var isImgFile = chk_file_type(this);
    if(!isImgFile) {
        e.stopPropagation()
    } else {
        image_register(this, imgSignSection);
    }
}



//
//
//
//
//
// var isFind = undefined;
// var interval;
// interval = setInterval( function() {
//     if(isFind === undefined) {
//         // 회사 Logo 파일 등록 input[type="file"]
// // 직인(도장) 등록 input[type="file"]
//         var inputLogoFile = document.getElementById('input_logo_file');
//         var inputSignFile = document.getElementById('input_sign_file');
//
// // 회사 Logo IMG [id: img_logo]
// // 직인(도장) IMG [id: img_sign]
//         var imgLogoSection = document.getElementById('img_logo');
//         var imgSignSection = document.getElementById('img_sign');
//
//         inputLogoFile.onchange = function(e) {
//             var isImgFile = chk_file_type(this);
//
//             if(!isImgFile) {
//                 e.stopPropagation()
//             } else {
//                 image_register(this, imgLogoSection);
//             }
//         }
//
//         inputSignFile.onchange = function(e) {
//             var isImgFile = chk_file_type(this);
//             if(!isImgFile) {
//                 e.stopPropagation()
//             } else {
//                 image_register(this, imgSignSection);
//             }
//         }
//     }
//     console.log("check: " + isFind);
//
//     if(!isFind)
//         isFind = true;
//     else
//         clearInterval(interval);
//
// }, 1000);
