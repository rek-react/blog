class Textarea {
   constructor() {
      this.textareas = document.querySelectorAll('textarea')
   }
   handleInputTextarea(event) {
      if (event.target.closest('textarea')) {
         let $this = event.target
         $this.style.height = this.heightTextarea + 'px'
         $this.style.height = $this.scrollHeight + 'px'
      }
   }
   init() {
      if (this.textareas) {
         for (let index = 0; index < this.textareas.length; index++) {
            const textarea = this.textareas[index];
            this.heightTextarea = textarea.offsetHeight
            document.addEventListener('input', this.handleInputTextarea.bind(this))
         }
      }
   }
}

export default new Textarea()