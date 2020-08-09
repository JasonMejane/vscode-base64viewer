const vscode = acquireVsCodeApi();

function postMessage(command, mimeType, text) {
	var message = {
		command: command,
		mimeType: mimeType,
		text: text,
	};
	vscode.postMessage(message);
}
