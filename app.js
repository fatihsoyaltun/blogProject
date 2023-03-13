

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
            nav:true,
            loop:false,
            dots:false
        }
    }
});

// collapse icon
const collapseBtns = document.querySelectorAll('.collapseBtn');
collapseBtns.forEach((collapseBtn) => {
  collapseBtn.addEventListener('click', () => {
    const icon = collapseBtn.querySelector('.collapse_icon');
    const collapse = collapseBtn.nextElementSibling;
    if (icon.classList.contains('fa-chevron-down')) {
      icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
      icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
    collapseBtns.forEach((otherCollapseBtn) => {
      const otherCollapse = otherCollapseBtn.nextElementSibling;
      if (otherCollapse != collapse) {
        otherCollapse.classList.remove('show');
        otherCollapseBtn.querySelector('.collapse_icon').classList.replace('fa-chevron-up', 'fa-chevron-down');
      }
    });
  });
});

// sign
const signBtns = document.querySelectorAll(".signBtn")

signBtns.forEach(btn => {
  btn.addEventListener('click',()=>{
    window.location.href="routers/sign_in.html";
  });
});