const backgroundSelect = document.getElementsByClassName('background-select');
let backgroundSelected= '';

const changeBackground = (backgroundSelected) => {
    const body = document.querySelector('body');
    if (backgroundSelected === 'dark') {
        body.classList.add('dark');
    } else if (backgroundSelected === 'light') {
        body.classList.add('light');
    } else if (backgroundSelected === 'dungeon') {
        body.classList.add('dungeon');
    }
}

backgroundSelect.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        backgroundSelected = event.target.id;
        changeBackground(backgroundSelected);
    }
});