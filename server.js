var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool =  require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config = {
                user:      'mailtomadhurip',
                database:  'mailtomadhurip',
                host:      'db.imad.hasura-app.io',
                port:      '5432',
                password:  process.env.DB_PASSWORD
             };




var articles =
{

      'article-one':   {
                   title: 'article one | madhuri polisetty',
                   heading: 'aritcle-oneheading',
                   date: 'aug-15-2017',
                   content: `   <div>
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
                                </div> `
                                
                 },
       'article-two':   { title: 'article two | madhuri polisetty',
                   heading: 'aritcle-twoheading',
                   date: 'aug-16-2017',
                   content: ` 
                                <div>
                                <p>thsis is article-two content</p>
                                <hr/>
                                <h3>aritcle -two</h3>
                                </div>
                                <div>
                                <p>thsis is article-two content</p>
                                <hr/>
                                <h3>aritcle -one</h3>
                                </div>
                                <div>
                                <p>thsis is article-two content</p>
                                <hr/>
                                <h3>aritcle -two</h3>
                                </div>
                                 `  },
       'article-three': {  title: 'article three | madhuri polisetty',
                           heading: 'aritcle-threeheading',
                           date: 'aug-17-2017',
                           content: ` 
                                <div>
                                <p>thsis is article-three content</p>
                                <hr/>
                                <h3>aritcle -three</h3>
                                </div>
                                <div>
                                <p>thsis is article-three content</p>
                                <hr/>
                                <h3>aritcle -three</h3>
                                </div>
                                <div>
                                <p>thsis is article-three content</p>
                                <hr/>
                                <h3>aritcle three</h3>
                                </div>
                               `  }
};


function createTemplate (data)
{
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;

  var htmlTemplate = ` <html>
                            <head>
                                <title>
                                    ${title}
                                </title>
                                
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <link href="/ui/style.css" rel="stylesheet" />
                            </head>
                            
                            <body>
                             <div class="container">  
                              <div>
                                  ${date}
                              </div>
                              <div>
                               <a href="/">home</a>
                               </div>
                              <div>
                                  ${heading}
                              </div>
                             
                              <div>
                                  ${content}
                              </div>
                               
                             </div>
                            </body>
                        </html> `    ;

return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});


var Pool = new Pool(config);
app.get('/test-db', function (req, res) 
{
  Pool.query('SELECT * FROM test', function(err, result)
                                    {
                                        if(err)
                                         {
                                             res.status(500).send(err.toString());
                                         }
                                        else
                                        {
                                            res.send(JSON.stringify(result.rows));
                                        }
                                    });
});



var names = [];
app.get('/submit-name', function (req, res)
{
  var name = req.query.name;
  names.push(name);
  res.send(JSON.stringify(name));
});




var counter = 0;
app.get('/counter', function (req, res)
{
    counter = counter + 1;
    res.send(counter.toString());
});





/*app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});*/


app.get('/articles/:articleName', function (req, res)
{ 
  Pool.query("SELECT * FROM article WHERE title = '" + request.params.articleName + "'" , function (err, result)
                                                                                          {
                                                                                             if(err)
                                                                                             {
                                                                                                 res.status(500).send(err.toString());
                                                                                             }
                                                                                             else
                                                                                             {
                                                                                                if(result.rows.length === 0)
                                                                                                {
                                                                                                    res.status(404).send('article not found');
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    var articleData = result.rows[0];
                                                                                                    res.send(createTemplate(articleData));
                                                                                                }
                                                                                             }
                                                                                          });

});



/*var names = [];
app.get('/submit-name/:name', function (req, res)
{
  var name = req.params.name;
  names.push(name);
  res.send(JSON.stringify(names));
});*/


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});




app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/favicon.ico', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
