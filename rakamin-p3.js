//CASE 1
let suhu = 15
let kondisi = suhu >= -100 && suhu <= 0 ? "Beku" : 
              suhu >= 1 && suhu <= 100 ? "Cair" : 
              suhu >= 101 && suhu <= 500 ? "Uap":
              "Tidak terdefinisi" 
console.log(kondisi)
// misal nya saya disini memiliki suhu 15, pengkondisian disini menggunakan ternary, jika 
// suhu diatas -100 dan suhu dibawah 0, maka beku. jika suhu diatas 1 dan suhu dibawah 100, maka 
// cair. dan jika diatas 101 dan dibawah 500 maka unescape. lalu print variabel kondisi yang berisi
// hasil pengkondisiannya



// CASE 2
let vehicle = "motor"
let cc = 1600
let spbu = vehicle == "plat kuning" || vehicle == "motor" ? "BBM SUBSIDI" : 
           cc >= 0 && cc < 1500 ? "BBM Pertamax" :  
            "BBM Pertamax Turbo"             
console.log(spbu)
//



// let makananFavorit = "udang"

// const umurSaya = 17

// const makananFavoritArray = ["udang", "Nasgor", "Nasduk"];

// var ktpSaya = {
//     'nama' : 'Ario Al el dul',
//     'TanggalLahir' : '30 Febuari 1882',
//     'Alamat' : 'Australia',
//     'JenisKelamin' : 'Yang lain',
// }
