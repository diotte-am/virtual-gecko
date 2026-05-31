import { GameManager } from './GameManager.js';

function init() {
    console.log("🚀 Bootstrapping Virtual Gecko Engine...");
    let game = new GameManager(); // <-- This fills the 'let game' placeholder!
    window.makePetAction = (actionKey) => {
    if (game) {
        game.handleAction(actionKey);
    } else {
        console.warn(`⏳ Engine not ready for "${actionKey}". Retrying in 200ms...`);
        setTimeout(() => { window.makePetAction(actionKey); }, 200);
    }
};

    game.start();
    game.renderUI();
}

// PHASE 3: The Gatekeeper Check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // Live Server bypasses the event listener and runs init() immediately here
}