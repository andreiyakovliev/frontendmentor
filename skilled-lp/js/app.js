(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function updateImage() {
        let img = document.getElementById("responsive-img");
        if (window.innerWidth < 767.98) img.src = "img/smallmain-img.svg"; else img.src = "img/main-img.svg";
    }
    window.addEventListener("resize", updateImage);
    window.addEventListener("load", updateImage);
    window["FLS"] = true;
})();