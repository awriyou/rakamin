class Kendaraan {
    constructor(produsen){
        this.produsen = produsen
    }
    lokasi(){
        return "Lokasi " + this.produsen + " Ada pada 40 Cabang di Indonesia"
    }
}

class Motor extends Kendaraan{
    constructor(produsen){
        super(produsen)
    }
    lokasi() {
        return "Lokasi "+ this.produsen + " ada pada 30 cabang di Indonesia"
    }
}

const honda = new Motor("Honda")
console.log(honda.lokasi())
