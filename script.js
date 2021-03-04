const burger = document.querySelector('#burger');
const switchBar = document.querySelector('#switchBar');
const form = document.querySelector('.form');
const button = document.querySelector('#button');
const headerExit = document.querySelector('#headerExit');
let flag = 0;

burger.addEventListener('click', () => {
    if (flag === 0) {
        switchBar.classList.add('switchBarActive');
        flag--;
    }
    else {
        switchBar.classList.remove('switchBarActive');
        flag++;
    }
})


button.addEventListener('click', () => {
    if (flag === 0) {
        form.classList.add('formActive');
        document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        flag--;
    }
    else {
        form.classList.remove('formActive');
        flag++;
    }
})

headerExit.addEventListener('click', () => {
    if (flag == -1) {
        form.classList.remove('formActive');
        document.querySelector('body').style.backgroundColor = '';
        flag++;
    }
})