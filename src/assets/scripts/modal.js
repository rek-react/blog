

class Modal {
   constructor() {
      this.modalNavs = document.querySelectorAll('[data-modal]')
      this.body = document.body
   }
   handleClickDocument(event) {
      let modalNav = event.target.closest('[data-modal]')
      let modal = event.target.closest('.modal')
      let modalBody = event.target.closest('.modal__body')
      let modalCloseBtn = event.target.closest('.modal__close')
      if (modalNav) {
         this.modalClick(modalNav)
      }
      if (modalCloseBtn) {
         this.modalClose(modalCloseBtn)
      }
      if (modal && !modalBody) {
         modal.classList.remove('_show')
         this.body.classList.remove('_lock-modal')
      }
   }
   init() {
      if (this.modalNavs) {
         document.addEventListener('click', this.handleClickDocument.bind(this))
      }
   }
   modalClick(modalNav) {
      const modalAttributeValue = modalNav.dataset.modal
      const modal = document.querySelector(modalAttributeValue)
      modal.classList.add('_show')
      this.body.classList.add('_lock-modal')
   }
   modalClose(modalCloseBtn) {
      const modal = modalCloseBtn.closest('.modal')
      modal.classList.remove('_show')
      this.body.classList.remove('_lock-modal')
   }
}
export default new Modal()