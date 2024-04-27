//CREATING MULTIPLE ANIMATED CIRCLES



const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 3
canvas.height = window.innerHeight - 5.1

const context = canvas.getContext("2d")

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = "blue";
        context.stroke();
    };

    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy
    };

    drawAndUpdate() {
        this.draw()
        this.update()
    }
}

const circle = new Circle(200, 200, 5, 5, 100);

const circleArray = []

for (let i = 0; i < 10; i++) {
    let radius = Math.random() * (60 - 30) + 30
    //there is a problem where we have circles spawning with part of their body already outside the screen ant therefore cannot bounce(the below fixes it)
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;

    const circle = new Circle(x, y, dx, dy, radius)
    circleArray.push(circle)

}


function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, innerWidth, innerHeight)

    // circle.drawAndUpdate()
    //i put it after clearReact function else we wont see the circle been drawn since clearRect is constantly clearing the canvas

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].drawAndUpdate()

    }
}

animate()