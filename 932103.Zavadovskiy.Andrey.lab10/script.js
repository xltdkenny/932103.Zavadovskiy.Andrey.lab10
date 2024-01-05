document.addEventListener('DOMContentLoaded', function () {
    const curtain = document.getElementById('curtain');
    const lamp = document.querySelector('.lamp_image');
    const light = document.querySelector('.light');
    const figures = document.querySelector('.objects_figures');
    let isCurtainRaised = false;

    curtain.addEventListener('click', function () {
        if (!isCurtainRaised) {
            curtain.classList.add('open');
            isCurtainRaised = true;
        }
    });

    lamp.addEventListener('mousedown', () => {
        lamp.classList.add('mousedown');
     });
     
     lamp.addEventListener('mouseup', () => {
        lamp.classList.remove('mousedown');
     });
     
     lamp.addEventListener('click', () => {
        light.classList.toggle('on');
        figures.classList.toggle('display');
     });
     
     const rabbit = document.querySelector('.objects_rabbit');
     const bird = document.querySelector('.objects_bird');
     
     rabbit.addEventListener('click', () => {
        rabbit.classList.add('hide');
        bird.classList.remove('hide');
     });
     
     bird.addEventListener('click', () => {
        bird.classList.add('hide');
        rabbit.classList.remove('hide');
     });
});