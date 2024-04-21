const countValue = document.querySelector('#count');

const increment = () => {
  countValue.textContent = parseInt(countValue.textContent) + 1;
}

const decrement = () => {
  countValue.textContent = parseInt(countValue.textContent) - 1;
}