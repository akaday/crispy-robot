import * as vscode from "vscode";

export function playAnimation(animationType: string) {
    // Use vscode API to play custom animations
    vscode.window.showInformationMessage(`Playing ${animationType} animation`);
}

export function happyAnimation() {
    // Logic for happy animation
    console.log("Playing happy animation");
}

export function calmAnimation() {
    // Logic for calm animation
    console.log("Playing calm animation");
}

export function energeticAnimation() {
    // Logic for energetic animation
    console.log("Playing energetic animation");
}

export function focusedAnimation() {
    // Logic for focused animation
    console.log("Playing focused animation");
}
