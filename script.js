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

////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(document.documentElement); // our HTML code
console.log(document.head); // HTML head element
console.log(document.body); // HTML body element

console.log(document.querySelector('.header')); // get HTML header element 
const sections = document.querySelectorAll('.section'); // get nodelist with elements which have class="section"
console.log(sections);

console.log(document.getElementById('section--1')); // get HTML element which has id="section--1"
const buttons = document.getElementsByTagName('button'); // get HTMLCollection(life collection) with all elements which tag-name <button>. 
console.log(buttons);
// main difference between nodelist and HTMLCollection is that nodelist saves all element which was created before its calling. Even we delete some element after calling, nodelist doesn't change. But HTMLCollection - is dynamic. It shows us changes made at thos moment

console.log(document.getElementsByClassName('btn')); // get HTMLCollection which has class="btn"

// The most popular are document.querySelector() & document.querySelectorAll() 


// 1. creating and inserting elements

//  .insertAdjacentHTML() - creating elements

const message = document.createElement('div'); // we create the html element (DOM object), but it doesn't appear in the DOM tree
message.classList.add('cookie-message'); // create class to our html element
// message.textContent = 'We use cookie on this web-site to improve functionality.';
message.innerHTML = 'We use cookie on this web-site to improve functionality. <button class="btn btn--close-cookie">Ok!</button>'; // we added to our HTML code text and button element with classes
const header = document.querySelector('.header'); // we select header element and put it in variable header
// header.prepend(message); // added our HTML code to parent's block (header) to the beginning (the first child of header)
header.append(message); //  added our HTML code to parent's block (header) to the end (the last child of header). At this time header.prepend(message) disappeares. Because message cannot be at the same time in to different places
// header.append(message.cloneNode(true)); // here we copied(cloned) our message and now it can appear as at top and bottom of its parrent block. cloneNode(true) - means that our node lement will copied with all child alements of ones
// header.before(message); // added message before header element
// header.after(message); // added message after header element

// 2. deleting elements

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove(); // we choose our button, added event listener and delete it. We delete all element, not just a class
  message.parentElement.removeChild(message); // this is the old way deleting the element. 
})
////////////////////////////////////////////////////////////////////////////////////////////////////
