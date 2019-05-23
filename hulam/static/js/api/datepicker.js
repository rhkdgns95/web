//
// options = 'format';
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
//     console.log(options);
// });
document.addEventListener('DOMContentLoaded', function() {
    console.log("MATERIALIZE_DATEPICKER_JS");
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, "format");
});

// $(document).ready(function(){
//     $('.datepicker').datepicker();
// });
