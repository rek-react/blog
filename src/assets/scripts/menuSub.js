class MenuSub {
   constructor() {
      this.menuArrow = document.querySelectorAll('.has-arrow')
   }
   handleClickDocument(event) {
      if (this.menuArrow) {
         const menuLink = event.target.closest('.has-arrow')
         if (menuLink) {
            const menuSub = menuLink.nextElementSibling
            menuLink.classList.toggle('_active')
            menuSub.classList.toggle('_show')
            event.preventDefault()
         }
      }
   }
   init() {
      document.addEventListener('click', this.handleClickDocument.bind(this))
   }
}

export default new MenuSub()