var image = 1;

function slider() {
    if (image > 3) {
        image = 1;
    }
    document.getElementById('sliderContainer').style.backgroundImage = 'url("puppy' + image + '.jpg")';
    image++;
    //setTimeout runs only once, but because in this case it is inside the function it works recursively
    setTimeout(slider, 4000);
}
slider();

//Another option would be to use SetInterval, which continuously calls itself.  In this case you would want it outside your function.
//setInterval(slider, 4000);
