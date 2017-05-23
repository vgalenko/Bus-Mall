'use strict';

var totalCounter = 0; // this will count up the total of clicked images

var images = ['bag', 'bannana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var path = 'img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg',

var bag = new Image('bag', 'img/bag.jpg');
var bannana = new Image('bannana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
var breakfast = new Image('breakfast', 'img/breakfast.jpg');



function Image(images, path, shown, clicked) {
this.name = name
this.path = path;
this.shown =0;
this.clicked = 0;
}



function randomGenerator () {
  return Math.floor(Math.random() * images.length);
}

var totalImgs = [];
