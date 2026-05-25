export class Environment {
    constructor() {
        this.isLampOn = false;
        this.ambientTemperature = 70;
        this.naturalCoolingRate = 2;
        this.maxLampTemp = 95;
    }

    toggleLamp(){
        this.isLampOn = !this.isLampOn;
        console.log(`🔌 Heat lamp turned ${this.isLampOn ? 'ON' : 'OFF'}.`);
    }


    getTemperatureAt(lizard_x){
        if(!this.isLampOn) return this.ambientTemperature;

        const distance = Math.abs(this.lampPosition - lizard_x);

        let localTemp = this.maxLampTemp - (distance * this.naturalCoolingRate);

        return Math.max(this.ambientTemperature, localTemp);
    }

}