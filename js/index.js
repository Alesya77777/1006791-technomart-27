let form = document.querySelector('.modal-support');
let close = form.querySelector('.modal-close');
let sent = form.querySelector('.button-form');
let link = document.querySelector('.button-contact');
let nameUser = form.querySelector('[name=name]');
let emailUser = form.querySelector('[name=email]');
let storage;
let isStorageSupport = true;

try {
  storage = localStorage.getItem('nameUser');
} catch (err) {
  isStorageSupport= false
}


let openForm = link.addEventListener('click',  (evt) => {
  evt.preventDefault();
  form.classList.add('modal-show');
  if (storage) {
    nameUser.value = storage;
    emailUser.focus();
  } else {
    nameUser.focus();
  }
} );

let closeForm = close.addEventListener('click',  (evt) => {
  evt.preventDefault();
  form.classList.remove('modal-show');
} );

let sentForm = sent.addEventListener('click',  (evt) => {
  if (!nameUser.value || !emailUser.value) {
  evt.preventDefault();
  } else {
    if (isStorageSupport) {
    localStorage.setItem('nameUser', nameUser.value);
    }
  }
});
