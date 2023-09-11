class Kendaraan {
    constructor(merk, cc){
        this.merk = merk
        this.cc = cc
    }
    penjualan() {
        console.log('penjualan dengan CC  ' + this.cc + ' merupakan penjualan terbanyak');
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
