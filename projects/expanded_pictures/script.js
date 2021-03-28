const allPics = document.querySelectorAll('.pic')
console.log(allPics)

allPics.forEach((pic,index) => {
  
  pic.addEventListener('click', () => {
    removeAllActiveClasses(index)
    pic.classList.add('active')
  })
})

function removeAllActiveClasses(index) {
  allPics.forEach((pic,indexP) => {
      if(indexP !== index){
        pic.classList.remove('active')
      }
   
  })
}
