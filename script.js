let outer = document.querySelector('.outer');
let inner = document.querySelector('.inner');
let percent = document.querySelector('.inner span');
let anchor = document.querySelector('.inner a');
let externalCircle = document.querySelector('.external-circle');

let count = 0;

window.addEventListener('load', () => {
  let loading = setInterval(() => {
    if (count == 100) {
      outer.classList.remove('active');
      percent.classList.add('inactive');
      anchor.classList.add('active');
      clearInterval();
    } else {
      count = count + 1;
      percent.textContent = `${count}%`;
      externalCircle.style.strokeDashoffset = -count * 3.12;
    }
  }, 100);
});
