import * as vscode from 'vscode';
import { Octokit } from "@octokit/rest";

export function activate(context: vscode.ExtensionContext) {

	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBarItem.command = 'my-repositories.openRepoPage';
	statusBarItem.text = `$(github) My Repos`;
	statusBarItem.tooltip = 'Click to open GitHub Repositories';
	statusBarItem.show();

context.subscriptions.push(statusBarItem);
	
	const disposable = vscode.commands.registerCommand('my-repositories.openRepoPage', async () => {

		try {
            // 1. Get Authentication Session from VS Code
            const session = await vscode.authentication.getSession('github', ['repo'], { createIfNone: true });
            
            if (!session) {
                return; // User cancelled login
            }

            // 2. Initialize Octokit with the token
            const octokit = new Octokit({ auth: session.accessToken });

            // 3. Show a loading message while fetching
            const repos = await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Fetching your GitHub repositories...",
                cancellable: false
            }, async () => {
                const response = await octokit.rest.repos.listForAuthenticatedUser({
                    sort: 'updated',
                    per_page: 100
                });
                return response.data;
            });

            // 4. Map data for the Search Bar (QuickPick)
            const items = repos.map(repo => ({
                label: repo.name,
                description: repo.description || "",
                detail: repo.html_url,
                url: repo.html_url
            }));

            // 5. Show the list and handle selection
            const selected = await vscode.window.showQuickPick(items, {
                placeHolder: 'Search your repositories...',
                matchOnDescription: true
            });

            if (selected) {
                vscode.env.openExternal(vscode.Uri.parse(selected.url));
            }

        } catch (error) {
            vscode.window.showErrorMessage("Error fetching repositories: " + error);
        }
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
