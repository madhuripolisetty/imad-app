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
                
                

var button =  document.getElementById('counter');
var counter = 0;
button.onclick = function ()
                  { 
                    counter = counter + 1;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                  };
