# 🚀 My Repositories (VS Code Extension)

[![VS Code](https://img.shields.io/badge/VS%20Code-Extension-blue?logo=visual-studio-code)](https://code.visualstudio.com/)
[![GitHub](https://img.shields.io/badge/GitHub-API-black?logo=github)](https://docs.github.com/en/rest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**My Repositories** is a productivity-focused VS Code extension built to eliminate the friction of searching for your code online. It fetches your live GitHub repository list directly into the editor's search bar, allowing you to jump from code to browser in seconds.

---

## ✨ Key Features

* **🔍 Live Search:** Type and filter through your entire GitHub repository list in real-time.
* **🌐 Octokit Integration:** Powered by the official GitHub SDK for reliable data fetching.
* **🔑 Secure Auth:** Uses VS Code's native Authentication provider—no need to manually manage Personal Access Tokens (PATs).
* **🖱️ One-Click Access:** Adds a dedicated GitHub icon to your **Status Bar** for instant access.
* **🖱️ Context Menu:** Right-click anywhere in your editor to trigger the repository search.

---

## 📸 Preview



---

## 🛠️ Technical Implementation

Built with a focus on modern TypeScript and efficient API handling:
* **Asynchronous Fetching:** Implements `vscode.window.withProgress` to ensure a smooth UI during API calls.
* **Dynamic UI:** Uses `showQuickPick` with fuzzy-search enabled for fast navigation.
* **Cross-Platform:** Tested and optimized for both **Arch Linux (Hyprland)** and **Windows** environments.

### Tech Stack
- **Language:** TypeScript
- **Registry:** VS Code Extension API
- **API:** GitHub REST API via Octokit

---

## 🚀 Installation & Setup

1.  **Clone the Repo:**
    ```bash
    git clone https://github.com/SilentFURY-x/MyRepositories-VSCODE-extension.git
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run Extension:**
    - Press `F5` to open the **Extension Development Host**.
    - Run the command `Open My GitHub Repository Page` from the Command Palette (`Ctrl+Shift+P`).

---

## 👤 Author

**Arjun Tyagi**

- **GitHub:** [@SilentFURY-x](https://github.com/SilentFURY-x)
- **Projects:** RideAlong, ShopAThing, PeerConnect

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.