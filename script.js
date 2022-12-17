'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const openModalWindow = function (e) {
  e.preventDefault(); 
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(button => button.addEventListener('click', openModalWindow));

// for (let i = 0; i < btnsOpenModalWindow.length; i++) {  // this code is such as above one
//   btnsOpenModalWindow[i].addEventListener('click', openModalWindow);
// }
  

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(document.documentElement); // our HTML code
// console.log(document.head); // HTML head element
// console.log(document.body); // HTML body element

// console.log(document.querySelector('.header')); // get HTML header element 
// const sections = document.querySelectorAll('.section'); // get nodelist with elements which have class="section"
// console.log(sections);

// console.log(document.getElementById('section--1')); // get HTML element which has id="section--1"
// const buttons = document.getElementsByTagName('button'); // get HTMLCollection(life collection) with all elements which tag-name <button>. 
// console.log(buttons);
// // main difference between nodelist and HTMLCollection is that nodelist saves all element which was created before its calling. Even we delete some element after calling, nodelist doesn't change. But HTMLCollection - is dynamic. It shows us changes made at thos moment

// console.log(document.getElementsByClassName('btn')); // get HTMLCollection which has class="btn"

// // The most popular are document.querySelector() & document.querySelectorAll() 


// // 1. creating and inserting elements

// //  .insertAdjacentHTML() - creating elements

// const message = document.createElement('div'); // we create the html element (DOM object), but it doesn't appear in the DOM tree
// message.classList.add('cookie-message'); // create class to our html element
// // message.textContent = 'We use cookie on this web-site to improve functionality.';
// message.innerHTML = 'We use cookie on this web-site to improve functionality. <button class="btn btn--close-cookie">Ok!</button>'; // we added to our HTML code text and button element with classes
// const header = document.querySelector('.header'); // we select header element and put it in variable header
// // header.prepend(message); // added our HTML code to parent's block (header) to the beginning (the first child of header)
// header.append(message); //  added our HTML code to parent's block (header) to the end (the last child of header). At this time header.prepend(message) disappeares. Because message cannot be at the same time in to different places
// // header.append(message.cloneNode(true)); // here we copied(cloned) our message and now it can appear as at top and bottom of its parrent block. cloneNode(true) - means that our node lement will copied with all child alements of ones
// // header.before(message); // added message before header element
// // header.after(message); // added message after header element

// // 2. deleting elements

// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//   message.remove(); // we choose our button, added event listener and delete it. We delete all element, not just a class
//   message.parentElement.removeChild(message); // this is the old way deleting the element. 
// })
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// // styles 

// message.style.backgroundColor = '#076785';
// message.style.width = '120%';
// console.log(message.style.width); // 120%
// console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
// console.log(getComputedStyle(message)); // we'll get CSSStyleDeclaration(a very big list)
// console.log(getComputedStyle(message).height); // 47.6667px
// message.style.height = Number.parseFloat( getComputedStyle(message).height) + 50 + 'px'; // 
// console.log(getComputedStyle(message).height); // 97.6667px - it is like a variable 
// console.log(message.style.height); // 97.6667px

// //

// document.documentElement.style.setProperty('--color-first', 'green'); // in this way we can change root in css 

// // Atributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt); // Лого Просто Банк. if we havn't this attribute in our CSS, we'll see the empty string in console 
// console.log(logo.src); // http://127.0.0.1:5500/img/logo.png - it is the absalute URL
// console.log(logo.getAttribute('src')); // img/logo.png = relative path
// console.log(logo.className); // nav__logo

// logo.alt = 'Logo Just Bank'; // new value of attribute alt

// logo.setAttribute('copyright', 'Masters Of code'); // added new attribute copyright with a value Masters Of code

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); // http://127.0.0.1:5500/index.html# - absalute URL
// console.log(link.getAttribute('href')); // # - relative URL

// // Data attributes
// console.log(logo.dataset.versionNumber); // 2.0


// // Classes

// logo.classList.add('a', 'b'); // we add the class (-es)
// logo.classList.remove('a', 'b'); // we delete the class (-es)
// logo.classList.toggle('a'); // if the HTML element contains this class - toggle method delete the class. If not - added
// logo.classList.contains('c'); // return true if element contains class and false if not



// smooth scrolling

const btnScrolling = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrolling.addEventListener('click', function(e) {
  const section1Coords = section1.getBoundingClientRect();
  console.log(section1Coords); // DOMRect
  console.log(e.target.getBoundingClientRect());
  console.log('Current scrolling: x, y', window.pageXOffset, window.pageYOffset);
  console.log('Viewport width: and height:', document.documentElement.clientWidth, document.documentElement.clientHeight);

  window.scrollTo(section1Coords.left + window.pageXOffset, section1Coords.top + window.pageYOffset);
  window.scrollTo({
    left: section1Coords.left + window.pageXOffset, 
    top: section1Coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
   
  // section1.scrollIntoView({
  //   behavior: "smooth", // only for modern browsers
  // });

});

// Types of events and eventlisteners 

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(e) { // like hover in CSS 
//   alert('addEvenListener: You are now at h1 element'); // modern
// });

// h1.onclick = function(e) {  
//   alert('onclick: You are now click at h1 element');  // oldschool
// };

// const alertMouseEnterH1 = function(e) { 
//   alert('addEvenListener: You are now at h1 element'); 
//   h1.removeEventListener('mouseenter', alertMouseEnterH1); // after calling alert, we delete the alertMouseEnterH1 function
// };
// h1.addEventListener('mouseenter', alertMouseEnterH1);

// const alertMouseEnterH1 = function(e) { 
//   alert('addEvenListener: You are now at h1 element');  
// };
// h1.addEventListener('mouseenter', alertMouseEnterH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertMouseEnterH1), 3000); // in this way, we delete our function after 3 seconds

////////////////////////////////////////////////////////////
// Event Propagation

// rgb(123, 56, 78)

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); 
// }

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); 
// }

// const getRandomColor = () => `rgb(
//   ${getRandomIntInclusive(0, 225)},
//   ${getRandomIntInclusive(0, 225)},
//   ${getRandomIntInclusive(0, 225)}
// )`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Link', e.target, e.currentTarget); // target то на чем был физический клик Услуги
//   // currentTarget - покажет тот эелемент разметки, куда клацнем
//   console.log(this === e.currentTarget);
//   // // stop propagation
//   // e.stopPropagation(); // we stop our propagation on this element
// });
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Links', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Nav', e.target, e.currentTarget);
// }, true); // последним параметр true у нас указывает на то, что мы перехватываем наш эелемент и его событие на фазу перехвата. Зачем это надо - ХЗ. Но это уже устаревшая фича, так шо не обращаем внимание на это 
// document.querySelector('body').addEventListener('click', function(e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Body', e.target, e.currentTarget);
// });



// Event Delegation


