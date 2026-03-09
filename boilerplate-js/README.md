# Start

Boilerplate for html

## Nodejs

Establir les opcions predeterminades quan es crea un nou fitxer [package.json](./package.json):

```sh
npm config set init-author-email "rbuj@uoc.edu"
npm config set init-author-name "Robert Buj"
npm config set init-license "CC0-1.0"
```

Crea un nou fitxer [package.json](./package.json):

```sh
npm init --yes
```

### Prettier

```sh
npm install --save-dev prettier
```

Afegir les opcions de formatació al fitxer [.prettierrc.json](.prettierrc.json)

```json
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false
}
```

### ESLint

```sh
npm init @eslint/config@latest
```

#### eslint-config-prettier

```sh
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

Editar el fitxer [eslint.config.mjs](./eslint.config.mjs)

```js
import eslintConfigPrettier from 'eslint-config-prettier';

export default [eslintConfigPrettier];
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
2. Executar l'ordre `Extensions: Configure Recommended Extensions (Workspace Folder)`
3. Afegir els identificadors de les extensions al fitxer [extensions.json](.vscode/extensions.json)
   - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
   - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Configuració de Prettier

1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `default formatter`
4. Seleccionar l'opció `Prettier`

### EditorConfig

1. Clicar on es vol crear el fitxer `.editorconfig` amb el botó dret del ratoli a l'explorador
2. Seleccionar Generate .editorconfig

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
