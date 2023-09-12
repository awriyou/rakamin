class Kendaraan {
    constructor(merk, cc){
        this.merk = merk
        this.cc = cc
    }
    penjualan() {
        console.log('penjualan dengan CC ' + this.cc + ' merupakan penjualan terbanyak');
    }
}

class Motor extends Kendaraan{
    constructor(merk, cc, warna, panjang){
        super(merk, cc)
        this.warna = warna
        this.panjang = panjang
    }

}

const honda = new Motor("Vario", 150, "Hitam", 175)
console.log(honda.merk)
console.log(honda.cc)
console.log(honda.warna)
console.log(honda.panjang)
 

honda.penjualan()


function produk(nama, harga){
    //this untuk inisialisasi public
    var discount = 40/100
    this.nama_pub = nama
    this.harga_pub = harga
    //var untuk inisialisasi private
    var nama_pri = nama
    var harga_pri = harga

    this.detail_pub = function(){
        return "nama " + nama + " Harga "+ (harga - (harga  * discount))
    }
    
    function detail_pri(){
        return "nama " + nama + " Harga "+ harga
    }
}

const transaksi = new produk("Lato - lato", 3000)
console.log(transaksi.harga_pub);
console.log(transaksi.harga_pri);

console.log(transaksi.detail_pub());
transaksi.discount = 90/100  //INI TIDAK AKAN DIJALANKAN JIKA discount diinisialisasi dengan var atau encap
console.log(transaksi.detail_pub());
// console.log(transaksi.detail_pri());

//KAPAN KITA MENGGUNAKAN ENCAPSULATION?
//misal ingin menambahkan element dalam sebuah class function, dapat digunakan var atau encap agar tidak digunakan diluar,
//jadi hanya digunaka ndidalam clas function saja, contoh nya seperti function diatas


//ABSTRACT
//keyword abstract digunakan untuk membuat class dan method yang bersifat abstrak
//maksudnya adalah tidak bisa langsung di panggil class abstract nya, bisa jika memanggil anak nya
//jika pada method abstract, method tersebut harus wajib dibuat, jika tidak dibuat akan error

class Person{
    constructor(nama){
        if(this.constructor === Person){
            throw new Error(
                'Tidak boleh menggunakan class ini karena bersifat abstract'
            )
        }
        this.nama = nama
    }
    greet(){
        throw new Error(
            'METHOD abstract belom di implementasi'
        )
    }
}

class Teacher extends Person{
    constructor(nama, age){
        super(nama)
        this.age = age
    }
    // greet(){
    //     console.log("HALLO nama saya " + this.nama);
        
    // }
}

const informatics = new Teacher("Zurnan", 31)

// const informatics2 = new Person("Roeslan")
 //Jadi tidak akan bisa dibuat object nya, karena class abstract

informatics.greet()
