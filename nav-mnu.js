document.addEventListener('DOMContentLoaded', () => { // wait for the content to be loaded
  const toggle = document.querySelector('.menu-toggle'); // save both elements by their id into constant variables
  const header = document.querySelector('.header-content');
  if (toggle) { //when u click toggle, we add the class nav-open to the classlist
    toggle.addEventListener('click', () =>
      header.classList.toggle('nav-open')
    );
  }
});
