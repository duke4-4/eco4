const dropDown = document.querySelector('.dropdown-content')

const burger = document.querySelector('.hamburger');
burger.addEventListener('click', function(){
    burger.classList.toggle('open');
    dropDown.classList.toggle('show');
})