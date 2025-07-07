# Install R using homebrew

Install [Homebrew](https://brew.sh/) in macos.

Install XQuartz:

```shell
brew install --cask xquartz
```

Install R:

```shell
brew install --cask r
```

Launch `R console`, next install `languageserver` from `VS Code` or `R Console`:

## Install languageserver package

The `languageserver` package is essential for providing language support in R, especially when using it with editors like Visual Studio Code. You can install it using either the R console or VS Code terminal.

### R Console

You can use the R console directly to install packages. Open the R console and run the following command:

```R
install.packages("languageserver")
```

![R Console](img/console.avif "R Console")

### VS Code

Alternatively, you can use Visual Studio Code (VS Code) to install the `languageserver` package. Make sure you have the R extension installed in VS Code, then open a new terminal in VS Code and run the same command:

```R
install.packages("languageserver")
```

![VS Code](img/vscode.avif "VS Code")

## Install R extension in VS Code

To enhance your R programming experience in Visual Studio Code, you can install the R extension. This extension provides features like syntax highlighting, code completion, and more.

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side or by pressing `Ctrl+Shift+X`.
3. Search for "R" in the Extensions Marketplace.
4. Install the "R" extension.
5. After installation, you may need to reload VS Code for the changes to take effect.

## Setup R extension in VS Code (optional)

1. Open Visual Studio Code.
2. Go to the settings by clicking on the gear icon in the lower left corner and selecting "Settings".
3. In the search bar, type "R path" to find the R path setting.
4. Set the path to your R installation. If you installed R using Homebrew, you can use the following command in the R console to find the path: ```R.home("bin")```
5. Copy the output path and paste it into the "R: RPath" setting in VS Code.

![VS Code](img/rpath.avif "RPath Setting")

## linter (optional)

```R
install.packages("lintr")
```

## code formatter (optional)

```R
install.packages("styler")
```
