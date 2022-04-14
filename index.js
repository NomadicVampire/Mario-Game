// accessing canvas 
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')  //as we creating 2d game
 
// even after giving x and y equal , it draws equal, this happens due to canvas size. So we will set its size to window size
canvas.width = innerWidth
canvas.height =  innerHeight

// defining gravity
const gravity = 0.5

class Player {
    // whatever the property this player carries will be initailized due to constructor
    constructor(){
        // player will have x and y position, and will have some hieght and widht
        this.position = {
            x:100,
            y:100
        }
        //adding velocity to our player
        this.velocity ={
            x: 0,
            y: 1
        }

        this.height = 40
        this.width = 25
    }
    draw(){
        // fillRect draws a rectangle whose default color will be black(can be changed), and takes argument as recatngle's position
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
    // now we create a function that changes property over time
    update(){
        this.draw() //first, draw
        this.position.y += this.velocity.y  //then increase velo
        this.position.x += this.velocity.x  //to move forward
        
        // if player crosses canvas height then we will make its velo 0
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        // adding gravity to y, which makes it looks accelerating with time. this makes it more realastic

        else this.velocity.y= 0

    }
}

class Platform{
    constructor({x,y}){
        this.position = {
            //x:x is same as x 
            x,
            y
        }
        this.width = 200
        this.height = 20
    }
    // draw function of platform
    draw(){  
        c.fillStyle = 'grey'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }

}

const player = new Player()  //Player object
const platforms = [new Platform({x: 300, y:450}), new Platform({x: 600, y:300})]  
    //multiple objects of Platform


// this monitor that right or left key is pressed or not
const keys={
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
let scrollOffset = 0    // this keeps the track of how much screen has been scrolled

// now we will make a function which run loop to give animation
function animate() {
    requestAnimationFrame(animate)
    // this makes player a long red line, which losing its original height
    // so we will clear whole canvas from x=0 and y=0
    c.clearRect(0,0,canvas.width,canvas.height)
    
    player.update()
    platforms.forEach(platform => {
        platform.draw()   // this gives error, because other platform location is not defined
    })
    
    // condition for moving left and right from x=30 to 500
    if(keys.right.pressed && player.position.x <500) player.velocity.x = 5   
    else if(keys.left.pressed && player.position.x >30) player.velocity.x = -5
    
    // when it hits edges, then we scroll background
    else {
        player.velocity.x = 0
        // if player mover right, then platform moves back
        if(keys.right.pressed){
            scrollOffset += 5
            platforms.forEach(platform => {
                platform.draw()
                platform.position.x -= 5
            })        
        }
        // if player moves left, then platform moves front
        else if(keys.left.pressed){
            scrollOffset -= 5
            platforms.forEach(platform => {
                platform.draw()
                platform.position.x += 5
            })
        }
    }
    // console.log(scrollOffset)

    // checking collision detection condition for each platform
    platforms.forEach(platform => {
        if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >=platform.position.x && player.position.x <= platform.position.x+ platform.width) {
            player.velocity.y = 0
        }
    })

    // wining or ending game condition
    if(scrollOffset>2000) {console.log('You Win!')}

}
animate()

// Adding Player movement using event listener
// here we directly taking object of keydown, which is keyCode that gives us the code of button that we pressed on keyboard
// Keydown - when key is pressed
addEventListener('keydown', ({keyCode}) => {
    // console.log(keyCode)

    switch(keyCode){
        case 65:  //for a
            console.log('left')
            keys.left.pressed = true
            break
            
            case 68:  //for d
            console.log('right')
            keys.right.pressed = true
            break
        
        case 87:  //for w
            console.log('up')
            player.velocity.y -= 10  //giving -ve velo because, it will go up due to negative velo and then as defined above, that we increasing velo till its hits ground. so it bounces back
            break
        
        case 83:   //for s
            console.log('down')
            break
        
        }
    })
// keyup - when key is released
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
            // player.velocity.y -= 10
            break
        
        case 83:   //for s
            console.log('down')
            break
        
        }
})