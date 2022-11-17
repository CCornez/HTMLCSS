/**
 * scrollIntoView
 */

const homeRef = document.querySelector('main');
const assignmentsRef = document.querySelector('.assignments');
const challengesRef = document.querySelector('.challenges');
const homeButton = document.querySelector('#homeButton');
const assignmentsButton = document.querySelector('#assignmentsButton');
const challengesButton = document.querySelector('#challengesButton');

homeButton.onclick = (e) => {
  e.preventDefault();
  homeRef.scrollIntoView({ behavior: 'smooth' });
};

assignmentsButton.onclick = (e) => {
  e.preventDefault();
  assignmentsRef.scrollIntoView({ behavior: 'smooth' });
};

challengesButton.onclick = (e) => {
  e.preventDefault();
  challengesRef.scrollIntoView({ behavior: 'smooth' });
};

/**
 * scroll to previous position
 */

const assignmentsAndChallengesRef = [...document.querySelectorAll('.card')];

assignmentsAndChallengesRef.map((el) =>
  el.addEventListener('click', () => {
    localStorage.setItem('scrollRef', window.pageYOffset);
  })
);

localStorage.getItem('scrollRef') &&
  window.scrollTo(0, localStorage.getItem('scrollRef'));

console.log(assignmentsAndChallengesRef);

// homeButton.onclick = (e) => {
//   e.preventDefault();
//   homeRef.scrollIntoView({ behavior: 'smooth' });
// };

// assignmentsButton.onclick = (e) => {
//   e.preventDefault();
//   assignmentsRef.scrollIntoView({ behavior: 'smooth' });
// };

// challengesButton.onclick = (e) => {
//   e.preventDefault();
//   challengesRef.scrollIntoView({ behavior: 'smooth' });
// };

/**
 * navbar mobile
 */

const navbar = document.querySelector('header nav');
const navbarArrow = document.querySelector('#navbar-arrow');

navbarArrow.onclick = (e) => {
  e.preventDefault();
  navbar.classList.toggle('open');
};
