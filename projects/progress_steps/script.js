const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('#progress')

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

var currentCircle = 1

prev.addEventListener('click', () => {
  currentCircle--
  updateActiveProgress()
  if (currentCircle === 1) {
    next.disabled = false
    prev.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
})

next.addEventListener('click', () => {
  currentCircle++
  updateActiveProgress()

  if (currentCircle === circles.length) {
    next.disabled = true
    prev.disabled = false
    currentCircle = circles.length
  } else {
    next.disabled = false
    prev.disabled = false
  }
})

function updateProgressWidth() {
  progress.style.width = `${
    ((currentCircle - 1) / (circles.length - 1)) * 100
  }%`
}

function updateActiveProgress() {
  circles.forEach((element, index) => {
    if (index < currentCircle) {
      element.classList.add('active')
    } else {
      element.classList.remove('active')
    }
    if (index === currentCircle - 1) {
      element.classList.add('last-active')
    } else {
      element.classList.remove('last-active')
    }
  })
  updateProgressWidth()
}
