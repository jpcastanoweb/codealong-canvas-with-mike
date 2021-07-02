/* 
    GENERACION DE CANVAS
*/

const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  start: function () {
    this.canvas.width = 400
    this.canvas.height = 270
    this.canvas.style.border = "1px solid red"
    this.context = this.canvas.getContext("2d")

    document.body.insertBefore(this.canvas, document.body.childNodes[0])
    this.interval = setInterval(updateGameArea, 20)
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0
  }

  update() {
    const ctx = myGameArea.context
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
}

/* 
    MOTOR DEL JUEGO
*/
const updateGameArea = () => {
  myGameArea.clear()
  player.newPos()
  player.update()
}

const player = new Component(25, 25, "green", 0, 125)
myGameArea.start()

/* 
    EVENTOS
*/

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      player.speedX--
      break
    case 39:
      player.speedX++
      break
    case 38:
      player.speedY--
      break
    case 40:
      player.speedY++
      break
    default:
      return
  }
})

document.addEventListener("keyup", () => {
  player.speedX = 0
  player.speedY = 0

  console.log("freno", player)
})
