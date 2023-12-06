function DeviceGroup (name) {
    this.name = name;
    this.type= 'electric';
    this.switchedon = function (switchedon) {
        if (switchedon == true) {
            console.log(`${name} is switched on`)
        } else {
            console.log(`${name} is switched off`)
        }        
    }
};

function IronDev(name,price) {
    this.name = name;
    this.price = price
};

function OvenDev (name, color) {
    this.name = name;
    this.color = color
};

IronDev.prototype = new DeviceGroup();
OvenDev.prototype = new DeviceGroup();

const tefalIron = new IronDev (name = 'Tefal', price = '4000', switchedon = true)
const boshOven = new OvenDev (name = 'Bosch', color = 'black', switchedon = true)

console.log(tefalIron.switchedon(true));
console.log(boshOven)