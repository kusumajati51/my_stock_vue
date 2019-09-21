var http = require('http'); //include server

var server = http.createServer(function (req, res) {
  res.end("Selamat datang di pemrograman Nodejs");
});

//baris 3 membuat sebuah server baru dan di dalam server tersebut bisa mengunakan metode req (request) dan res(respon)
//request merupakan hal - hal yang di kirim ke dalam suatu function / fungsi
//respon merupakan hal - hal yang bisa kita kirim untuk hasil outputnya
//baris ke 4 mengirimkan respon untuk menampilkan sebuah kata

server.listen(8000); //menentukan port untuk menjalankan server kita
//port dapat di ubah sesuai yang kita inginkan tetapi usahakan 4 digit seperti diatas

console.log("server berjalan pada url http://localhost:8000"); 
//console.log merupakan kode untuk menampilkan output pada command prompt
//http://localhost:8000 kalau menjalankan offline