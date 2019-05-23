// select 제어 - 해당 양식 띄우기
var selector = document.querySelector('.row .contents-wrapper .selector');
console.log(selector);

function formToggleActive(objs, position) {
    [].forEach.call(objs, function(obj) {
       if(obj.classList.contains('active')) {
           obj.classList.toggle('active');
       }
    });
    console.log(objs[position]);
    objs[position].classList.toggle('active');
}

selector.onchange = function(e) {
    var options = e.target.options;
    // var option = options[options.selectedIndex];
    var position = options.selectedIndex - 1;
    var forms = document.querySelectorAll('.form-wrapper .form-box');
    formToggleActive(forms, position);
    // form.classList.add('active');
}
