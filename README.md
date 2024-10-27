# Flutter VS Code Extension

![Build Status](https://img.shields.io/github/workflow/status/Dart-Code/Flutter/CI)
![Version](https://img.shields.io/visual-studio-marketplace/v/Dart-Code.flutter)
![Downloads](https://img.shields.io/visual-studio-marketplace/d/Dart-Code.flutter)

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Documentation](#documentation)
- [Reporting Issues](#reporting-issues)

## Introduction

This [VS Code](https://code.visualstudio.com/) extension adds support for
effectively editing, refactoring, running, and reloading [Flutter](https://flutter.dev/)
mobile apps. It depends on (and will automatically install) the
[Dart extension](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)
for support for the [Dart](https://dart.dev/) programming language.

Note: Projects should be run using `F5` or the `Debug` menu for full debugging functionality. Running from the built-in terminal will not provide all features.

## Installation

[Install from the Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter) or by [searching within VS Code](https://code.visualstudio.com/docs/editor/extension-gallery#_search-for-an-extension). The Dart extension will be installed automatically, if not already installed.

## Usage

1. Open a Flutter project in VS Code.
2. Press `F5` to start debugging the project.
3. Use the Debug Console to view logs and interact with the app.
4. Use the Flutter commands from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) to perform various tasks like creating new projects, running tests, and more.

## Troubleshooting

### Common Issues

- **Flutter SDK not found**: Ensure that the Flutter SDK is installed and the `flutter` command is available in your PATH.
- **Dart extension not installed**: The Flutter extension depends on the Dart extension. Make sure it is installed and enabled.
- **Debugging not working**: Ensure that you are running the project using `F5` or the `Debug` menu, not from the terminal.

## Contributing

We welcome contributions! Please see the [contribution guidelines](CONTRIBUTING.md) for more information on how to get started.

## Documentation

Please see the [Flutter documentation for using VS Code](https://docs.flutter.dev/development/tools/vs-code).

## Reporting Issues

Issues for both Dart and Flutter extensions should be reported in the [Dart-Code issue tracker](https://github.com/Dart-Code/Dart-Code/issues).
