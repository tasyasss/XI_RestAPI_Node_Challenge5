// // index.js untuk testing berhasil

// // (4) pemanggilan pustaka yang telah diintall untuk
// // dihubungkan pada file index.js
// const express = require("express") // memanggil library express js
// const bodyParser = require("body-parser") // memanggil library body-parser
// const cors = require("cors") // memanggil library cors
// const { Agent } = require("http")
// const app = express()


// // (5)pemanggilan fungsi yang terdapat pada pustaka express, body-
// // parser, dan cors

// // penggunaan body-parser untuk ekstrak data request berformat JSON
// app.use(bodyParser.json())

// // penggunaan body-parser untuk ekstrak data request dari body
// app.use(bodyParser.urlencoded({extended: true}))

// // penggunaan cors agar end point dapat diakses oleh cross platform
// app.use(cors())


// // (6) membuat end-point pertama menggunakan method GET dengan url
// // “/test”
// // (6.1)endpoint "/test" dengan method GET
// app.get("/test", (req,res) => {
//     // req merupakan variabel yang berisi data request
//     // res merupakan variabel yang berisi data response dari end-point

//     //membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         message: "ini end-point pertama ku",
//         method : req.method,
//         code: res.statusCode
//     }

//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })


// // (7) menambahkan fungsi untuk menjalankan server pada port tertentu.

// // menjalankan server pada port 8000
// app.listen(8000, () => {
//     console.log("Server run on port 8000");
// })


// // index.js testing bujur sangkar berhasil

// // (4) pemanggilan pustaka yang telah diintall untuk
// // dihubungkan pada file index.js
// const express = require("express") // memanggil library express js
// const bodyParser = require("body-parser") // memanggil library body-parser
// const cors = require("cors") // memanggil library cors
// const { Agent } = require("http")
// const app = express()


// // (5)pemanggilan fungsi yang terdapat pada pustaka express, body-
// // parser, dan cors

// // penggunaan body-parser untuk ekstrak data request berformat JSON
// app.use(bodyParser.json())

// // penggunaan body-parser untuk ekstrak data request dari body
// app.use(bodyParser.urlencoded({extended: true}))

// // penggunaan cors agar end point dapat diakses oleh cross platform
// app.use(cors())


// // (6.3)end-point "/bujur_sangkar" dengan method POST
// app.post("/bujur_sangkar", (req,res) => {
    
//     // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
//     let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
//     let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body

//     let luas = panjang * lebar
//     let keliling = 2 * (panjang + lebar)

//     // membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         panjang: panjang,
//         lebar: lebar,
//         luas: luas,
//         keliling: keliling
//     }

//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })


// // (7) menambahkan fungsi untuk menjalankan server pada port tertentu.
// // menjalankan server pada port 8000
// app.listen(8000, () => {
//     console.log("Server run on port 8000");
// })


// index.js

// (4) pemanggilan pustaka yang telah diintall untuk
// dihubungkan pada file index.js
const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const { Agent } = require("http")
const app = express()


// (5)pemanggilan fungsi yang terdapat pada pustaka express, body-
// parser, dan cors

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// // (6.1)end-point "/kubus" dengan method POST >>> berhasil
// app.post("/kubus", (req,res) => {
    
//     // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
//     let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body

//     let luas = 6 *(panjang * panjang)
//     let volume = panjang * panjang * panjang

//     // membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         panjang: panjang,
//         luas: luas,
//         volume: volume
//     }

//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })


// // (6.2)end-point "/balok" dengan method POST
// app.post("/balok", (req,res) => {
    
//     // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
//     let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
//     let lebar = Number(req.body.lebar) // mengambil nilai lebar dari body
//     let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

//     let luas = panjang * lebar * tinggi
//     let volume = (2 * panjang * lebar) + (2 * panjang * tinggi) + (2 * lebar * tinggi)

//     // membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         panjang: panjang,
//         lebar: lebar,
//         tinggi: tinggi,
//         luas: luas,
//         volume: volume
//     }

//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })


// // (6.3)end-point "/bola" dengan method POST
// app.post("/bola", (req,res) => {
    
//     // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
//     let jari = Number(req.body.jari) // mengambil nilai jari-jari dari body

//     let luas = 4 * 3.14 * jari * jari
//     let volume = 4/3 * 3.14 * jari * jari * jari

//     // membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         jari: jari,
//         luas: luas,
//         volume: volume
//     }

//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })


// // (6.4)end-point "/tabung" dengan method POST
// app.post("/tabung", (req,res) => {
    
//     // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
//     let jari = Number(req.body.jari) // mengambil nilai jari-jari dari body
//     let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

//     let luas = 2 * 3.14 * jari * (jari + tinggi)
//     let volume = 3.14 * jari * jari * tinggi

//     // membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         jari: jari,
//         tinggi: tinggi,
//         luas: luas,
//         volume: volume
//     }

//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })

// (6.5)end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// (7) menambahkan fungsi untuk menjalankan server pada port tertentu.
// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
