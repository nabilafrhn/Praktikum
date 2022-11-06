const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req, res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
// menjalankan server pada port 8000
/*app.listen(8000, () => {
    console.log("Server run on port 8000");
})*/
// endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req, res) => {// :name dan :age → diberikan titik dua didepan menunjukkan "name" dan "age"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
    // menampung data yang dikirimkan
    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req, res) => {
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



// ---- BANGUN RUANG ----

app.post("/Kubus", (req, res) => {
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body
    let lpa = 6 * (sisi * sisi)
    let volume = sisi * sisi * sisi
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        lpa: lpa,
        volume: volume
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
app.get("/Balok", (req, res) => {

    let p = Number(req.body.p)
    let l = Number(req.body.l)
    let t = Number(req.body.t)

    let lpa = 2 * ((p * l) + (l * t) + (p * t))
    let volume = p * l * t
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        p: p,
        l: l,
        t: t,
        lpa: lpa,
        volume: volume
    }

    res.json(response)
})
app.post("/tabung", (req, res) => {

    let r = Number(req.body.r)
    let t = Number(req.body.t)

    let lpa = 2 * 22 / 7 * r * (r + t)
    let volume = 22 / 7 * r * r * t
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        r: r,
        t: t,
        lpa: lpa,
        volume: volume
    }
    res.json(response)
})
app.get("/kerucut", (req, res) => {

    let r = Number(req.body.r)
    let t = Number(req.body.t)
    let s = Number(req.body.s)

    let lpa = 22 / 7 * r * (r + s)
    let volume = 1 / 3 * 22 / 7 * r * r * t
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        r: r,
        t: t,
        s: s,
        lpa: lpa,
        volume: volume
    }

    res.json(response)
})

// ---- SUHU ----
app.post("/convert/celcius/:C", (req, res) => {

    let C = req.params.C

    let conReamur = 4 / 5 * C
    let conFahrenheit = 9 / 5 * C + 32
    let conKelvin = (C / 1) + 273

    //membuat objek yang berisi data yang akan dijadikan response
    let result = {
        C: C,
        conReamur: conReamur,
        conFahrenheit: conFahrenheit,
        conKelvin: conKelvin
    }
    //memanggil oobjek di method result
    response = {
        celcius: C,
        result
    }
    res.json(response)
})

app.get("/convert/reamur/:R", (req, res) => {

    let R = req.params.R

    let conCelcius = 5 / 4 * R
    let conFahrenheit = 9 / 4 * R + 32
    let conKelvin = 5 / 4 * R + 273

    let result = {
        R: R,
        conCelcius: conCelcius,
        conFahrenheit: conFahrenheit,
        conKelvin: conKelvin
    }

    response = {
        reamur: R,
        result
    }
    res.json(response)
})

app.get("/convert/fahrenheit/:F", (req, res) => {

    let F = req.params.F

    let conCelcius = 5 / 9 * (F - 32)
    let conReamur = 4 / 9 * (F - 32)
    let conKelvin = 5 / 9 * (F - 32) + 273

    let result = {
        F: F,
        conCelcius: conCelcius,
        conReamur: conReamur,
        conKelvin: conKelvin
    }

    response = {
        fahrenheit: F,
        result
    }
    res.json(response)
})

app.get("/convert/kelvin/:K", (req, res) => {

    let K = req.params.K

    let conCelcius = K - 273
    let conReamur = 4 / 5 * (K - 273)
    let conFahrenheit = 9 / 5 * (K - 273) + 32

    let result = {
        K: K,
        conCelcius: conCelcius,
        conReamur: conReamur,
        conFahrenheit: conFahrenheit
    }

    response = {
        kelvin: K,
        result
    }
    res.json(response)
})

app.post("/Decimal", (req, res) => {
    let angka = Number(req.body.angka) // mengambil nilai sisi dari body
    let biner = angka.toString(2) //toString = untuk membagi
    let octal = angka.toString(8)
    let heksadecimal = angka.toString(16)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        biner: biner,
        octal: octal,
        heksadecimal: heksadecimal
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/Biner", (req, res) => {
    let angka = Number(req.body.angka) // mengambil nilai sisi dari body
    let decimal = parseInt(angka, 2)//toString = untuk membagi, parseInt = mengalikan 
    let octal = parseInt(angka, 2).toString(8)
    let heksadecimal = parseInt(angka, 2).toString(16)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: decimal,
        octal: octal,
        heksadecimal: heksadecimal
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/Octal", (req, res) => {
    let angka = Number(req.body.angka) // mengambil nilai sisi dari body
    let decimal = parseInt(angka, 8)
    let biner = parseInt(angka, 8).toString(2)//toString = untuk membagi
    let heksadecimal = parseInt(angka, 8).toString(16)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: decimal,
        biner: biner,
        heksadecimal: heksadecimal
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/Heksadecimal", (req, res) => {
    let angka = Number(req.body.angka) // mengambil nilai sisi dari body
    let decimal = parseInt(angka, 16)
    let biner = parseInt(angka, 16).toString(2) //heksadesimal ke desimal dulu, terus desimal biner
    let octal = parseInt(angka, 16).toString(8) //heksadesmal ke desimal, trus desimal octal
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: decimal,
        biner: biner,
        octal: octal
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//---- BMI ----
app.post("/BMI", (req, res) => {
    let BB = Number(req.body.BB) // mengambil nilai sisi dari body
    let TB = Number(req.body.TB)
    
    let BMI = BB/(TB*TB)
    var status = ""                //var=variabel
    if(BMI<18.5)
    status = "Kekurangan berat badan"

    else if(BMI>=18.5)
    status = "Ideal"

    else if(BMI>=29.9)
    status = "Kelebihan berat badan"

    else
    status = "Obesitas"
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        BB: BB,
        TB: TB,
        BMI : BMI,
        status: status
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/GanjilGenap", (req, res) => {
    let bilangan = Number(req.body.bilangan) // mengambil nilai sisi dari body
    var ketarangan = ""

    if (bilangan%2==0) {
        notif = "Bilangan "+bilangan+" Adalah Bilangan Genap";
    } else {
         notif = "Bilangan "+bilangan+" Adalah Bilangan Ganjil";
                }
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        bilangan: bilangan,
        notif : notif
        
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// ---- Ganjil Genap ----


app.listen(8000, () => {
    console.log("Server run on port 8000");
})