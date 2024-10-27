import * as vscode from "vscode";

export function playAnimation(animationType: string) {
    // Use vscode API to play custom animations
    vscode.window.showInformationMessage(`Playing ${animationType} animation`);
}
