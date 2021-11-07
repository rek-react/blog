
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