// console.log("Step 1");

// setTimeout(function (){
//     console.log('The time has come');
// }, 3000)


// console.log("Step 2");


// CALLBACK
//===========
// const notify = () => {
//     console.log("Sudah Selesai");
// }
// const startplayGame = (name, callback) => {
//     console.log("Start Game " + name + " Sekarang!");
//     callback()
// }

// let nama = "Battle Rims"
// let nama2 = "Solitaire"
// let nama3 = "Tomb Raider"




// startplayGame(nama ,function(){
//     startplayGame(nama2, function(){
//         startplayGame(nama3, function(){
//             console.log("Sudah Selesai game nya");
//         })
//     })
// });

// PROMISE
//==========
let tabungan = 30
const belanja = new Promise((resolve, reject) => {
    if(tabungan > 50){
        resolve("Bisa Beli Tamiya")
    }else{
        reject("Tabungan belum cukup")
    }
})

belanja.then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error);
    
})

//PROMISE ALL
const firstProgress = new Promise((resolve, reject)=> {
    resolve('0%')
})
const secondProgress = new Promise((resolve, reject)=> {
    resolve('40%')
})
const lastProgress = new Promise((resolve, reject)=> {
    resolve('100%')
})

Promise.all([firstProgress, secondProgress, lastProgress]).then((result)=>{
    console.log(result);
})

let status = 0
const belajar = new Promise((resolve, reject)=>{
    status += 30
    resolve(status)
})

belajar.then((result)=>{
    console.log("STATUS : sudah " + result + "%");
    return result + 30
}).then((result)=>{
    console.log("STATUS : sudah " + result + "%");
    return result + 30
}).then((result)=>{
    console.log("STATUS : sudah " + result + "%");
    return result + 30
}).then((result)=>{
    if(result >= 100){
        console.log("Belajar sudah selesai");   
    }
})


const startPlayGame = (nama) =>{
    return new Promise ((resolve , reject )=>{
        resolve("Start Game " + nama + " Sekarang!")
    })    
}
let nama = "Battle Rims"
let nama2 = "Solitaire"
let nama3 = "Tomb Raider"

Promise.all([startPlayGame(nama),startPlayGame(nama2), startPlayGame(nama3)]).then((result)=>{
    for (let game of result){
        console.log(game);
    }
    console.log("Game end");
    
})

//ASYNC AWAIT : Membuat asyncronous menjadi syncronous pastikan berdiri diatas promise
async function startGame(nama){
    let status = await startPlayGame(nama)
    console.log("Async Await : "+ status);
}
startGame(nama)