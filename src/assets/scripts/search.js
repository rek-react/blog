class Search {
   constructor() {
      this.seacrhForms = document.querySelectorAll('#form-search')
      this.searchs = document.querySelectorAll('#search')
      this.searchIndex = document.querySelector('[data-index]')
      this.searchSign = document.querySelector('[data-sign]')
   }
   handleSubmitForm(e) {
      for (let index = 0; index < this.searchs.length; index++) {
         const search = this.searchs[index];
         let word = 'Создание сайта'
         let seacrhWord = word.toLowerCase().replace(/\s/g, '')
         let seacrhInputValue = search.value.toLowerCase().replace(/\s/g, '')
         if (seacrhInputValue !== seacrhWord) {
            if (this.searchIndex) {
               this.searchIndex.setAttribute('action', 'not-search.html')

            } else if (this.searchSign) {
               this.searchSign.setAttribute('action', 'not-search-sign-up.html')
            }
         }
      }
   }
   init() {
      if (this.searchs) {
         for (let index = 0; index < this.seacrhForms.length; index++) {
            const seacrhForm = this.seacrhForms[index];
            seacrhForm.addEventListener('submit', this.handleSubmitForm.bind(this))

         }
      }
   }
}
export default new Search()

