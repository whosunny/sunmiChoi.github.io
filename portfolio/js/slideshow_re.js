$(document).ready(function(){ 
    $('.bxslider').bxSlider({
        auto: true,
        speed: 500,
        pause: 3000,
        autoHover: true,
        touchEnabled: (navigator.maxTouchPoints > 0)
    })
});