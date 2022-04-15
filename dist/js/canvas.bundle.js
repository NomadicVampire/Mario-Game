/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background1.jpg":
/*!*********************************!*\
  !*** ./src/img/background1.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a6ba2d4d8cc238cb26bf746794b0dcf3.jpg");

/***/ }),

/***/ "./src/img/hills1.png":
/*!****************************!*\
  !*** ./src/img/hills1.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8ae7bd48e4d808ff3456a3f41cd8daec.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/singleSmallplatform.png":
/*!*****************************************!*\
  !*** ./src/img/singleSmallplatform.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3764aab4060f9cea97848edc9bef0159.png");

/***/ }),

/***/ "./src/img/smallAirPlatform.png":
/*!**************************************!*\
  !*** ./src/img/smallAirPlatform.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "095ab7191aa0b6c720f7cbc2f875c5e9.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills1.png */ "./src/img/hills1.png");
/* harmony import */ var _img_background1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background1.jpg */ "./src/img/background1.jpg");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_smallAirPlatform_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/smallAirPlatform.png */ "./src/img/smallAirPlatform.png");
/* harmony import */ var _img_singleSmallplatform_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/singleSmallplatform.png */ "./src/img/singleSmallplatform.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]); // accessing canvas 

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d'); //as we creating 2d game
// even after giving x and y equal , it draws equal, this happens due to canvas size. So we will set its size to window size

canvas.width = 1024;
canvas.height = 530; // defining gravity

var gravity = 0.5; //  ---------------- Different CLASSES -----------------d

var Player = /*#__PURE__*/function () {
  // whatever the property this player carries will be initailized due to constructor
  function Player() {
    _classCallCheck(this, Player);

    // player will have x and y position, and will have some hieght and widht
    this.speed = 30;
    this.position = {
      x: 100,
      y: 100
    }; //adding velocity to our player

    this.velocity = {
      x: 0,
      y: 1
    };
    this.height = 150;
    this.width = 66;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        cropWidht: 177,
        widht: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidht: 341,
        width: 127.875
      }
    }; //default movement of sprite

    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidht = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // fillRect draws a rectangle whose default color will be black(can be changed), and takes argument as recatngle's position
      // c.fillStyle = 'blue'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height);
      // Replacing rectangle with sprite Character
      c.drawImage(this.currentSprite, // croping
      this.currentCropWidht * this.frames, //start x from here
      0, // start y from here
      this.currentCropWidht, // widht
      400, this.position.x, this.position.y, this.width, this.height);
    } // now we create a function that changes property over time

  }, {
    key: "update",
    value: function update() {
      this.frames++; // SPRITE Checking  

      if (this.frames > 59 && (this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left)) this.frames = 0;
      this.draw(); //first, draw

      this.position.y += this.velocity.y; //then increase velo

      this.position.x += this.velocity.x; //to move forward
      // if player crosses canvas height then we will make its velo 0

      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; // adding gravity to y, which makes it looks accelerating with time. this makes it more realastic
      // now removing this condition,as we want to keep or player falling  to represent death pits
      // else this.velocity.y= 0
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      //x:x is same as x 
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  } // now, instead of drawing rectangle, we load images here


  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'grey'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); // class for different objects


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}(); //  ------------------  OBJECTS  -----------------------
// Image function, which creates different image objects for different src


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} // --------------- Copy of INIT()  -------------------
// Declaration of variables, Use 'let' as we need to change its values
// this helps to reset all values of varialbles and class objects


var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]); //we takes image using createImage function , and then stores it in variable. so now we are able to use it anywhere.

var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new Player(); //Player object

var airplatformImage = createImage(_img_smallAirPlatform_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var smallplatformImage = createImage(_img_singleSmallplatform_png__WEBPACK_IMPORTED_MODULE_5__["default"]); //  PLATFORMS

var platforms = []; // Generic objects  

var genericObject = [];
var lastKey; // this monitor that right or left key is pressed or not

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
};
var scrollOffset = 0; // -------- Close of copy of init()
// -----------------INIT() -----------------

function init() {
  player = new Player();
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  airplatformImage = createImage(_img_smallAirPlatform_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  smallplatformImage = createImage(_img_singleSmallplatform_png__WEBPACK_IMPORTED_MODULE_5__["default"]); //  PLATFORMS

  platforms = [new Platform({
    x: platformImage.width * 4 + 400 + platformImage.width - platformSmallTallImage.width - 2,
    y: 320,
    image: platformSmallTallImage
  }), new Platform({
    x: -1,
    y: 420,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 420,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 170,
    y: 420,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 400,
    y: 420,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 978,
    y: 420,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 850,
    y: 420,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 490,
    y: 320,
    image: airplatformImage
  }), new Platform({
    x: platformImage.width * 8 + 600,
    y: 320,
    image: smallplatformImage
  }), new Platform({
    x: platformImage.width * 8 + 1000,
    y: 320,
    image: smallplatformImage
  }), new Platform({
    x: platformImage.width * 8 + 1400,
    y: 420,
    image: smallplatformImage
  }), new Platform({
    x: platformImage.width * 9 + 1200,
    y: 420,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12 + 200,
    y: 320,
    image: airplatformImage
  }), new Platform({
    x: platformImage.width * 12 + 482,
    y: 320,
    image: airplatformImage
  }), new Platform({
    x: platformImage.width * 13 + 500,
    y: 420,
    image: smallplatformImage
  }), new Platform({
    x: platformImage.width * 13 + 750,
    y: 420,
    image: smallplatformImage
  }), new Platform({
    x: platformImage.width * 14 + 578,
    y: 420,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 15 + 500,
    y: 420,
    image: platformImage
  })]; // Generic objects  

  genericObject = [new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_background1_jpg__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_hills1_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
} //close of init()
// ------------------- ANIMATE funtion -----------------


function animate() {
  requestAnimationFrame(animate); // this makes player a long red line, which losing its original height
  // so we will clear whole canvas from x=0 and y=0

  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  }); // platforms[8].move

  player.update(); // condition for moving left and right from x=30 to 500

  if (keys.right.pressed && player.position.x < 500) player.velocity.x = player.speed; //OR statements prevents the player to go behind start point
  else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset == 0 && player.position.x > 0) player.velocity.x = -player.speed; // when it hits edges, then we scroll background
    else {
        player.velocity.x = 0; // if player mover right, then platform moves back

        if (keys.right.pressed) {
          scrollOffset += player.speed; //moving platform 

          platforms.forEach(function (platform) {
            platform.draw();
            platform.position.x -= player.speed;
          }); // moving genericObjects

          genericObject.forEach(function (genericObject) {
            genericObject.position.x -= player.speed * 0.50; //take less value than 5 so to get more realastic animation 
          });
        } // if player moves then platform moves
        else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed;
            platforms.forEach(function (platform) {
              platform.draw();
              platform.position.x += player.speed;
            });
            genericObject.forEach(function (genericObject) {
              genericObject.position.x += player.speed * 0.5;
            });
          }
      } // COLLISION detection condition

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // SPRITE Switching

  if (keys.right.pressed && lastKey == 'right' && player.currentSprite != player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidht = player.sprites.run.cropWidht;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey == 'left' && player.currentSprite != player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidht = player.sprites.run.cropWidht;
    player.width = player.sprites.run.width;
  } // stops sprite after left key is released
  else if (!keys.left.pressed && lastKey == 'left' && player.currentSprite != player.sprites.stand.left) {
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidht = player.sprites.stand.cropWidht;
      player.width = player.sprites.stand.widht;
    } // stops sprite after right key is released
    else if (!keys.right.pressed && lastKey == 'right' && player.currentSprite != player.sprites.stand.right) {
        player.currentSprite = player.sprites.stand.right;
        player.currentCropWidht = player.sprites.stand.cropWidht;
        player.width = player.sprites.stand.widht;
      } // WINING or ending game condition


  if (keys.right.pressed && player.position.x > 100 && keys.right.pressed && scrollOffset > platformImage.width * 14 + 550 && player.position.x > 0) {
    player.speed = 0;
    console.log('You Win!');
  } // for going back to 
  else if (keys.left.pressed && player.position.x > 100 && keys.left.pressed && scrollOffset > platformImage.width * 14 + 550 && player.position.x > 0) {
      player.speed = 10;
    } // LOSING condition


  if (player.position.y > canvas.height) {
    init(); // this restarts the whole game, but we need wrap up everything in it, and also we cant have variable with const 
  } // hitting Spike
  else if (player.position.y < 50) {
      init(); // this restarts the whole game, but we need wrap up everything in it, and also we cant have variable with const 
    }
}

init();
animate(); // ----------------- EVENTLISTENER of keyboard -----------
// Adding Player movement using event listener
// here we directly taking object of keydown, which is keyCode that gives us the code of button that we pressed on keyboard
// Keydown - when key is pressed

addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      //for a
      console.log('left');
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 68:
      //for d
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      //for w
      console.log('up');
      if (event.repeat) return;
      player.velocity.y -= 10; //giving -ve velo because, it will go up due to negative velo and then as defined above, that we increasing velo till its hits ground. so it bounces back

      keys.up.pressed = true;
      break;

    case 32:
      //for spacebar
      console.log('jump');
      player.velocity.y -= 10;
      break;

    case 83:
      //for s
      console.log('down');
      break;
  }
}); // Keyup - when key is released

addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      //for a
      console.log('left');
      keys.left.pressed = false;
      break;

    case 68:
      //for d
      console.log('right');
      keys.right.pressed = false;
      break;

    case 87:
      //for w
      console.log('up');
      keys.up.pressed = false; // player.velocity.y -= 10

      break;

    case 32:
      //for spacebar
      console.log('jump'); // player.velocity.y -= 10

      break;

    case 83:
      //for s
      console.log('down');
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map