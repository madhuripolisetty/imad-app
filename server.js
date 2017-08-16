var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
                   title: 'article one | madhuri polisetty',
                   heading: 'aritcle-one',
                   date: 'aug-15-2017',
                   content: ` <html>
                                <head>
                                <title>
                                article-one
                                </title>
                                
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <link href="/ui/style.css" rel="stylesheet">
                                
                                </head>
                                <body>
                                <div class="container" >  
                                <div>
                                <p>thsis is article-one content</p>
                                <hr/>
                                <h3>aritcle -one</h3>
                                </div>
                                <div>
                                <p>thsis is article-one content</p>
                                <hr/>
                                <h3>aritcle -one</h3>
                                </div>
                                <div>
                                <p>thsis is article-one content</p>
                                <hr/>
                                <h3>aritcle -one</h3>
                                </div>
                                </div>
                                </body>
                                </html> `
};


function createTemplate(data)
{
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;

  var htmlTemplate = `<html>
                            <head>
                                <title>
                                    ${title};
                                </title>
                                
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <link href="/ui/style.css" rel="stylesheet">
                               
                            </head>
                            <body>
                             <div class="container" >  
                              <div>
                                  ${date};
                              </div>
                              <div>
                                  ${heading};
                              </div>
                             
                              <div>
                                  ${content};
                              </div>
                               
                             </div>
                            </body>
                        </html> `    ;

return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});


app.get('/article-two', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});





app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
