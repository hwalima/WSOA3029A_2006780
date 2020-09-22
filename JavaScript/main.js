const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    },
    1024:{
        items:4
    }
}

$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /*toggle click event*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    //owl-courasel for blog
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });



});