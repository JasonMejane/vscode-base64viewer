// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as fs from 'fs';
import * as mime from 'mime';
import * as vscode from 'vscode';
import { Base64Utils } from './base64utils';
import { Localizer } from './localizer';
import { View } from './view';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const extensionRoot = vscode.Uri.file(context.extensionPath);
	let localizer = new Localizer();
	const messages = localizer.getLocalizedMessages();

	// Register commands
	let disposable = vscode.commands.registerCommand('base64viewer.decodeBase64', () => {
		vscode.window.showInputBox({ prompt: messages.general.prompt.decode }).then(
			(base64String) => decodeAndDisplay(extensionRoot, base64String),
			(reason) => showErrorPopup(reason),
		);
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('base64viewer.encodeBase64', () => {
		vscode.window
			.showOpenDialog({
				canSelectFiles: true,
				canSelectFolders: false,
				canSelectMany: false,
				title: messages.general.prompt.encode,
			})
			.then(
				(uri) => encodeAndDisplay(extensionRoot, uri),
				(reason) => showErrorPopup(reason),
			);
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function decodeAndDisplay(extensionRoot: vscode.Uri, base64String: any) {
	let localizer = new Localizer();
	const messages = localizer.getLocalizedMessages();

	if (base64String !== undefined) {
		let b64u = new Base64Utils();
		let v = new View();

		let decodedString = b64u.prepareForDecoding(base64String);
		b64u.getMimeType(base64String).then((mimeType: string) => {
			v.createView(extensionRoot, decodedString, mimeType, 'decoding');
		});
	} else {
		showErrorPopup(messages.general.operationCancelled);
	}
}

async function encodeAndDisplay(extensionRoot: vscode.Uri, uris: vscode.Uri[] | undefined) {
	let localizer = new Localizer();
	const messages = localizer.getLocalizedMessages();

	if (uris !== undefined) {
		let v = new View();

		const uri = uris[0];
		const filePath = uri.fsPath;

		const fileMime = mime.getType(filePath) || messages.general.unknownType;

		fs.readFile(filePath, { encoding: 'base64' }, (err, data) => {
			if (err) {
				throw err;
			}
			v.createView(extensionRoot, data, fileMime, 'encoding', filePath);
		});
	} else {
		showErrorPopup(messages.general.operationCancelled);
	}
}

function showErrorPopup(message: string) {
	vscode.window.showErrorMessage(message);
}
