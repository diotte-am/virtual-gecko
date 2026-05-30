export class Gecko {
    constructor(name) {
        this.name = name;
        this.isHome = true;

        this.stats = {
            hp : 100,
            mood : 75,
            food : 50,
            interest : 50,
            warmth : 75
        }
        
        // Decay rates
        this.decays = {
            food : 1,
            interest : 0.5,
            warmth : 2,
            hp : 1.5,
            mood : 0.5
        }

        this.pos = {
            x: 50, // percentage of screen width
            y: 80
        };
        

    }
    
    updateInternalState(temperatureModifier){
        let { hp, mood, food, interest, warmth } = this.stats;
        if (!this.isHome) return;
        warmth += temperatureModifier;

        if (food <= 0) {
            console.log(`${this.name} is awfully hungry.`);
            this.stats.hp -= this.secondaryDecays.hp;
            this.stats.mood -= this.secondaryDecays.mood;
        } if (hp <= 0) {
            console.log(`${this.name} was not feeling well and went to the vet.`);
            this.leave();
        } if (interest <= 0) {
            console.log(`${this.name} has gotten bored and wandered off.`);
            this.leave();
        } if (mood <= 0){
            console.log(`${this.name} has burned down your house out of spite.`);
            this.leave();
        } if (warmth <= 0){
            console.log(`${this.name} is feeling cold and sluggish.`);
            this.stats.hp -= this.secondaryDecays.hp;
            this.stats.mood -= this.secondaryDecays.mood;
        }
    }

    
    leave(){
        // take minumum value and end message depends on which is chosen.
        this.isHome = false;

    }


    // Interactive Actions
    eat(delta){
        if (!this.isHome) return;
        if (this.stats.food >= 100){
            console.log(`${this.name} has eaten too much and feels sick`);
            this.stats.hp -= this.secondaryDecays.hp;
            this.stats.mood -= this.secondaryDecays.mood;
            return;
        } else {
            console.log(`${this.name} is excited for food`);
            this.stats.food += delta;
            this.stats.mood += this.secondaryDecays.mood;
            return;
        }
    }

    play(){

    }

    bask(){

    }

    sleep(){

    }

    wander(){
        
    }

}