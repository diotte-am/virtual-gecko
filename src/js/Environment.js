import { LightSource } from "./LightSource"

export class Environment {
    constructor() {
        this.lightSource = new LightSource(50, 80, 50, 50);
        this.ambientTemperature = 70;
        this.heatRadius = 60;
        this.maxTempChange = 4;
    }


    getTemperatureAt(lizard_x, lizard_y){
        if(!this.isLampOn) return this.ambientTemperature;

        const distance_x = Math.abs(this.lightSource.pos.x - lizard_x);
        const distance_y = Math.abs(this.lightSource.pos.y - lizard_y);
        const distance = Math.hypot(distance_x, distance_y);

        let localTemp = this.lightSource.heat - (distance * this.naturalCoolingRate);

        return localTemp;
    }

    getTemperatureModifier(lizard_x, lizard_y){
        if (!this.isLampOn) return -2;

        const delta_x = this.lightSource.pos.x - lizard_x;
        const delta_y = this.lightSource.pos.y - lizard_y;
        const distance = Math .hypot(delta_x, delta_y);

        if (distance > this.heatRadius) {
            return -1; // cooling outside radius 
        }

        const intensity = 1 - (distance / heatRadius);

        return this.maxTempChange * intensity;

        
    }

    update(){

    }

}