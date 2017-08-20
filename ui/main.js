/*console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'new content from main.js';

//move the image as animation

var marginLeft1 = 0;
var img1 =  document.getElementById('madi');

function moveRight ()
{
    marginLeft1 = marginLeft1 + 5;
    img1.style.marginLeft = marginLeft1 + 'px';
}

img1.onclick =  function ()
                {
                    var interval = setInterval(moveRight, 50);
                };*/
                
                
var counter = 0;
var button1 =  document.getElementById('counter');
button1.onclick = function()
                  { 
                    counter = counter +1;
                    var span1 = document.getElementById('span');
                    span1.innerHTML = counter.toString();
                  };
