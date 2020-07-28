// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as fs from "fs";
import * as mime from "mime";
import * as vscode from "vscode";
import {Base64Utils} from "./base64utils";
import {View} from "./view";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const extensionRoot = vscode.Uri.file(context.extensionPath);

    // Register commands
    let disposable = vscode.commands.registerCommand("base64viewer.decodeBase64", () => {
        vscode.window.showInputBox({ prompt: "Enter the Base64 string to decode" }).then(
            (base64String) => decodeAndDisplay(extensionRoot, base64String),
            (reason) => showErrorPopup(reason)
        );
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand("base64viewer.encodeBase64", () => {
        vscode.window.showOpenDialog({ canSelectFiles: true, canSelectFolders: false, canSelectMany: false, title: "Choose the file you want to encode to a Base 64 string..." }).then(
            (uri) => encodeAndDisplay(extensionRoot, uri),
            (reason) => showErrorPopup(reason)
        );
	});
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function decodeAndDisplay(extensionRoot: vscode.Uri, base64String: any) {
    if (base64String !== undefined) {
		let b64u = new Base64Utils();
		let v = new View();

		let decodedString = b64u.prepareForDecoding(base64String);
		b64u.getMimeType(base64String).then((mimeType: string) => {
			v.createView(extensionRoot, decodedString, mimeType, "decoding");
		});
    } else {
		showErrorPopup("Operation cancelled");
    }
}

async function encodeAndDisplay(extensionRoot: vscode.Uri, uri: any) {
	if (uri !== undefined) {
		let b64u = new Base64Utils();
		let v = new View();

		uri = uri[0] as vscode.Uri;
		const filePath = uri.path;

		const fileMime = mime.getType(filePath) || "Unknown";

		fs.readFile(filePath, {encoding: 'base64'}, (err, data) => {
			if (err) {
			  throw err;
			}
			v.createView(extensionRoot, data, fileMime, "encoding", "(" + filePath + ")");
		  });        
    } else {
		showErrorPopup("Operation cancelled");
    }
}

function showErrorPopup(message: string) {
	vscode.window.showErrorMessage(message);
}
