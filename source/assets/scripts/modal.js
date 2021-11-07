
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
