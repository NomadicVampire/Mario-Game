import platform from '../img/platform.png'
import hills from '../img/hills1.png'
import background from '../img/background1.jpg'
import platformSmallTall from '../img/platformSmallTall.png'
import airplatform from '../img/smallAirPlatform.png'
import smallplatform from '../img/singleSmallplatform.png'
import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'
console.log(platform)

// accessing canvas 
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')  //as we creating 2d game
 
// even after giving x and y equal , it draws equal, this happens due to canvas size. So we will set its size to window size
canvas.width = 1024
canvas.height =  530

// defining gravity
const gravity = 0.5

//  ---------------- Different CLASSES -----------------d

class Player {
    // whatever the property this player carries will be initailized due to constructor
    constructor(){
        // player will have x and y position, and will have some hieght and widht
        this.speed = 10
        this.position = {
            x:100,
            y:100
        }
        //adding velocity to our player
        this.velocity ={
            x: 0,
            y: 1
        }

        this.height = 150
        this.width = 66
        this.image = createImage(spriteStandRight)

        this.frames = 0
        this.sprites = {
          stand: {
            right: createImage(spriteStandRight),
            left: createImage(spriteStandLeft),
            cropWidht : 177,
            widht: 66
          },
          run:{
            right: createImage(spriteRunRight),
            left: createImage(spriteRunLeft),
            cropWidht : 341,
            width :127.875
          }
        }

         //default movement of sprite
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidht = 177
    }
    draw(){
        // fillRect draws a rectangle whose default color will be black(can be changed), and takes argument as recatngle's position
        // c.fillStyle = 'blue'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height);

        // Replacing rectangle with sprite Character
        c.drawImage(
          this.currentSprite, 
          // croping
          this.currentCropWidht * this.frames,  //start x from here
          0,  // start y from here
          this.currentCropWidht, // widht
          400,
          this.position.x, this.position.y,
          this.width, this.height
          )



    }
    // now we create a function that changes property over time
    update(){
        this.frames++
        
        // SPRITE Checking  
        if(this.frames > 59 && (this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)) this.frames = 0
        else if(this.frames > 29 && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left)) this.frames = 0


        this.draw() //first, draw
        this.position.y += this.velocity.y  //then increase velo
        this.position.x += this.velocity.x  //to move forward
        
        // if player crosses canvas height then we will make its velo 0
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        // adding gravity to y, which makes it looks accelerating with time. this makes it more realastic

        // now removing this condition,as we want to keep or player falling  to represent death pits
        // else this.velocity.y= 0

    }
}

class Platform{
    constructor({x,y,image}){
        this.position = {
            //x:x is same as x 
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height

    }
    // now, instead of drawing rectangle, we load images here
    draw(){  
        // c.fillStyle = 'grey'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)

        c.drawImage(this.image, this.position.x, this.position.y)
    }

}
// class for different objects
class GenericObject{
    constructor({x,y,image}){
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw(){  
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

//  ------------------  OBJECTS  -----------------------

// Image function, which creates different image objects for different src
function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc  
  return image
}


// --------------- Copy of INIT()  -------------------
// Declaration of variables, Use 'let' as we need to change its values
// this helps to reset all values of varialbles and class objects

let platformImage = createImage(platform)  //we takes image using createImage function , and then stores it in variable. so now we are able to use it anywhere.
let platformSmallTallImage = createImage(platformSmallTall)

let player = new Player()  //Player object

let airplatformImage = createImage(airplatform)
let smallplatformImage = createImage(smallplatform)
//  PLATFORMS
let platforms = []  

// Generic objects  
let genericObject = []

let lastKey

// this monitor that right or left key is pressed or not
const keys={
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
      pressed:false     
    }
}
let scrollOffset = 0    

// -------- Close of copy of init()

// -----------------INIT() -----------------

function init(){

  player = new Player()
  platformImage = createImage(platform)
  airplatformImage = createImage(airplatform)
  smallplatformImage = createImage(smallplatform)

//  PLATFORMS
platforms = [
  new Platform({x: platformImage.width*4 +400 + platformImage.width - platformSmallTallImage.width-2, y: 320, image:platformSmallTallImage}),
  new Platform({x: -1, y:420,image: platformImage}), 
  new Platform({x: platformImage.width -3, y:420, image:platformImage}), 
  new Platform({x: platformImage.width*2 +170, y:420, image:platformImage}),
  new Platform({x: platformImage.width*3 +400, y:420, image:platformImage}),
  new Platform({x: platformImage.width*3 + 978, y:420, image:platformImage}),
  new Platform({x: platformImage.width*5 +850, y:420, image:platformImage}),
  new Platform({x: platformImage.width*7 +490, y:320, image:airplatformImage}),
  new Platform({x: platformImage.width*8 +600, y:320, image:smallplatformImage}),
  new Platform({x: platformImage.width*8 +1000, y:320, image:smallplatformImage}),
  new Platform({x: platformImage.width*8 +1400, y:420, image:smallplatformImage}),
  new Platform({x: platformImage.width*9 +1200, y:420, image:platformImage}),
  new Platform({x: platformImage.width*12 +200, y:320, image:airplatformImage}),
  new Platform({x: platformImage.width*12 +482, y:320, image:airplatformImage}),
  new Platform({x: platformImage.width*13 +500, y:420, image:smallplatformImage}),
  new Platform({x: platformImage.width*13 +750, y:420, image:smallplatformImage}),
  new Platform({x: platformImage.width*14 + 578, y:420, image:platformImage}),
  new Platform({x: platformImage.width*15 + 500, y:420, image:platformImage}),
  
  
]  

// Generic objects  
genericObject = [new GenericObject({
  x:0,
  y:0,
  image:createImage(background)

}), new GenericObject({
  x:0,
  y:0,
  image:createImage(hills)})]

scrollOffset = 0  

}  //close of init()


// ------------------- ANIMATE funtion -----------------

function animate() {
    requestAnimationFrame(animate)
    // this makes player a long red line, which losing its original height
    // so we will clear whole canvas from x=0 and y=0
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)
    
    genericObject.forEach(genericObject => {
      genericObject.draw()
    })

    platforms.forEach(platform => {
      platform.draw()
    })
    // platforms[8].move
    player.update()
    
    // condition for moving left and right from x=30 to 500
    if(keys.right.pressed && player.position.x <500) player.velocity.x = player.speed 

    //OR statements prevents the player to go behind start point
    else if(
      (keys.left.pressed && player.position.x >100) || (keys.left.pressed && scrollOffset == 0 && player.position.x > 0)) player.velocity.x = -player.speed
    
    // when it hits edges, then we scroll background
    else {
        player.velocity.x = 0
        // if player mover right, then platform moves back
        if(keys.right.pressed){
            scrollOffset += player.speed

            //moving platform 
            platforms.forEach(platform => {
                platform.draw()
                platform.position.x -= player.speed
            })

            // moving genericObjects
            genericObject.forEach(genericObject =>{
              genericObject.position.x -= player.speed *0.50
              //take less value than 5 so to get more realastic animation 
            })
        }
        // if player moves then platform moves
        else if(keys.left.pressed && scrollOffset>0){
            scrollOffset -= player.speed
            platforms.forEach(platform => {
                platform.draw()
                platform.position.x += player.speed
            })

            genericObject.forEach(genericObject =>{
              genericObject.position.x += player.speed *0.5
            })
        }
    }

    // COLLISION detection condition
    platforms.forEach(platform => {
        if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >=platform.position.x && player.position.x <= platform.position.x+ platform.width) {
            player.velocity.y = 0
        }
    })

    // SPRITE Switching
    if(keys.right.pressed && lastKey == 'right' && player.currentSprite != player.sprites.run.right){
      player.frames = 1
      player.currentSprite = player.sprites.run.right
      player.currentCropWidht = player.sprites.run.cropWidht  
      player.width = player.sprites.run.width
    }
    else if(keys.left.pressed && lastKey == 'left' && player.currentSprite != player.sprites.run.left){
      player.currentSprite = player.sprites.run.left
      player.currentCropWidht = player.sprites.run.cropWidht  
      player.width = player.sprites.run.width
    }
    // stops sprite after left key is released
    else if(!keys.left.pressed && lastKey == 'left' && player.currentSprite != player.sprites.stand.left){
      player.currentSprite = player.sprites.stand.left
      player.currentCropWidht = player.sprites.stand.cropWidht  
      player.width = player.sprites.stand.widht
    }
    // stops sprite after right key is released
    else if(!keys.right.pressed && lastKey == 'right' && player.currentSprite != player.sprites.stand.right){
      player.currentSprite = player.sprites.stand.right
      player.currentCropWidht = player.sprites.stand.cropWidht  
      player.width = player.sprites.stand.widht
    }

    // WINING or ending game condition
  if((keys.right.pressed && player.position.x >100) && (keys.right.pressed && scrollOffset > platformImage.width*14 + 550 && player.position.x > 0)){
  player.speed = 0
  console.log('You Win!')
  }
  // for going back to 
  else if((keys.left.pressed && player.position.x >100) && (keys.left.pressed && scrollOffset > platformImage.width*14 + 550 && player.position.x > 0)){
    player.speed = 10
    }
    

    // LOSING condition
    if(player.position.y > canvas.height){
      init()   
      // this restarts the whole game, but we need wrap up everything in it, and also we cant have variable with const 
    }
    // hitting Spike
    else if(player.position.y < 50){
      init()   
      // this restarts the whole game, but we need wrap up everything in it, and also we cant have variable with const 
    }
    
}

init()
animate()

// ----------------- EVENTLISTENER of keyboard -----------

// Adding Player movement using event listener
// here we directly taking object of keydown, which is keyCode that gives us the code of button that we pressed on keyboard

// Keydown - when key is pressed
addEventListener('keydown', ({keyCode}) => {
    // console.log(keyCode)

    switch(keyCode){
        case 65:  //for a
            console.log('left')
            keys.left.pressed = true
            lastKey = 'left'
            break
            
        case 68:  //for d
            console.log('right')
            keys.right.pressed = true
            lastKey = 'right'
            break
        
        case 87:  //for w
            console.log('up')
            if(event.repeat) return
            player.velocity.y -= 10  //giving -ve velo because, it will go up due to negative velo and then as defined above, that we increasing velo till its hits ground. so it bounces back
            keys.up.pressed = true 
            break

        case 32:  //for spacebar
            console.log('jump')
            player.velocity.y -= 10
            break
        
        case 83:   //for s
            console.log('down')
            break
        
        }
    })

// Keyup - when key is released
addEventListener('keyup', ({keyCode}) => {
    // console.log(keyCode)

    switch(keyCode){
        case 65:  //for a
            console.log('left')
            keys.left.pressed = false
            break
            
        case 68:  //for d
            console.log('right')
            keys.right.pressed = false
            break
        
        case 87:  //for w
            console.log('up')
            keys.up.pressed = false
            // player.velocity.y -= 10
            break
        
        case 32:  //for spacebar
            console.log('jump')
            // player.velocity.y -= 10
            break
        
        case 83:   //for s
            console.log('down')
            break
        
        }
})