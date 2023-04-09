

const btns = document.querySelectorAll('.cell');

const removeCell = (event => {
    event.target.remove();
});

btns.forEach((item) => {
    item.addEventListener('click', removeCell);
});

