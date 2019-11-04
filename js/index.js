
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

var npds = document.getElementById('pds')
npds.onclick = function () {
    swal("Waiting~", "Something on the way!", "info")
}

window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
        speed: 1000,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        effect: 'coverflow',//  effect: 'flip',effect: 'coverflow',slide', 'fade',cube
        grabCursor: true,
        cube: {
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });

}
