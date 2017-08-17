console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'new content from main.js';

//move the image as animation

var marginLeft = 0;
var img1 =  document.getElementById('madi');
function moveRight ()
{
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img1.onclick =  function ()
                {
                    var interval = setInterval(moveRight, 50);
                };