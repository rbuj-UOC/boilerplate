# 1. Preparació de l'entorn

Per tal d'executar els *notebooks* dins de VS Code necessitareu:

* Instal·lar [VS Code](https://code.visualstudio.com/),
* Instal·lar l'extensió [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) per VS Code,
* Crear un entorn virtual amb Conda

Primer cal instal·lar [VS Code](https://code.visualstudio.com/) i l'[extensió de Python per VS Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python).

> [!TIP]
> Per llançar VS Code (per exemple `code .`) des d'un terminal afegirem la següent línia al fitxer `~/.bash_profile`:
>
> `alias code='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code'`

A continuació detallarem els passos per crear un entorn virtual amb `Conda`.

## 1.1. Instal·lació de miniconda

Si treballeu en macOS, podeu fer:

```sh
brew install --cask miniconda
conda init
conda config --set auto_activate_base False
source ~/.bash_profile
```

Després s'han d'acceptar els termes del servei dels canals d'instal·lació:

```sh
conda tos accept --override-channels --channel https://repo.anaconda.com/pkgs/main
conda tos accept --override-channels --channel https://repo.anaconda.com/pkgs/r
```

El paquet R requereix XQuartz:

```sh
brew install --cask xquartz
```

## 1.2. Creació de l'entorn virtual amb conda

Per crear entorns locals a VS Code mitjançant Conda, obriu `Command Palette` (⇧⌘P), cerqueu i seleccioneu l'ordre `Python: Create Environment`.

![](./img/create_environment.avif)

Es mostra una llista amb els tipus d'entorn: `Venv` o `Conda`. Seleccioneu `Conda`.

![](./img/create_environment_dropdown.avif)

L'ordre mostra una llista de versions de Python que es poden utilitzar al vostre projecte. Seleccioneu Python 3.11:

![](./img/conda_environment_python_versions.avif)

S'instal·laran automàticament les biblioteques definides al fitxer [environment.yml](environment.yml).

## 1.3 Configuració de VS Code

Establim les següents opcions als ajusts de l'espai de treball:

* Rpath: Mac `${workspaceFolder}/.conda/bin/R`
* Rterm: Mac `${workspaceFolder}/.conda/bin/radian`

## 1.4. Com crear un fitxer environment.yml nou

Elimineu el fitxer environment.yml i la carpeta .conda:

```sh
rm -fr environment.yml .conda
```

Repetiu el pas anterior per crear un entorn virtual nou amb la versió de Python que vulgueu, després obriu un terminal dins de VS Code i executeu la següent ordre:

```sh
conda install conda-forge::r-base conda-forge::r-languageserver conda-forge::radian -q -y
```

Ara ja podeu bolcar les biblioteques instal·lades amb conda amb la següent ordre:

```sh
conda export > environment.yml
```
