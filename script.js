const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('nav-list')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  });
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
  
  
}



    
// if (search) {
//   search.addEventListener('click', () => {
//     nav.classList.add('active')
//   });




/*--------------------Carousel------------*/
  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
  autoplay:true,
  autoplayTimeout: 1800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
  
