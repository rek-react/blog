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