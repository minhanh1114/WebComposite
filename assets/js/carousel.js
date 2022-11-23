"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  clearInterval(interval);
  
  
  
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");
// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  clearInterval(interval);
  
  
  
});
const interval= setInterval(() => {
  
  nextSlide.click();
}, 5000);

/// slider two


const btnSliderTwoPrev = document.querySelector('.slider-two_left')
const btnSliderTwoNext = document.querySelector('.slider-two_right')

const wrapper = document.querySelector('.cards-wrapper');

// console.log(wrapper.clientWidth);

// grab the dots
const dots = document.querySelectorAll('.slide-two .dot');
// the default active dot num which is array[0]
let activeDotNum = 0;

dots.forEach((dot, idx) => {  
//   number each dot according to array index
  dot.setAttribute('data-num', idx);
  
//   add a click event listener to each dot
  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);
//     if the dot clicked is already active, then do nothing
    if(clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    }
    else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = wrapper.parentElement.clientWidth;
      // let pixels = -wrapper.clientWidth * clickedDotNum;
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';
//       remove the active class from the active dot
      dots[activeDotNum].classList.remove('active');
//       add the active class to the clicked dot
      dots[clickedDotNum].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDotNum = clickedDotNum;
    }
    
  });
  
});
btnSliderTwoNext.addEventListener('click',()=>{
  if(activeDotNum>=dots.length-1)
  {
    activeDotNum=-1;
  }
  let count=activeDotNum;
  count++;
  activeDotNum = count;
  // if()
  dots.forEach((item)=>{
    if(item.classList.contains('active'))
    {
      item.classList.remove('active');
    }
    

  })
  let displayArea = wrapper.parentElement.clientWidth * count;
  wrapper.style.transform = 'translateX(-'+ displayArea + 'px)';
  dots[count].classList.add('active');
})

btnSliderTwoPrev.addEventListener('click',()=>{
 
  
  if(activeDotNum===0)
  {
    activeDotNum=dots.length;
  }
  let count=activeDotNum;
  count--;
  activeDotNum = count;
  // if()
  dots.forEach((item)=>{
    if(item.classList.contains('active'))
    {
      item.classList.remove('active');
    }
    

  })
  let displayArea = wrapper.parentElement.clientWidth * count;
 
  wrapper.style.transform = 'translateX(-'+ displayArea + 'px)';
  dots[count].classList.add('active');
})
setInterval(() => {
  // btnSliderTwoNext.click();
},5000);

// drag the slider

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.display-area');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();


// search forrm 


// const node = document.getElementsByClassName("input1")[0];
// node.addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         // Do work
//     }
// });

