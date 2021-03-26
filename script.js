let diameter = 0
let radius = 0
let pie = 3.14
let answer = 0

document.getElementById('enter').addEventListener('click', enter)
document.getElementById('submit').addEventListener('click', submit)

function enter () {
  diameter = document.getElementById('input').value
  diameter = parseInt(input)
  answer = Math.PI;  diameter
  alert(answer)
}
function submit () {
  radius = document.getElementById('input').value
  radius = parseInt(input)
  answer =  Math.PI;  radius
  alert(answer)
}
