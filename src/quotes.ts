import * as vscode from "vscode";

export function showQuote() {
    const quotes = [
        "Believe you can and you're halfway there.",
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "The only way to do great work is to love what you do.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "You are never too old to set another goal or to dream a new dream."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    vscode.window.showInformationMessage(quote);
}
