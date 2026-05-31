import { GameManager } from './js/GameManager.js'

// this will remain null until the game engine loads
let game;

window.makePetAction = (actionKey) => {
    // Safety check: only forward the action if the game engine has loaded
    if (game) {
        game.handleAction(actionKey);
    } else {
        // If not ready, log a warning and set a timer to try again
        console.warn(`⏳ Engine not ready for "${actionKey}". Retrying in 200ms...`);
        
        setTimeout(() => {
            window.makePetAction(actionKey); // The function calls itself!
        }, 200); // 2
    }
};

function init() {
    
    const game = new GameManager();
    game.start();
    game.renderUI();

}

 document.addEventListener('DOMContentLoaded', init);

