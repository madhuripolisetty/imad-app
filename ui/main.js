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
                
                

/* this code will increment counter only when button is clicked but not in  counter endpoint
var button =  document.getElementById('counter');
var counter = 0;
button.onclick = function ()
                  { 
                    counter = counter + 1;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                  };
*/

var button =  document.getElementById('counter');

button.onclick = function () 
{
//var counter = 0;

var request = new XMLHttpRequest();
request.onreadystatechange = function ()
                             {
                                 if ( request.readystate === XMLHttpRequest.DONE)
                                 {
                                     if ( request.status === 200 )
                                     {
                                         var counter = request.responseText;
                                         var span = document.getElementByID('count');
                                         span.innerHTML = counter.toString();
                                     }
                                 }
                             };
                             
request.open('GET', 'http://mailtomadhurip.imad.hasura-app.io/counter', true );

request.send(null);

};



