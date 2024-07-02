const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose')

//express app
const app=express()

//connect to mongo db
const dburi = 'mongodb+srv://tamil:Tamil090@node.qs09j7e.mongodb.net/node?retryWrites=true&w=majority&appName=node'
mongoose.connect(dburi)
.then((result)=> console.log('connected to db'))
.catch((err)=>console.log(err));

// register view engine
app.set('view engine','ejs');



//listen
app.listen(3000);


 //middle ware and static files

app.use(express.static('public'));

//third party middle ware
 app.use(morgan('dev'));
// app.use(morgan('tiny'));


// own middle ware
// app.use((req,res,next)=>
// {
//     console.log('new request:')
//     console.log('host',req.hostname);
//     console.log('path',req.path);
//     console.log('method',req.method);
//     next();//move to the req page
// })
app.get('/',(req,res)=>
{
    //res.send('<p> home page</p>');
    // res.sendFile('./views/index.html',{root:__dirname})
    //dynamic changes
    const blogs =[
        {title:'silapathigaraam',snippet:'famous tamil literature'},
        {title:'sirapuram',snippet:'famous tamil novel'},
        {title:'kamba ramayanam',snippet:'famous tamil kamban work'},
    ]
    res.render('index',{title:'HOME',blogs})
});

app.get('/about',(req,res)=>
    {
        // res.send('<p>about page</p>');
        // res.sendFile('./views/about.html',{root:__dirname})
        res.render('about',{title:'ABOUT'})
    });

app.get('/blogs/create',(req,res)=>
{
    res.render('create',{title:'NEW BLOG'});
})

//404 page like cache or default
app.use((req,res)=>
{
    // res.sendFile('./views/404.html',{root:__dirname})/
    res.status(404).render('404',{title:'NOT FOUND'});
})
