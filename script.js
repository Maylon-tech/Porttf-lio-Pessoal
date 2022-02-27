const navBar = document.querySelector('.navbar')

$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrolly > 20) {
            navBar.classList.add("sticky").scroll;
        } else {
          navBar.classList.remove("sticky");
        }
    });
});

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        Responive:{
            0:{
                item:1,
                nav:false
            },
             600:{
                item:2,
                nav:false
            },
             1000:{
                item:3,
                nav:false
            }
        }
    });