import { GameManager } from './js/GameManager'

const game = new GameManager();
game.start();

window.game = game;

console.log("🛠️ Dev Mode: You can manually control the game in this console!");
console.log("👉 Type: game.handleAction('feed') or game.handleAction('play')");

