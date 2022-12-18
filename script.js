'use strict';

///////////////////////////////////////

const btnScrolling = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll('.btn--show-modal-window');


// Modal window
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

// smooth scrolling

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

////////////////////////////////////////////////////////////////////////////////////////////////
// Smoth page navigation 


// // code below good if have not a lot of links.

// document.querySelectorAll('.nav__link').forEach(function(htmlElement) {
//   htmlElement.addEventListener('click', function(e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     document.querySelector(href).scrollIntoView({
//       behavior: 'smooth',
//     });
//     console.log(href);
//   });
// });

// // code below more comfortable, here we'll use Event Delegation
// // 1. add eventListener to a COMMON parent of our links. In this case it is element <ul class="nav__links">
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  // // 2. determine target element
  console.log(e.target);// <a class="nav__link" href="#section--1">Услуги</a> <a class="nav__link" href="#section--2">Операции</a> <a class="nav__link" href="#section--3">Отзывы</a>
  if(e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////

// Анимация потускнения нав панели навигации
const nav = document.querySelector('.nav');

const navLinksHoverOpacity = function(e) {
  // console.log(this, e.currentTarget);
  if(e.target.classList.contains('nav__link')) {
    const linkOver = e.target; 
    const siblingLinks = linkOver.closest('.nav__links').querySelectorAll('.nav__link');
    const logo = linkOver.closest('.nav').querySelector('img');
    const logoText =  linkOver.closest('.nav').querySelector('.nav__text');

    siblingLinks.forEach(element => {
      if(element !== linkOver) {
        element.style.opacity = this;
      }
      logo.style.opacity = this;
      logoText.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', navLinksHoverOpacity.bind(0.4));
nav.addEventListener('mouseout', navLinksHoverOpacity.bind(1));


// Вкладка (inlay or tab or chart)
const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabContents = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function(e) {
  e.preventDefault();
  const clickedButton = e.target.closest('.operations__tab');
  console.log(clickedButton);
  if(!clickedButton) {
    return; // guard clause - пункт охраны
  }
  // Active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedButton.classList.add('operations__tab--active');
  // Active content
  tabContents.forEach(content => content.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clickedButton.dataset.tab}`).classList.add('operations__content--active');
});



// // sticky navigation

// const section1Coords = section1.getBoundingClientRect();
// // console.log(section1Coords);

// window.addEventListener('scroll', function(e) {
//   // console.log(window.scrollY);

//   if(this.window.scrollY > section1Coords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
 

// sticky navigation - Intersection Observer API (наблюдатель пересечения) (Какая-то лютая ДИЧЬ!!!)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)
const getStickyNav = function (entries) {
  const entry = entries[0];
  console.log(entry);
  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const observer = new IntersectionObserver(getStickyNav, {
  root: null,
  treshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


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


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////
// // Dom traversing (Перемещение по DOM)

// const h1 = document.querySelector('h1');

// //moving down (to child)
// console.log(h1.querySelectorAll('.highlight')); // nodelist with 2 elements class="highlight"
// console.log(h1.childNodes); // nodelist of all elements which are contained in class="highlight": text, comment, text, span, text, br, text, span, text
// console.log(h1.children); // in this case get HTMLCollection [span.highlight, br, span.highlight]. It works only for direct descendants. Nested children are not specified
// console.log(h1.firstElementChild); // get the first child of parent element // span.highlight
// h1.firstElementChild.style.color = 'yellow'; // change color text of the first element of parent element
// console.log(h1.lastElementChild); // get the last child of parent element // span.highlight(in this case first and last elements of h1 have the same tag and class name)
// h1.lastElementChild.style.color = 'pink'; // change color text of the last element of parent element

// // moving up (to parent)
// console.log(h1.parentNode); // get parent element of h1
// console.log(h1.parentElement); // the same (get parent element of h1)

// const h2 = document.querySelector('h2');
// console.log(h2);
// console.log(h2.closest('.section')); // get the closest(nearest) parent element
// h2.closest('.section').style.backgroundColor = 'blue';
// h2.closest('h2').style.backgroundColor = 'green';

// // moving on the same level (neighbors (previous or next one) brothers)
// console.log(h2.previousElementSibling); // in this case get null (because h2 doesn't have a previous element)
// console.log(h2.nextElementSibling); // get h3 class="section__header" as next neighbor

// console.log(h1.parentElement.children); // in this way we can get all neighbors of element h1 (we go to a parent of h1 and then get HTMLCollection of all direct children, neighbors of our element h1)


////////////////////////////////////////////////////////////
// // Intersection Observer API (наблюдатель пересечения)

// const observerCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const observerOption = {
//   root: null, // root пересекается с таргет элементом 
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(observerCallback, observerOption);
// observer.observe(section1);

