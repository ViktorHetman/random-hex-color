const text = document.querySelector('.text')
const block = document.querySelector('.block')
const button = document.querySelector('.btn')

const hex = '0123456789ABCDEF'

const getRandomColor = () => {
  let color = '#'

  for (i=0; i<6; i++) {
    color= color + hex[Math.floor(Math.random(hex) * 16)]
  }
  return color
}


