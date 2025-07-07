# Projecte d'Angular Hello World

## Nodejs

Instal·lar node 18 (versió LTS actual) en macos mitjançant homebrew:

```sh
brew install node@18
```

Modificar el fitxer ~/.profile (recomanació després d'instal·lar node 18)

```sh
export PATH="/usr/local/opt/node@18/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/node@18/lib"
export CPPFLAGS="-I/usr/local/opt/node@18/include"
```

Establir les opcions predeterminades quan es crea un nou fitxer [package.json](./package.json):

```sh
npm config set init-author-email "rbuj@uoc.edu"
npm config set init-author-name "Robert Buj"
npm config set init-license "CC0-1.0"
```

### Angular

Instal·lar Angular

```sh
npm install -g @angular/cli
```

#### Crear i executar el projecte d'Angular

Crear el projecte hello-world:

```sh
ng new hello-world
```

Accedir a la carpeta del projecte:

```sh
cd hello-world
```

Iniciar el projecte i obrir un navegador:

```sh
ng serve --open
```

### Prettier

Instal·lació:

```sh
npm install --save-dev prettier
```

Crear el fitxer [.prettierrc.json](.prettierrc.json)

```json
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

### ESLint

Instal·lació i configuració

```sh
ng add @angular-eslint/schematics
```

Veure el fitxer [eslint.config.js](eslint.config.js)

#### eslint-config-prettier

Instal·lació:

```sh
npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev
```

Configuració:

Editar el fitxer [eslint.config.js](eslint.config.js)

```js
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
...
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...tseslint.configs.stylistic, ...angular.configs.tsRecommended, eslintPluginPrettierRecommended],
...
```

Editar el fitxer [.prettierrc.json](.prettierrc.json)

```json
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
```

## VS Code

### Instal·lar Visual Studio Code

Baixem i instal·lem [VS Code](https://code.visualstudio.com/).

> [!TIP]
> Per llançar VS Code (per exemple `code .`) des d'un terminal afegirem la següent línia al fitxer `~/.bash_profile`:
>
> `alias code='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code'`

### Afegir les extensions recomanades a VS Code

1. Obrir la línia d'ordres a VS Code, en macOS: ⌘⇧P
2. Executar l'ordre `Configure Recommended Extensions (Workspace Folder)`
3. Afegir els identificadors de les extensions al fitxer [extensions.json](.vscode/extensions.json)
   - [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
   - [Color Picker](https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color)
   - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
   - [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)
   - [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)
   - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [HTMLHint](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint)
   - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

### Configuració de Prettier

1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `default formatter`
4. Seleccionar l'opció `Prettier`

### Formata al desar

1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `format on save`
4. Marcar la casella `Format on Save`

### Organitza les importacions al desar

1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `code actions on save`
4. clicar `Edit in settings.json`
5. Establir a certa l'ordenació de les importacions

```json
"source.organizeImports": true
```

### Configuració d'Emmet

1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `emmet tab`
4. Habilitar l'opció `Trigger Expansion on Tab`

### Abreviatures d'Emmet

| Abreviatura | Operació                                                  |
| ----------- | --------------------------------------------------------- |
| !           | Crear un document html5                                   |
| .NOM        | Crear un div amb la classe NOM                            |
| ELEMENT.NOM | Crear un ELEMENT (div, h1, p, ...) amb la classe NOM      |
| ELEMENT#ID  | Crear un ELEMENT (div, h1, p, ...) amb l'identificador ID |

### Dreceres de VS Code

| Drecera | Acció                     |
| ------- | ------------------------- |
| ⌘ ,     | Obrir les preferències    |
| ⌘ ⇧ P   | Obrir la linia d'ordres   |
| ⌘ ⇧ 7   | (des)Comentar el codi     |
| ⌥ ⇧ F   | Donar format al codi      |
| F5      | Iniciar la depuració      |
| Fn F2   | Refactor: canviar el nom  |
| Fn F3   | Cercar: cercar el següent |
