const search_input =  document.querySelector('.search-input');
const parent_container = document.querySelector('.search-container');
const close_button = document.querySelector('.close-button');
search_input.addEventListener('focus', () => {
    parent_container.style.border = '1px solid blue';
    parent_container.style.margin = '0px 0px 0px 0px';
} );

search_input.addEventListener('blur', () => {
    parent_container.style.border = "1px solid rgb(199, 199, 199)";
    parent_container.style.margin = '0px 0px 0px 32px';
} );

search_input.addEventListener('input', () => {
   let input_value = search_input.value;
   console.log(input_value);
    if(input_value == "" ) {
        close_button.style.display = "none"
        
    }else {
        close_button.style.display = "inline"
    }
});

close_button.addEventListener('click', () => {
    search_input.focus();
    search_input.value = "";
    close_button.style.display = "none";
});


const content = document.querySelector('.category-content');
const rightArrow = document.querySelector('#right-arrow');
const leftArrow = document.querySelector('#left-arrow');
const leftArrowContainer = document.querySelector('.left-arrow-container');
const rightArrowContainer = document.querySelector('.right-arrow-container');
let currentTranslateX = 0;
leftArrowContainer.style.display = 'none';


rightArrow.addEventListener('click', () => {
    currentTranslateX -= 80;
    content.style.transform = `translateX(${currentTranslateX}px)`;

    if (currentTranslateX < 0 ) {
        leftArrowContainer.style.display = 'flex';
    
    } else {
        leftArrowContainer.style.display = 'none';
    }

    if (currentTranslateX > -250 ) {
        rightArrowContainer.style.display = 'flex';
    
    } else {
        rightArrowContainer.style.display = 'none';
    }
});

leftArrow.addEventListener('click', () => {
    currentTranslateX += 80;
    content.style.transform = `translateX(${currentTranslateX}px)`;
    if (currentTranslateX < 0 ) {
        leftArrowContainer.style.display = 'flex';
    } else {
        leftArrowContainer.style.display = 'none';
    }

    if (currentTranslateX >= -250 ) {
        rightArrowContainer.style.display = 'flex';
    
    } else {
        rightArrowContainer.style.display = 'none';
    }
});

const flex_arrow_button = document.querySelector('.flex-arrow-show'); 

const shorts_container_video = document.querySelector('.shorts-container-video');
flex_arrow_button.addEventListener('click', ()=> {
    shorts_container_video.style.flexWrap = "wrap";
    flex_arrow_button.style.display = "none";
})

const video_arrow_button = document.querySelector('.video-arrow-show'); 

const video_container_video = document.querySelector('.video-container-flex');
video_arrow_button.addEventListener('click', ()=> {
    video_container_video.style.flexWrap = "wrap";
    video_arrow_button.style.display = "none";
})