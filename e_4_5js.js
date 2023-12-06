class ElectroApp{
  constructor(name, power){
  this.voltage = "220 v";
  this.name = name;
  this.power = power;
  this.connected=false;
  }
  
  getPower = function(){
  console.log(Power is ${power} W);
  }
  
  devOn = function(){
      if (this.connected===false){this.connected=true;
          console.log("The device is switched on");}else{console.log("Already enabled");}
      }
  
  devOff = function(){
      if (this.connected===true){this.connected=false;
          console.log("The device is switched off");}else{console.log("Already turned off");}
      }
  }
  
  
  class ElectricDevice extends ElectroApp{    
    constructor(name, power, electric, switchon ){
    super(name);
    this.power = power;
    this.electric = electric;
    this.switchon = switchon;    
    this. showPower = function(){
      console.log(power)
    }    
  }
  
  
  
  rechargeBegin = function(){
  console.log("Recharge is begin")
  }
  
  rechargeEnd = function(){
  console.log("Recharge is end")
  }
  
  getVolumAccum = function(){
  console.log('accumulator is ${volumaccum}')
  }
  }
  
  const lamp = new ElectroApp("Lamp", "60");
  
  
  const screwdriver = new ElectricDevice("Screwdriver", "1100", "3000 mA");
  
  lamp.devOn();
  screwdriver.rechargeBegin();