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