# Instrucciones de Ejecución

## Prerrequisitos

- Node.js y npm instalados en tu máquina.
- Cypress instalado globalmente o como dependencia de tu proyecto.

## Pasos para Ejecutar el Proyecto

1. Clona el repositorio del proyecto:
    ```bash
    git clone https://github.com/renzoserra/petStore-api.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd petStore-api
    ```
3. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```
4. Ejecuta las pruebas de Cypress:
    ```bash
    npm run cy:open
    ```

## Estructura del Proyecto

- `cypress/`
  - `e2e/`
     - `petStore/`
    - `user.cy.js`: Contiene todas las pruebas relacionadas con la creación, búsqueda, actualización y eliminación de un usuario en la API de PetStore.
  - `support/`: Contiene archivos de soporte y configuraciones adicionales de Cypress.

## Descripción de las Pruebas

1. **Crear un usuario**:
    - Crea un usuario con la información proporcionada.
    - Valida que la API responda con un código de estado 200.

2. **Buscar el usuario creado**:
    - Busca el usuario recién creado.
    - Valida que la API responda con un código de estado 200 y la información correcta del usuario.

3. **Actualizar el nombre y el correo del usuario**:
    - Actualiza el nombre y el correo del usuario creado.
    - Valida que la API responda con un código de estado 200.

4. **Buscar el usuario actualizado**:
    - Busca el usuario actualizado.
    - Valida que la API responda con un código de estado 200 y la información actualizada del usuario.

5. **Eliminar el usuario**:
    - Elimina el usuario creado.
    - Valida que la API responda con un código de estado 200.

6. **Buscar el usuario eliminado**:
    - Intenta buscar el usuario eliminado.
    - Valida que la API responda con un código de estado 404.

7. **Buscar usuario con nombre de usuario inválido**:
    - Intenta buscar un usuario con un nombre de usuario inválido.
    - Valida que la API responda con un código de estado 400.

8. **Actualizar usuario inexistente**:
    - Intenta actualizar un usuario que no existe.
    - Valida que la API responda con un código de estado 404.

## Notas Adicionales

- Las pruebas 'Buscar usuario eliminado' y 'Buscar usuario con nombre de usuario inválido' devuelven siempre la misma respuesta, lo cual no es ideal. Sería mejor que las respuestas fueran distintas para cada situación.
- El método PUT para el caso 'Actualizar usuario inexistente' devuelve un código de estado 200 a pesar de que el usuario no existe. La respuesta correcta debería ser un código de estado 404.