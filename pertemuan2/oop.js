class Mobil {
    constructor(type, color) {
        this.type = type
        this.color = color
        this.engineStatus = 'off'
    }
    engineStart () {
        this.engineStatus = 'on'
        console.log('engine start, mobilnya warna '+this.color+" typenya: "+this.type+" status mesin: "+this.engineStatus)
    }
    engineStop (){
        this.engineStatus = 'off'
        console.log('engine start, mobilnya warna '+this.color+" typenya: "+this.type+" status mesin: "+this.engineStatus)
    }
    static isEngineOn (mobil) {
        if (mobil.engineStatus === 'on'){
            console.log('Engine On')
        }else{
            console.log('Engine off')
        }
    }
    }
const m = new Mobil ('phanter', 'hitam');

// m.engineStop();

Mobil.isEngineOn(m);

//without Set & Get
class Car {
    constructor(color){
        this._color = color;
    }
}
let a = new Car('merah')

console.log(a._color);

//With Set & Get
class Car2 {
    constructor(){
        this._color = null
    }
    get color() {
        return `Warna Mobilnya adalah ${this._color}`
    }
    set color (color) {
        this._color = `${color} keren`
    }
}

const car2 = new Car2()

car2.color = 'merah'

console.log(car2.color)