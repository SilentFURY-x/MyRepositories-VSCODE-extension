import * as vscode from 'vscode';
import { execSync } from 'child_process';

export function activate(context: vscode.ExtensionContext) {

	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBarItem.command = 'my-repositories.openRepoPage';
	statusBarItem.text = `$(github) My Repos`;
	statusBarItem.tooltip = 'Click to open GitHub Repositories';
	statusBarItem.show();

context.subscriptions.push(statusBarItem);
	
	const disposable = vscode.commands.registerCommand('my-repositories.openRepoPage', () => {

		const projectPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
		if (!projectPath) {
			vscode.window.showErrorMessage('Please open a folder first!');
			return;
		}

		try {
			const currentRepoUrl = execSync('git config --get remote.origin.url', { cwd: projectPath }).toString().trim();

			const repoPageUrl = currentRepoUrl.split('/').slice(0, 4).join('/') + '?tab=repositories';
			
			vscode.window.showInformationMessage('Opening Your GitHub Repository Page!');
			vscode.env.openExternal(vscode.Uri.parse(repoPageUrl));
		}
		catch (error) {
			vscode.window.showErrorMessage('This folder does not seem to be a Git repository.');
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
