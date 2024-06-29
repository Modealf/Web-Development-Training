import express from 'express';


const app = express();
const port = 3000;

app.get('/', (req, res) => {
var today = new Date();
const day = today.getDay();
var message = '';

if (day === 5 || day === 6) {
    message = 'Hey! its the weekend, its time to have fun!';
} 
else {
    message = 'Hey! its a weekday, its time to work hard!';
}

res.render('index.ejs', {message: message});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
