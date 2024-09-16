const buttonElement = document.querySelector('.js-pikmin-website');
const japanButton = document.querySelector('.js-jp-pikmin-website');
const signOutButton = document.querySelector('.js-sign-out-button');

let html = '';

renderWelcome();

buttonElement.addEventListener('click', () => {
  alert('Enjoy the Pikmin-fun!');
  window.open("https://pikmin.nintendo.com/", "_blank");
});

japanButton.addEventListener('click', () => {
  alert('Enjoy the Pikmin-fun!');
  window.open("https://www.nintendo.com/jp/character/pikmin/index.html", "_blank");
});

signOutButton.addEventListener('click', () => {
  window.location.href = "login.html";
});



function renderWelcome () {
  html = `
     <h2 class="intro">
          Click on the Cover Art for their offical Websites
        </h2>

        <p class="welcome">
          Welcome, Captain 
        </p>
  `
  document.querySelector('.js-header').innerHTML = html;
}