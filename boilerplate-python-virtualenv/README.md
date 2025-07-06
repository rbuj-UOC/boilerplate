# Projecte de python Hello World

## 1. Preparació de l'entorn

Per tal d'executar els fitxers de python dins de VS Code necessitareu:
* Instal·lar [VS Code](https://code.visualstudio.com/),
* Instal·lar l'extensió [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) per VS Code,
* Crear un entorn virtual amb virtualenv

Primer cal instal·lar [VS Code](https://code.visualstudio.com/) i l'[extensió de Python per VS Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python).

A continuació detallarem els passos per crear un entorn virtual amb `virtualenv`.

## 1.1. Instal·lació de virtualenv

Instal·lació de virtualenv en macOS amb Homebrew:

```
brew install virtualenv
```

## 1.2. Creació de l'entorn virtual amb virtualenv

Per crear entorns locals a VS Code mitjançant Conda, obriu `Command Palette` (⇧⌘P), cerqueu i seleccioneu l'ordre `Python: Create Environment`.

![](./img/create_environment.avif)

Es mostra una llista amb els tipus d'entorn: `Venv` o `Conda`. Seleccioneu `Venv`.

![](./img/create_environment_dropdown.avif)

L'ordre mostra una llista de versions de Python que es poden utilitzar al vostre projecte.

![](./img/conda_environment_python_versions.avif)

S'instal·laran automàticament les biblioteques definides al fitxer [requirements.txt](requirements.txt).

## 1.3 Execució des del terminal

Activem l'entorn virtual:

```sh
source .venv/bin/activate
```

Instal·lem les dependències a l'entorn virtual si no s'han instal·lat anteriorment:

```sh
pip install -r requirements.txt
```

Executem el fitxer de python:

```sh
python src/main.py
```

