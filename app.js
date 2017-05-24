'use strict';

var totalCounter = 0; // this will count up the total of clicked images
var totalImages = [];
var totalClicked = [];


function Image(name, path) {
this.name = name
this.path = path;
this.shown =0;
this.totalClicked = 0;
totalImages.push(this);
//console.log('totalIMGs: ', totalImages);
}

var bag = new Image('bag', 'img/bag.jpg');
var bannana = new Image('bannana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
var breakfast = new Image('breakfast', 'img/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'img/bubblegum.jpg');
var chair = new Image('chair', 'img/chair.jpg');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
var dogduck = new Image('dog-duck', 'img/dog-duck.jpg');
var dragon = new Image('dragon', 'img/dragon.jpg');
var pen = new Image('pen', 'img/pen.jpg');
var pet_sweep = new Image('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new Image('scissors', 'img/scissors.jpg');
var shark = new Image('shark', 'img/shark.jpg');
var sweep = new Image('sweep', 'img/sweep.png');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Image('unicorn', 'img/unicorn.jpg');
var usb = new Image('usb', 'img/usb.gif');
var water_can = new Image('water-can', 'img/water-can.jpg');
var wine_glass = new Image('wine-glass', 'img/wine-glass.jpg');


function randomGenerator() {
  return Math.floor(Math.random() * totalImages.length);
}

//I need to create a function for images to appear on the browser by using the randomGenerator function
function renderImage() {
  var img1 = document.getElementById('image_one');
  var img2 = document.getElementById('image_two');
  var img3 = document.getElementById('image_three');
  console.log(img1, img2, img3);
}
renderImage();


// I might need 3 functions for 3 seperate pictures.
// I need to create a function that calculates the number of clicks I made
// I need a function that will count what pictures I chose and another function to store pictures i didn't chose.
// I need an eventListener so that verytime I click on a pictures it would generate new pics.
// I need to get elementById
// I will need to call functions in other functions
