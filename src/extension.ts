import * as vs from "vscode";
import { SdkCommands } from "./commands/sdk";
import { dartCodeExtensionIdentifier } from "./constants";
import { changeTheme } from "./commands/theme";
import { playMusic } from "./music";
import { playAnimation } from "./animations";
import { showQuote } from "./quotes";

export async function activate(context: vs.ExtensionContext): Promise<void> {
	// Ensure we have a Dart extension.
	const dartExt = vs.extensions.getExtension(dartCodeExtensionIdentifier);
	if (!dartExt) {
		// This should not happen since the Flutter extension has a dependency on the Dart one
		// but just in case, we'd like to give a useful error message.
		throw new Error("The Dart extension is not installed, Flutter extension is unable to activate.");
	}
	await dartExt.activate();

	if (!dartExt.exports) {
		console.error("The Dart extension did not provide an exported API. Maybe it failed to activate or is not the latest version?");
		return;
	}

	// Register SDK commands.
	const sdkCommands = new SdkCommands(context, dartExt.exports);

	// Register mood commands
	registerMoodCommands(context);

	// Register quote command
	const quoteDisposable = vs.commands.registerCommand("extension.showQuote", () => {
		showQuote();
	});
	context.subscriptions.push(quoteDisposable);
}

function registerMoodCommands(context: vs.ExtensionContext) {
	const moods = ["Happy", "Calm", "Energetic", "Focused"];
	moods.forEach((mood) => {
		const disposable = vs.commands.registerCommand(`extension.setMood${mood}`, () => {
			changeTheme(mood);
			playAnimation(mood);
			playSoundEffect(mood);
		});
		context.subscriptions.push(disposable);
	});

	// Play background music
	playMusic();
}

function playSoundEffect(mood: string) {
	let sound;
	switch(mood) {
		case "Happy":
			sound = "sounds/happy.mp3";
			break;
		case "Calm":
			sound = "sounds/calm.mp3";
			break;
		case "Energetic":
			sound = "sounds/energetic.mp3";
			break;
		case "Focused":
			sound = "sounds/focused.mp3";
			break;
	}
	const audio = new Audio(sound);
	audio.play();
}
