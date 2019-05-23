var tableScreen = document.querySelector(".screen-box");
var fixedLayout = document.querySelector('.fixed-layout');
var tableHeader = document.querySelector(".screen-box .table-header");
var tableContents = document.querySelector('.screen-box .table-contents');
var ths = document.querySelectorAll('.table-header tr th');
var tds = document.querySelectorAll('.table-contents tr:nth-of-type(1) td');
var trs = document.querySelectorAll('.table-contents tr');
var thFixed = document.querySelectorAll('.table-header tr th.scroll-fixed');
var fixedTds = document.querySelectorAll('.table-contents tr td.scroll-fixed');

console.log(ths);
var i = 0;
var t = 0;
var tdInitArr = [];
var agoScroll = 0;
var Resizing = false; // 화면 resize는 .5초에 한번씩 인식하도록 해야함.



// 테이블 내용 셀 영역 잡기
[].forEach.call(trs, function(tr) {
    // scrollFixed 첫 부분이 이상함. 수정 예정-
    if(t == 0) {
        tdInitArr[t++] = tr.offsetTop + ths[0].scrollHeight;
    } else {
        tdInitArr[t++] = tr.offsetTop + ths[0].scrollHeight + 1;
    }
});

// 테이블 헤더 width값 조정
// tableContents.style.width = tableHeader.scrollWidth+ "px";
[].forEach.call(ths, function(th) {
    var width = tds[i++].scrollWidth;

    console.log("HeaderWidth: "+ th.scrollWidth);
    console.log("bodyWidth: "+ width);
    if(th.scrollWidth > width) {
        tds[i - 1].style.minWidth = th.scrollWidth + "px";
        tds[i - 1].style.maxWidth = th.scrollWidth + "px";
        console.log(i);
    } else {
        th.style.minWidth = width  +  "px";
        th.style.maxWidth = width  +  "px";
    }
});



// Resize Start
// 웹 화면이 Resize되면, Table의 너비도 수정해야되므로 resize사용
function tableResize() {
    var i = 0;

    // 테이블 헤더 width값 조정
    [].forEach.call(ths, function(th) {
        var width = tds[i++].scrollWidth + "px";
        th.style.minWidth = width;
        th.style.maxWidth = width;
    });

    // tableContents.style.width = tableHeader.scrollWidth+ "px";
    // tableScreen.style.width = tableHeader
}

function windowResize() {
    if(!Resizing) {
        Resizing = true;
        setTimeout(function() {
            Resizing = false;
        }, 500);
        tableResize();
    }
}


var fixedStartLeft = thFixed[0].offsetLeft;


// Table Scroll Start
// Table Scroll 2
tableScreen.addEventListener('scroll', function() {
    var screenLeft = this.scrollLeft;
    var isScrollTopZero = this.scrollTop === 0;
    var isStart = screenLeft >= fixedStartLeft;
    var hasActive = this.classList.contains('active');
    var screenTop2 = this.scrollTop;
    var isScrollUpDown = null;
    var scrolling = 0;

    console.log("screenLeft: "+ screenLeft);
    console.log("fixedStartLeft: "+ fixedStartLeft);
    if(isScrollTopZero && tableHeader.classList.contains('active')) {
        tableHeader.classList.remove('active');
    } else if(!isScrollTopZero && !tableHeader.classList.contains('active')){
        tableHeader.classList.add('active');
    }

    if(!isStart) {
        console.log("isNotStart");
        tableHeader.style.left = "-" + screenLeft + "px";
        tableContents.style.paddingLeft = 0 + "px";
    } else {
        console.log("isStart");
        thFixed[0].style.left = (screenLeft - thFixed[0].offsetWidth) + "px";
        tableHeader.style.left = (thFixed[0].offsetWidth - screenLeft) + "px";
        tableContents.style.paddingLeft = thFixed[0].offsetWidth + "px";
    }

    if(screenLeft > fixedStartLeft && !hasActive) {
        console.log("add");
        this.classList.add('active');

        t = 0;
        [].forEach.call(fixedTds, function(td) {
            td.style.top = tdInitArr[t++] - screenTop2 + "px";
            td.style.width = thFixed[0].scrollWidth + "px";
        });

    } else if(screenLeft <= fixedStartLeft && hasActive) {
        console.log("remove");
        this.classList.remove('active');
        thFixed[0].style.left = "auto";

        t= 0 ;
        [].forEach.call(fixedTds, function(td) {
            console.log("init :" + tdInitArr[t]);
            td.style.top = tdInitArr[t++] + "px";
            // td.style.minWidth = "auto";
        });
    }


    if(agoScroll < screenTop2) {
        isScrollUpDown = "down";
        scrolling = screenTop2 - agoScroll;
    }
    else if(agoScroll > screenTop2) {
        isScrollUpDown = "up";
        scrolling = agoScroll - screenTop2;
    }
    // else if(agoScroll == screenTop2) {
    //     isScrollUpDown = null;
    // }

    agoScroll = screenTop2;

    if(hasActive) {
        var j = 0;

        if(isScrollUpDown != null) {
            if(isScrollUpDown == "up") {
                console.log("scrollUp");
                [].forEach.call(fixedTds, function(td) {
                    td.style.top = td.offsetTop + scrolling + "px";
                    console.log(++j + ", td_offsetTop:" + td.offsetTop);
                });
            } else if(isScrollUpDown == 'down') {
                console.log("scrollDown");
                [].forEach.call(fixedTds, function(td) {
                    td.style.top = td.offsetTop - scrolling + "px";
                    console.log(++j + ", td_offsetTop:" + td.offsetTop);
                });
            }
        }
    }
    console.log(screenLeft);
});
// Table Scroll End

window.addEventListener('resize', windowResize, false);



// Table 메뉴아이콘 회전효과.
setTimeout(function() {
    var icons =  document.getElementsByClassName('menu-icon');
    [].forEach.call(icons, function(icon) {
        icon.classList.add('active');
    });
}, 100);
