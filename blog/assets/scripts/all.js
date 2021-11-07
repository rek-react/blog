
// menu
const body = document.body
const wrapper = document.querySelector('.wrapper')
const aside = document.querySelector('.sidebar')
const burger = document.querySelector('.burger')

if(aside){
   checkAside()
}
function checkAside(){
   burger.addEventListener('click', ()=>{
      if(aside.classList.contains('_show')){
         closeSidebar()
      } else{
         showSidebar()
      }
   })
   function closeSidebar(){
      burger.classList.remove('_active')
      body.classList.remove('_lock-sidebar')
      aside.classList.remove('_show')
      wrapper.classList.remove('_show-sidebar-mask')
   }
   function showSidebar(){
      burger.classList.add('_active')
      body.classList.add('_lock-sidebar')
      aside.classList.add('_show')
      wrapper.classList.add('_show-sidebar-mask')
      
   }
   document.addEventListener('click', (event)=>{
      const aside = event.target.closest('.sidebar')
      const wrapperMask = event.target.closest('._show-sidebar-mask')
      const burger = event.target.closest('.burger')
      const header = event.target.closest('.header')
      if(wrapperMask && !aside && !burger && !header){
         closeSidebar()
      }
   })
}
function events() {
   document.addEventListener('click', (event) => {
      //sub-menu
      const menuArrow = document.querySelectorAll('.has-arrow')
      if(menuArrow){
         const menuLink = event.target.closest('.has-arrow')
         if (menuLink) {
            const menuSub = menuLink.nextElementSibling
            menuLink.classList.toggle('_active')
            menuSub.classList.toggle('_show')
            event.preventDefault()
         }
      }

   })
}
events()

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


//modal
const modalNavs = document.querySelectorAll('[data-modal]')

if(modalNavs){
   modal()
}
function modal(){
   document.addEventListener('click', event => {
      let modalNav = event.target.closest( '[data-modal]')
      let modal = event.target.closest('.modal')
      let modalBody = event.target.closest('.modal__body')
      let modalCloseBtn = event.target.closest( '.modal__close')
      if(modalNav){
         modalClick(modalNav)
      }
      if(modalCloseBtn){
         modalClose(modalCloseBtn)
      }
      if (modal && !modalBody) {
         modal.classList.remove('_show')
         body.classList.remove('_lock-modal')
      }
   })
  
}
function modalClick(modalNav){
   const modalAttributeValue = modalNav.dataset.modal
   const modal = document.querySelector(modalAttributeValue)
   modal.classList.add('_show')
   body.classList.add('_lock-modal')
}
function modalClose(modalCloseBtn){
   const modal = modalCloseBtn.closest('.modal')
   
   modal.classList.remove('_show')
   body.classList.remove('_lock-modal')
}

const textareas = document.querySelectorAll('textarea')
if(textareas){
   for (let index = 0; index < textareas.length; index++) {
      const textarea = textareas[index];
      let heightTextarea = textarea.offsetHeight
      document.addEventListener('input', (event)=>{
         if(event.target.closest('textarea')){
            let $this = event.target
            $this.style.height = heightTextarea + 'px'
            $this.style.height = $this.scrollHeight + 'px'

         }
         
      })
   }
}
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('.sign__form')

if(form){
   form.addEventListener('submit', (event)=>{
      const inputs = form.querySelectorAll('input')
      if(email.value !== 'viktorhelp12@gmail.com' && password.value !== 'gta5gta4'){
         for (let index = 0; index < inputs.length; index++) {
            const input = inputs[index];
            input.classList.add('_error')
         }
         event.preventDefault()
      } else{
         inputs.classList.remove('_error')
      }
      

   })
}

const seacrhForms = document.querySelectorAll('#form-search')
const searchs = document.querySelectorAll('#search')
const searchIndex = document.querySelector('[data-index]')
const searchSign = document.querySelector('[data-sign]')
if(searchs){
   searchCheck()
}
function  searchCheck() {
   for (let index = 0; index < seacrhForms.length; index++) {
      const seacrhForm = seacrhForms[index];
      seacrhForm.addEventListener('submit', (event)=>{
         for (let index = 0; index < searchs.length; index++) {
            const search = searchs[index];
            let word = 'Создание сайта'
            let seacrhWord = word.toLowerCase().replace(/\s/g, '')
            let seacrhInputValue = search.value.toLowerCase().replace(/\s/g, '')
            if( seacrhInputValue!== seacrhWord){
               console.log(searchSign);
               if(searchIndex){
                  searchIndex.setAttribute('action', 'not-search.html')

               } else if(searchSign){
                  searchSign.setAttribute('action', 'not-search-sign-up.html')
               }
            } 
         }
      })
      
   }
}