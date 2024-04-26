const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 3
canvas.height = window.innerHeight - 5.1

const context = canvas.getContext("2d")

let x = Math.random() * innerWidth  //spawn at random points on initial load
let y = Math.random() * innerHeight
let dx = (Math.random() - 0.5) * 8//(how many pixel shift we get on the x axis)
let dy = (Math.random() - 0.5) * 8
let radius = 30

function animate() {
    requestAnimationFrame(animate)
    //requestAnimationFrame is like a loop that calls animate , 
    //while animate calls requesrAnimationFrame(infinte loop)
    //notice how rthe inifinite loop is above yet the below code still get read

    //context.clearRect(x,y,width,height)
    context.clearRect(0, 0, innerWidth, innerHeight)

    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2, false)
    context.strokeStyle = "blue"
    context.stroke()

    // if (x > innerWidth) {
    //     dx = -dx
    // }
    //the above canges the direction if the circle hits the right side of our screen
    //but the problem is our x is in our circle's middle(radius)
    //so we have to include the radius in our calculation so that the cirle edge can bounce off contact instead of radius

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx

        //first condition bounce from right
        //the other from left
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy

        //first condition bounce from right
        //the other from left
    }

    x += dx
    y += dy
    //it will keep drawing circles over and over over itself
    //so we have to declare a variable that'll move it 1px at a time

    //a new problem arises , previous circles drawn re still visible
    //so we clear the whole canvas whenver we redraw a circle to take care of this
    //hence clearRect()
}

animate()