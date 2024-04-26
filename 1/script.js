const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 3
canvas.height = window.innerHeight - 5.1

const context = canvas.getContext("2d")

context.fillRect(100, 100, 400, 100)

console.log(canvas);