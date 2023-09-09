let random = []
let arrayGanjil = []
let arrayGenap = []


for(let i = 1; i <= 100; i ++){
    random.push(i)
    if(i % 2 == 0){
        arrayGenap.push(i)
    }else{
        arrayGanjil.push(i)
    }
}

//===============MIN MAX SUM AVERAGE===============
function terendah(array){
    let min = array[0]
    for(let i = 0; i<array.length; i++){
        if(array[i] < min){
            min = array[i]
        }
    }
    return min
}
function tertinggi(array){
    let max = array[0]
    for(let i = 0; i<array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}
function jumlah(array){
    let jumlah = 0;
    for (let i = 0; i < array.length; i++) {  
        jumlah += array[i];  
    }
    return jumlah
}
function rataRata(array) {
    // Menjumlahkan nilai-nilai dalam array
    let total = 0;
    for (let i = 0; i < array.length; i++) {  
        total += array[i];  
    }
    return total/array.length
}


//=============fungsi perbandingan dari 2 array=================
function perbandinganMIN(data1, data2){
    const ganjil = data1
    const genap = data2
    if(genap < ganjil){
        return("nilai MIN lebih besar array ganjil")
    }else if (genap > ganjil){
        return("nilai MIN lebih besar array genap")
    }else {
        return('nilai MIN nya sama')
    }
}

function perbandinganMAX(data1, data2){
    const ganjil = data1
    const genap = data2
    if(genap < ganjil){
        return("nilai MAX lebih besar array ganjil")
    }else if (genap > ganjil){
        return("nilai MAX lebih besar array genap")
    }else {
        return('nilai MAX nya sama')
    }
}
function perbandinganSUM(data1, data2){
    const ganjil = data1
    const genap = data2
    if(genap < ganjil){
        return("nilai SUM lebih besar array ganjil")
    }else if (genap > ganjil){
        return("nilai SUM lebih besar array genap")
    }else {
        return('nilai SUM nya sama')
    }
}

function perbandinganRataRata(data1, data2){
    const ganjil = data1
    const genap = data2
    if(genap < ganjil){
        return("Nilai AVERAGE lebih besar array ganjil")
    }else if (genap > ganjil){
        return("Nilai AVERAGE lebih besar array genap")
    }else {
        return('Rata-ratanya sama')

        
    }
}



//OUTPUT ==================

// pemanggilan array yang telah dibuat
console.log("Array 100 Index")
for(let a of random){
    console.log(a);
}

console.log("Array Genap")
for(let a of arrayGenap){
    console.log(a);
}

console.log("Array Ganjil")
for(let a of arrayGanjil){
    console.log(a);
}

console.log("----------------------------------------")
// Pemanggilan fungsi Min, Max, Sum, Average pada setiap array
console.log("Nilai MIN dari Array Ganjil adalah : " + terendah(arrayGanjil))
console.log("Nilai MIN dari Array Genap adalah : " + terendah(arrayGenap))
console.log("Nilai MAX dari Array Ganjil adalah : " + tertinggi(arrayGanjil))
console.log("Nilai MAX dari Array Genap adalah : " + tertinggi(arrayGenap))
console.log("Nilai SUM dari Array Ganjil adalah : " + jumlah(arrayGanjil))
console.log("Nilai SUM dari Array Genap adalah : " + jumlah(arrayGenap))
console.log("Nilai AVERAGE dari Array Ganjil adalah : " + rataRata(arrayGenap))
console.log("Nilai AVERAGE dari Array Genap adalah : " + rataRata(arrayGanjil))
console.log("========================================")

// Pemanggilan fungsi perbandingan Min, Max, Sum, Average
console.log(perbandinganMIN(terendah(arrayGanjil), terendah(arrayGenap)))
console.log(perbandinganMAX(tertinggi(arrayGanjil), tertinggi(arrayGenap)))
console.log(perbandinganSUM(jumlah(arrayGanjil), jumlah(arrayGenap)))
console.log(perbandinganRataRata(rataRata(arrayGanjil), rataRata(arrayGenap)))

