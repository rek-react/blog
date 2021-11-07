
// swiper stories
const stories = document.querySelector('.stories')
if(stories){
   const swiper_stories = new Swiper('.stories__body', {
      spaceBetween:13,
      freeMode:true,
      breakpoints: {
         630: {
            slidesPerView: 4,
         },
         525: {
            slidesPerView: 3,
         },
         270: {
            slidesPerView:2,
         }
      }
   })
}
// swiper post
const post = document.querySelector('.post-container')
if(post){
   const swiper_stories = new Swiper('.post-container', {
      allowTouchMove: false,
      watchOverflow: true,
      loop:true,
      autoHeight:true,
      pagination:{
         el: '.swiper-pagination',
         clickable: true,
         renderBullet: function (index, classsName) {
            return '<span class="' + classsName + '">' + (index + 1) + '</span>'
         }
      },
      navigation:{
         prevEl : '#prev-arrow',
         nextEl : '#next-arrow',
      }
      
      
   })
}
