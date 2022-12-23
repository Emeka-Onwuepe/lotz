copyRightDate(2022)

function copyRightDate(x) {
    var d = new Date;
    var year = d.getFullYear();
    var footerDate = document.getElementById("footerdate");
    if (year == x) {
        footerDate.innerHTML = year;
    } else {
        footerDate.innerHTML = x + "-" +
            year;
    }
}

const backToTop = () => {
    let y_axis_offset = window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    x = "300";
    let backToTopButton = document.getElementById("backToTop");
    if (y_axis_offset >= x) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

document.getElementsByTagName("BODY")[0].onscroll = function() {
    backToTop()
};

window.addEventListener('scroll', function() {
    backToTop()
});

document.getElementsByTagName("BODY")[0].onresize = function() {
    myResize()
};

//for Safari and his brothers
window.addEventListener('scroll', function() {
    backToTop()
});