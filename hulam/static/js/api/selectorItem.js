
/////// selector-list-item
var selectorItems = document.getElementsByClassName('selector-item');
var currentSelectorItems = document.getElementsByClassName('current-active');
var currentSelectorItem = currentSelectorItems[0];
[].forEach.call(selectorItems, function(item) {
    item.addEventListener('mouseenter', function() {
        this.classList.add('active');
        currentSelectorItem.classList.remove('current-active');
    })
    item.addEventListener('mouseleave', function() {
        this.classList.remove('active');
        currentSelectorItem.classList.add('current-active');
    })
});

//
// selectorItems[1].addEventListener('mouseenter', function() {
//     currentSelectorItems[0].classList.remove('current-active');
//     this.classList.add('active');
//     selectorItems[0].classList.remove('active');
//     console.log(this.children[0]);
// });
// selectorItems[1].addEventListener('mouseleave', function() {
//     console.log(ab);
//     ab.classList.add('current-active');
//     this.classList.remove('active');
//     // currentSelectorItem[0].classList.add('current-active');
// });
//
//
// console.log(selectorItems[0]);