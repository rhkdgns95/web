document.addEventListener('DOMContentLoaded', function() {
    console.log("MATERIALIZE_MODALS_JS");
    options = "opacity";
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

// $(document).ready(function(){
//     $('.modal').modal();
// });