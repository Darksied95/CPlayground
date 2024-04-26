//CREATING MULTIPLE ANIMATED CIRCLES

const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 3
canvas.height = window.innerHeight - 5.1

const context = canvas.getContext("2d")

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    draw = function () {
        console.log(this.x);
        console.log("working");
        context.beginPath();
        context.arc(x, y, 30, 0, Math.PI * 2, false);
        context.strokeStyle = "blue";
        context.stroke();
    };
}

const circle = new Circle(200, 200);


let x = Math.random() * innerWidth
let y = Math.random() * innerHeight
let dx = (Math.random() - 0.5) * 8
let dy = (Math.random() - 0.5) * 8
let radius = 30

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, innerWidth, innerHeight)
    circle.draw()

    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2, false)
    context.strokeStyle = "blue"
    context.stroke()

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy
    }

    x += dx
    y += dy
}

animate()