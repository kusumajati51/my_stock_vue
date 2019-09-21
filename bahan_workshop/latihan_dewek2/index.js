const path = require('path'); //include jalur filenya
const express = require('express'); //include package atau plugin expressjs
//cara installnya "npm install express"
const app = express(); //menjalankan expressjs

app.set('view engine', 'ejs'); //menetapkan ektensi file yang akan di jadikan view
//cara installnya "npm install ejs"
app.set('views', 'views'); //menetapkan folder layout atau file ejs berada
app.use(express.static(__dirname + '/public')); 
//menetapkan folder bahan - bahan website seperti images, js, css, dll

//route untuk halaman home
app.get('/',(req, res) => {
  res.send('Welcome To Express'); //memberikan respon tulisan
});
 
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('This is about page');
});

//route untuk halaman baba
app.get('/baba',(req,res)=>{
  res.render('index'); //memberikan respon berupa layout
});
 
//menjalan websitenya dengan port 8000
app.listen(5555, () => {
  console.log('server berjalan pada url http://localhost:5555');
});