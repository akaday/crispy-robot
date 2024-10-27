import * as vs from "vscode";

export function changeTheme(mood: string) {
    const config = vs.workspace.getConfiguration();
    let theme: string;

    switch (mood) {
        case "Happy":
            theme = "Bright yellows and oranges";
            break;
        case "Calm":
            theme = "Soft blues and greens";
            break;
        case "Energetic":
            theme = "Bold reds and purples";
            break;
        case "Focused":
            theme = "Neutral greys and whites";
            break;
        default:
            theme = "Default";
            break;
    }

    config.update("workbench.colorTheme", theme, true);
}
