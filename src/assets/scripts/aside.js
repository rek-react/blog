
class Aside {
   constructor() {
      this.body = document.body
      this.wrapper = document.querySelector('.wrapper')
      this.aside = document.querySelector('.sidebar')
      this.burger = document.querySelector('.burger')
   }
   handleClickBurger(e) {
      if (this.aside.classList.contains('_show')) {
         this.closeSidebar()
      } else {
         this.showSidebar()
      }
   }
   handleClickDocument(event) {
      const aside = event.target.closest('.sidebar')
      const wrapperMask = event.target.closest('._show-sidebar-mask')
      const burger = event.target.closest('.burger')
      const header = event.target.closest('.header')
      if (wrapperMask && !aside && !burger && !header) {
         this.closeSidebar()
      }
   }
   init() {
      this.burger.addEventListener('click', this.handleClickBurger.bind(this))
      document.addEventListener('click', this.handleClickDocument.bind(this))
   }
   showSidebar() {
      this.burger.classList.add('_active')
      this.body.classList.add('_lock-sidebar')
      this.aside.classList.add('_show')
      this.wrapper.classList.add('_show-sidebar-mask')
   }
   closeSidebar() {
      this.burger.classList.remove('_active')
      this.body.classList.remove('_lock-sidebar')
      this.aside.classList.remove('_show')
      this.wrapper.classList.remove('_show-sidebar-mask')
   }
}

export default new Aside()
