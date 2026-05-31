import { GameManager } from './GameManager.js';

// PHASE 1: Global Registration (Happens INSTANTLY on script load)
let game; // Sits as undefined for a split second

window.makePetAction = (actionKey) => {
    if (game) {
        game.handleAction(actionKey);
    } else {
        console.warn(`⏳ Engine not ready for "${actionKey}". Retrying in 200ms...`);
        setTimeout(() => { window.makePetAction(actionKey); }, 200);
    }
};

// PHASE 2: The Core Engine Ignition (Smart Conditional)
function init() {
    console.log("🚀 Bootstrapping Virtual Gecko Engine...");
    game = new GameManager(); // <-- This fills the 'let game' placeholder!
    game.start();
    game.renderUI();
}

// PHASE 3: The Gatekeeper Check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // Live Server bypasses the event listener and runs init() immediately here
}