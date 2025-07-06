# 1. Preparació de l'entorn

Per tal d'executar els *notebooks* dins de VS Code necessitareu:
* Instal·lar [VS Code](https://code.visualstudio.com/),
* Instal·lar l'extensió [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) per VS Code,
* Crear un entorn virtual amb Conda

Primer cal instal·lar [VS Code](https://code.visualstudio.com/) i l'[extensió de Python per VS Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python).

A continuació detallarem els passos per crear un entorn virtual amb `Conda`.

## 1.1. Instal·lació de miniconda

Si treballeu en macOS, podeu fer:

```
brew install --cask miniconda
conda init
conda config --set auto_activate_base False
```

## 1.2. Creació de l'entorn virtual amb conda

Per crear entorns locals a VS Code mitjançant Conda, obriu `Command Palette` (⇧⌘P), cerqueu i seleccioneu l'ordre `Python: Create Environment`.

![](./img/create_environment.avif)

Es mostra una llista amb els tipus d'entorn: `Venv` o `Conda`. Seleccioneu `Conda`.

![](./img/create_environment_dropdown.avif)

L'ordre mostra una llista de versions de Python que es poden utilitzar al vostre projecte. Seleccioneu Python 3.11:

![](./img/conda_environment_python_versions.avif)

S'instal·laran automàticament les biblioteques definides al fitxer [environment.yml](environment.yml).

## 1.3. Com crear un fitxer environment.yml nou

Elimineu el fitxer environment.yml i la carpeta .conda:
```
rm -fr environment.yml .conda
```

Repetiu el pas anterior per crear un entorn virtual nou amb la versió de Python que vulgueu, després obriu un terminal dins de VS Code i executeu la següent ordre:

```
conda install matplotlib numpy pandas -q -y
```

Ara ja podeu bolcar les biblioteques instal·lades amb conda amb la següent ordre:
```
conda export > environment.yml
```
