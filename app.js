

//Aos animate
AOS.init({
    duration: 1200,
})

// OWl carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:false,
            dots:false
        },
        600:{
            items:5,
            nav:false,
            dots:false
        },
        1000:{
            items:10,
            nav:false,
            loop:false,
            dots:false
        }
    }
});

// collapse icon
const icon = document.querySelector("#collapse_icon");
document.querySelector(".collapseBtn").addEventListener("click",() => {
    if (icon.className === "fa-solid fa-chevron-down") {
        icon.className = "fa-solid fa-chevron-up";
    }else{
        icon.className = "fa-solid fa-chevron-down";
    }
});


