// document.addEventListener("DOMContentLoaded", function () {
//     let next = document.querySelector('.next');
//     let prev = document.querySelector('.prev');

//     next.addEventListener('click', function () {
//         let items = document.querySelectorAll('.item');
//         document.querySelector('.slide').appendChild(items[0]);
//     });

//     prev.addEventListener('click', function () {
//         let items = document.querySelectorAll('.item');
//         document.querySelector('.slide').prepend(items[items.length - 1]);
//     });
// });





let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length-1])
})








// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const slider = document.querySelector(".slider");

// let index = 0;

// nextBtn.addEventListener("click", () => {
//     index++;
//     if (index > 2) index = 0;
//     slider.style.transform = `translateX(-${index * 100}%)`;
// });

// prevBtn.addEventListener("click", () => {
//     index--;
//     if (index < 0) index = 2;
//     slider.style.transform = `translateX(-${index * 100}%)`;
// });
