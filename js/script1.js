const modal = document.querySelector('.speakers-list');
const modal1 = document.querySelector('.brack1');
const modal2 = document.querySelector('.brack2');
const modal3 = document.querySelector('.brack3');
const speakers = [
  {
    
            photo: './images/speaker_01.png',
            name: 'Hellen john',
            title: 'CE0 of African movies Festival',
            description:
              'Founder of the African movies festival, with 15 years experience in film making',
          },
          {
            photo: './images/speaker_02.png',
            name: 'Bazu Bazu',
            title: 'CE0 of African movies Festival',
            description:
              'Founder of the African movies festival, with 15 years experience in film making',
          },
          {
            photo: './images/speaker_03.png',
            name: 'Kevin Mzito',
            title: 'CE0 of African movies Festival',
            description:
              'Founder of the African movies festival, with 15 years experience in film making',
          },
          {
            photo: './images/speaker_04.png',
            name: 'Felix Mtongoi',
            title: 'CE0 of African movies Festival',
            description:
              'Founder of the African movies festival, with 15 years experience in film making',
          },
        
          {
            photo: './images/speaker_05.png',
            name: 'Linda Henrys',
            title: 'CE0 of African movies Festival',
            description:
              'Founder of the African movies festival, with 15 years experience in film making',
          },
          {
            photo: './images/speaker_06.png',
            name: 'Shruti Shah',
            title: 'CE0 of African movies Festival',
            description:
              'Founder of the African movies festival, with 15 years experience in film making',
  },
];

let num = 0;
for (let i = num; i < 2; i++){
  modal1.innerHTML += `
  <div class="speakers-card show-${i}">
  <img src="${speakers[i].photo}" alt="speakers-image">
  <div class="speakers-details">
      <h3>${speakers[i].name}</h3>
      <p class="title"><q>${speakers[i].title}</q></p>
      <p>${speakers[i].description}</p>
  </div>
  </div>
  `;
  num = i;
}
for (let i = num +1; i < speakers.length - 2; i += 1){
  modal2.innerHTML += `
  <div class="speakers-card">
  <img src="${speakers[i].photo}" alt="speakers-image">
  <div class="speakers-details">
      <h3>${speakers[i].name}</h3>
      <p class="title"><q>${speakers[i].title}</q></p>
      <p>${speakers[i].description}</p>
  </div>
  </div>
  `;
  num = i;
}

for (let i = num +1; i < speakers.length; i += 1){
  modal3.innerHTML += `
  <div class="speakers-card">
  <img src="${speakers[i].photo}" alt="speakers-image">
  <div class="speakers-details">
      <h3>${speakers[i].name}</h3>
      <p class="title"><q>${speakers[i].title}</q></p>
      <p>${speakers[i].description}</p>
  </div>
  </div>
  `;
  num = i;
}
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  modal.classList.toggle('hidebtn');
  button.classList.add('hideme');
  button.classList.remove('btn-speakers');
});




// menu

/* eslint-enable */

const mobileMenu = document.querySelector('.main-menu');
const closeBtn = document.getElementById('close');
const hamburger = document.getElementById('menu-bar');

hamburger.onclick = function showMenu() {
  document.body.style.overflow = 'hidden';
  mobileMenu.style.display = 'block';
};
closeBtn.onclick = function closeMenu() {
  document.body.style.overflow = 'visible'; /* eslint-disable */ 
  mobileMenu.style.display = none = 'none'; /* eslint-disable */ 
};








