export class LightSource {
    // for later = pass in the id of a specific light. there will be a dictionary of names and stats.
    constructor(pos_x, pos_y, light, heat){
        this.pos = {
            x: pos_x,
            y: pos_y
        }

        this.uv = light;
        this.heat = heat;
        this.isLampOn = false;
    } 


    toggle(){
        this.isLampOn = !this.isLampOn;
        console.log(`🔌 Heat lamp turned ${this.isLampOn ? 'ON' : 'OFF'}.`);
    }

    move(pos_x, pos_y){
        this.pos.x = pos_x;
        this.pos.y = pos_y;
    }

    setUV(x){
        this.uv = x;
    }

    setHeat(x){
        this.heat = x;

    }

}