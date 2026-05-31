import { Gecko } from "./Gecko.js";
import { Environment } from "./Environment.js";
import { Actions } from "./Actions.js";

export class GameManager {
    constructor() {
        this.gecko = new Gecko('DigiFeet');

        // add parameters for different environment types
        this.environment = new Environment();
        this.gameInterval = null;
        this.tickRate = 1000;
    }


    start() {
        this.gameInterval = setInterval( () => this.gameLoop(), this.tickRate);
    }

    gameLoop() {
        if(!this.gecko.isHome) return this.stop();
        this.environment.update();

        const { x, y } = this.gecko.pos;
        const tempMod = this.environment.getTemperatureModifier(x, y);
        this.gecko.updateInternalState(tempMod);
        this.renderUI();
    }

    // Command Dispatcher
    handleAction(actionKey) {
        if (!this.gecko.isHome) return;

        const executeAction = Actions[actionKey];

        if (executeAction) {
            executeAction(this); // execute action and pass context to Gecko + Environment;
            this.renderUI();
        } else {
            console.warn(`${this.gecko.name} doesn't know how to do that !`);
        }
    }

    renderUI() {
        if (!this.gecko.isHome) {
        document.body.innerHTML = `<h1>💀 Game Over. Gordon left.</h1>`;
            return;
        }

        const statKeys = ['food', 'interest', 'warmth', 'mood', 'hp'];

        // Loop through the array to find the element and update it 
        statKeys.forEach(key => {
            const element = document.getElementById(`stat-${key}`);
            const value = this.gecko.stats[key];

            if (element && value !== undefined) {
                element.textContent = value.toFixed(0);
            }
        });
    }

    

    stop() {
        clearInterval(this.gameInterval);
        console.log("Game loop terminated. Goodbye.");
        
    }
}