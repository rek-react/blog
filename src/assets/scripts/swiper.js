import Swiper, { Pagination, Navigation } from 'swiper'

class SwiperUser {
   constructor() {
      this.stories = document.querySelector('.stories__body')
      this.post = document.querySelector('.post-container')
   }
   init() {
      if (this.stories) {
         new Swiper(this.stories, {
            spaceBetween: 13,
            freeMode: true,
            breakpoints: {
               630: {
                  slidesPerView: 4,
               },
               525: {
                  slidesPerView: 3,
               },
               270: {
                  slidesPerView: 2,
               }
            }
         })
      }
      if (this.post) {
         new Swiper(this.post, {
            allowTouchMove: false,
            watchOverflow: true,
            loop: true,
            modules: [Pagination, Navigation],
            autoHeight: true,
            pagination: {
               el: '.swiper-pagination',
               clickable: true,
               renderBullet: function (index, classsName) {
                  return '<span class="' + classsName + '">' + (index + 1) + '</span>'
               }
            },
            navigation: {
               prevEl: '#prev-arrow',
               nextEl: '#next-arrow',
            }


         })
      }
   }
}

export default new SwiperUser()