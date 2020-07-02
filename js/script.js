//This function makes the "Back to top" and "Scroll down" functions appear and dissapear
function scrollFunction() {
    //Get the position of the current scrollposition, plus the length of the full size of the screen
    var scrollPos = window.scrollY,
        siteHeight = document.body.clientHeight - window.innerHeight;

    //After 40% of the page, making sure with the bool scrollVisible, switch from scrolldown to scrollbacktotop 
    if ((scrollPos / siteHeight) > 0.4 && scrollVisible) {
        document.querySelector("#scrolldown").classList.add("hideScroll");
        setTimeout(function () { document.querySelector("#backtotop").classList.add("showBackToTop") }, 500);
        scrollVisible = false;
    }

    //Before 40% of the page, making sure with the bool scrollVisible, switch from scrollbacktotop to scrolldown
    else if ((scrollPos / siteHeight) < 0.4 && !scrollVisible) {
        setTimeout(function () { document.querySelector("#scrolldown").classList.remove("hideScroll"); }, 500);
        document.querySelector("#backtotop").classList.remove("showBackToTop");
        scrollVisible = true;
    }
}
//Set global bool scrollVisible as it's standardly loaded in
var scrollVisible = true;

//fire when scrollposition changes
window.addEventListener("scroll", scrollFunction);
//fire when page is loaded
scrollFunction();


var scrollVisible = true;
var meidShown = false;
function scrollFunction() {
    var scrollPos = window.scrollY;
    if (document.body.classList.contains("home")) {
        var sectionHeight = document.querySelector("section.fullscreen").clientHeight - 100;
        if (document.body.classList.contains("home")) {
            if (scrollPos > sectionHeight && !meidShown) {
                showMeid(true);
            }
            else if (scrollPos < sectionHeight && meidShown) {
                showMeid(false);
            }
        }
    }
    var siteHeight = document.body.clientHeight - window.innerHeight;
    if ((scrollPos / siteHeight) > 0.3 && scrollVisible) {
        document.querySelector("#backtotop").classList.add("showBackToTop");
        scrollVisible = false;
    }
    //Before 40% of the page, making sure with the bool scrollVisible, switch from scrollbacktotop to scrolldown
    else if ((scrollPos / siteHeight) < 0.3 && !scrollVisible) {
        document.querySelector("#backtotop").classList.remove("showBackToTop");
        scrollVisible = true;
    }
}

function showMeid(x) {
    var meid = document.querySelector(".home #menu a.meid");
    if (x) {
        meid.classList.add("show");
        meidShown = true;
    }
    else {
        meid.classList.remove("show");
        meidShown = false;
    }
}
window.addEventListener("scroll", scrollFunction);
scrollFunction();


var clickAnywhere = false;
function toggleColorMenu() {
    document.querySelector('.othercolors').classList.toggle('showColors');
    setTimeout(function () { clickAnywhere = true; }, 50);
}

window.addEventListener("click", function () {
    if (clickAnywhere) {
        document.querySelector('.othercolors').classList.toggle('showColors');
        clickAnywhere = false;
    }
});

window.addEventListener("touchstart", function () {
    if (clickAnywhere) {
        document.querySelector('.othercolors').classList.toggle('showColors');
        clickAnywhere = false;
    }
});

function reOrderProductImages() {
    if (document.body.classList.contains("webshop")) {
        var w = document.documentElement.clientWidth,
            moodPictures = document.querySelectorAll(".moodpicture"),
            i;
        if (w < 800 && windowToggle) {
            moodPictures[0].style = "order: 2";
            moodPictures[1].style = "order: 10";
            moodPictures[2].style = "order: 14";
            moodPictures[3].style = "order: 16";
            moodPictures[4].style = "order: 20";
            moodPictures[5].style = "order: 24";
            windowToggle = false;
        }
        else if (w > 800 && !windowToggle) {
            moodPictures[0].style = "order: 3";
            moodPictures[1].style = "order: 11";
            moodPictures[2].style = "order: 11";
            moodPictures[3].style = "order: 16";
            moodPictures[4].style = "order: 19";
            moodPictures[5].style = "order: 21";
            windowToggle = true;
        }
    }
}

if (document.body.classList.contains("webshop")) {
    var windowToggle = false;
    if (document.documentElement.clientWidth < 800) { windowToggle = true; }
    reOrderProductImages
}
window.addEventListener("resize", reOrderProductImages);
