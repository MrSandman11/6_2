'use strict';

const input = document.createElement('input');
input.classList.add('input__p');
document.body.append(input);

const p = document.createElement('p');
input.classList.add('p');
document.body.append(p);

input.addEventListener('change', () => {
  setTimeout(() => {
    p.textContent = input.value;
  }, 300);
});
