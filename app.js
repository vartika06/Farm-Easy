var express = require('express');
const keys = require('./config/keys');
var stripe = require('stripe')(keys.stripeSecretKey);
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT || 3000;
// EJS Middleware
app.set('view engine', 'ejs'); //searches ejs file in 'views' folder
// bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/assets', express.static('stuff'));


app.get('/', function(req,res){
    res.render('index');
});

app.get('/contact', function(req,res){
    res.render('contact');

});






app.get('/pay',function(req,res){
    res.render('pay', {
        stripePublishableKey : keys.stripePublishableKey
    });
});





app.post('/charge', (req, res) => {
    const amount = 5000;
    
    stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
      amount,
      description: 'Home Solutions',
      currency: 'usd',
      customer: customer.id
    }))
    .then(charge => res.render('success'));
  });



app.listen(port,()=>{
    console.log(`Server started on ${port}`);
});