
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