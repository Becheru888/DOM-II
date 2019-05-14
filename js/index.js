
//Mouse over event

const navi = document.querySelectorAll('.nav-link')

navi.forEach(element => {
    element.addEventListener('mouseover', function (event) {
        event.target.style.color = 'red';
    })
})

//Down Key event
const input = document.querySelector("input")
const logo = document.querySelector(".logo-heading")

input.addEventListener('keydown', downK);

function downK() {
    logo.textContent = 'NEW LOGO'
    logo.style.color = 'blue'
}

//Wheel Event

const busImage = document.querySelector('.sand');

busImage.addEventListener('wheel', doIt);

function doIt() {
    busImage.style.display = 'none';
}

// Load Event
const load = document.querySelector('.loaded')

window.addEventListener('load', loading)

function loading() {
    load.textContent = 'Page Fully Loaded!'
}

// Focus Event

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
    event.target.style.background = '';
});

// Resize event

window.addEventListener('resize', reportWindowSize);

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// Scroll Event

window.addEventListener('scroll', () => {
    console.log('Srolled')
})

//Select event

var par = document.querySelector('#story');

par.addEventListener('select', () => {
    alert('Text selected')
});

//dblclick event

var dblclick = document.querySelector('.main-navigation');

dblclick.addEventListener('dblclick', dbl)

function dbl(){
    dblclick.style.background = 'red'
}

// Drag/Drop

var draggableBTN = document.querySelector('.draggable')
var dropeZone = document.querySelector('.dropzone')

draggableBTN.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
    event.dataTransfer.setData('text', event.target.id)
  } );

//   draggableBTN.addEventListener("dragend", function(event) {
//     // reset the transparency
//     event.target.style.opacity = 1;
//   }, false);

  dropeZone.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  } );

  dropeZone.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    event.dataTransfer.getData("text")

} );

  console.log(dropeZone)