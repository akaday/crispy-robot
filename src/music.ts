import * as vs from "vscode";

export function playMusic() {
	const musicUri = vs.Uri.file("/path/to/your/music/file.mp3");
	const musicPlayer = new vs.AudioPlayer(musicUri);
	musicPlayer.play();
}
