const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 3
canvas.height = window.innerHeight - 5.1

const context = canvas.getContext("2d")

//draw a  rectangle
context.fillStyle = "lime" // change color of all rect  under it

context.fillRect(0, 0, 400, 100) //context.fillRect(x,y,width,height)
context.fillRect(0, 150, 400, 100)
context.fillStyle = "rgba(0,0,0,.2)" // change color of all rect  under it
context.fillRect(450, 150, 400, 100)

//line
context.beginPath()
context.moveTo(0, 300) //context.moveTo(x,y) //line start point
context.lineTo(400, 300) //context.lineTo(x,y) line end point
context.lineTo(500, 250) //create another line  from last point
context.lineTo(600, 300)
context.lineTo(100, 300)
context.strokeStyle = "red" //change the line color
context.stroke(); // makes it actually display the line


//arc
context.beginPath() //used beginpath again to seperate it from previous drawn line
// context.arc(x, y, radius, startAngle, endAngle, counterClockwise)
context.arc(200, 400, 30, 0, Math.PI * 2, false)
context.strokeStyle = "blue"
context.stroke()


//Create random circle location

for (let i = 0; i < 10; i++) {
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    const rnColor = ["blue", "green", "black", "red", "lime", "yellow", "pink"]

    const rnColorNumber = Math.round(Math.random() * (rnColor.length - 1))


    context.beginPath()
    context.arc(x, y, 50, 0, Math.PI * 2, false)
    context.strokeStyle = rnColor[rnColorNumber]
    context.stroke()
}