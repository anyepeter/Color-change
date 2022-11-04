const inputs = document.querySelectorAll('input')
console.log(inputs)
function checkChange(){
  const suffix = this.dataset.sizing ||''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
  
}  

inputs.forEach((element) => {
  element.addEventListener('change',checkChange)
})

