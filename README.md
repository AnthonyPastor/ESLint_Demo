# Aplicación de consola para ver instalacion de ESLint

## Pasos a seguir

1. **Instalar ESLint**  
    - Acceder a las Extesiones de Visual Code ( `CTRL + SHIFT + X` )
    - Buscar extensión de ESLint e instalar
    - Instalar paquetes de ESLint usando el comando `npm install eslint ` en la terminal

2. **Configurar ESLint**    

    En nuestro caso no usaremos estilo predefinidos, sino que haremos una configuracion custom 
    - Usar comando `.\node_modules\.bin\eslint --init` para configurar ESLint.
    - Seleccionamos las siguientes opciones
        - To check syntax, find problems, and enforce code style
        - CommonJS (require/exports)
        - None of these
        - No
        - Deseleccionamos 'Browser' con barra espaciadora y seleccionamos 'Node'
        - Answer questions about your style
        - JSON
        - Spaces
        - Double
        - Unix
        - Yes
        - Yes
        - npm
    - Abrimos el archivo `.eslintrc.json` y reemplazamos su contenido con lo siguiente 
    
    ```
    {
        {
        "env": {
            "commonjs": true,
            "es2021": true,
            "node": true
        },
        "extends": "eslint:recommended",
        "parserOptions": {
            "ecmaVersion": "latest"
        },
        "rules": {
            "indent": [
                "error",
                4
            ],
            "linebreak-style": [
                "error",
                "unix"
            ],
            "quotes": [
                "error",
                "double"
            ],
            "semi": [
                "error",
                "always"
            ]
        }
    }
    ```
