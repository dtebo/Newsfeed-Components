/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

function menuMaker(items){
  // Menu container
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.classList.add('non-close');

  // Menu item list
  const list = document.createElement('ul');
  list.classList.add('menu-list');
  list.classList.add('non-close');

  // Create menu items
  items.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.classList.add('menu-list-item');
    listItem.classList.add('non-close');

    list.appendChild(listItem);
  });

  // Add the menu item list to the container
  menu.appendChild(list);

  return menu;
}

// Header
const header = document.querySelector('.header');

// Generate menu
const m = menuMaker(menuItems);

header.appendChild(m);

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', (e) => {
  m.classList.toggle('menu--open');
});

const clickArea = document.querySelectorAll('body *');

clickArea.forEach((i) => {
  // if the element is not the menu
  if(!i.classList.contains('non-close')){
    // it is safe to close the menu when this element is clicked
    i.addEventListener('click', (e) => {
      m.classList.remove('menu--open');
    });
  }
});