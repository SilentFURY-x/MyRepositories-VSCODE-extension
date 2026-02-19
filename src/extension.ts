import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	const disposable = vscode.commands.registerCommand('my-repositories.openRepoPage', () => {

		const githubUrl = 'https://github.com/SilentFURY-x?tab=repositories';
		vscode.window.showInformationMessage('Opening My GitHub Repository Page!');
		vscode.env.openExternal(vscode.Uri.parse(githubUrl));
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
