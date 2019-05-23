document.addEventListener('DOMContentLoaded', function() {
    console.log("MATERIALIZE_SELECT_JS");
    var options = "classes";
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

// $(function() {
//     console.log("MATERIALIZE_SELECT_JS");
//
//     document.addEventListener('DOMContentLoaded', function() {
//         var elems = document.querySelectorAll('select');
//         var instances = M.FormSelect.init(elems, options);
//     });
//     $('select').formSelect();
// })