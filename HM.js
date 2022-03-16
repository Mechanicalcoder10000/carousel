
let flag=2;

function controller(x){
    flag=(flag+x);
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    let slides=document.getElementsByClassName('slider');
    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(flag<0){
        flag=slides.length-1;
        num=flag;
    }
    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display="block";
    
}
