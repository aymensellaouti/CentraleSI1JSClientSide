const lampe = document.querySelector('.lampe');

setInterval(function () {
    lampe.classList.toggle('allumer');
},1000);
