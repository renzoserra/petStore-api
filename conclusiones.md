# Conclusiones

## Hallazgos del Ejercicio

1. **Crear un usuario**:
    - Entrada: Información del usuario (ID, username, firstName, lastName, email, password, phone, userStatus).
    - Salida esperada: Código de estado 200 y un objeto de respuesta con el código 200.
    - Salida obtenida: La API respondió con un código de estado 200 y un objeto de respuesta con el código 200, lo cual es correcto.

2. **Buscar el usuario creado**:
    - Entrada: Nombre de usuario.
    - Salida esperada: Código de estado 200 y un objeto de usuario con los detalles correctos.
    - Salida obtenida: La API respondió con un código de estado 200 y un objeto de usuario con los detalles correctos.

3. **Actualizar el nombre y el correo del usuario**:
    - Entrada: Nombre de usuario, nueva información del usuario (firstName y email actualizados).
    - Salida esperada: Código de estado 200 y un objeto de usuario actualizado.
    - Salida obtenida: La API respondió con un código de estado 200. Sin embargo, no se proporcionó un objeto de usuario actualizado en la respuesta.

4. **Buscar el usuario actualizado**:
    - Entrada: Nombre de usuario.
    - Salida esperada: Código de estado 200 y un objeto de usuario con los detalles actualizados.
    - Salida obtenida: La API respondió con un código de estado 200 y un objeto de usuario con los detalles actualizados.

5. **Eliminar el usuario**:
    - Entrada: Nombre de usuario.
    - Salida esperada: Código de estado 200.
    - Salida obtenida: La API respondió con un código de estado 200.

6. **Buscar el usuario eliminado**:
    - Entrada: Nombre de usuario.
    - Salida esperada: Código de estado 404 indicando que el usuario no fue encontrado.
    - Salida obtenida: La API respondió con un código de estado 404, lo cual es correcto.

7. **Buscar usuario con nombre de usuario inválido**:
    - Entrada: Nombre de usuario inválido.
    - Salida esperada: Código de estado 400 indicando que el nombre de usuario es inválido.
    - Salida obtenida: La API respondió con un código de estado 400, lo cual es correcto.

8. **Actualizar usuario inexistente**:
    - Entrada: Nombre de usuario inexistente, información del usuario.
    - Salida esperada: Código de estado 404 indicando que el usuario no fue encontrado.
    - Salida obtenida: La API respondió con un código de estado 200, lo cual es incorrecto.

## Conclusiones

- Las pruebas básicas de creación, actualización, búsqueda y eliminación de un usuario funcionaron correctamente en la mayoría de los casos.
- Sin embargo, hay problemas con la consistencia de las respuestas de la API:
  - Las pruebas para "Buscar usuario eliminado" y "Buscar usuario con nombre de usuario inválido" devuelven la misma respuesta, lo cual no es ideal ya que deberían devolver respuestas distintas para cada situación.
  - La API no responde correctamente con un código de estado 404 cuando se intenta actualizar un usuario inexistente; en su lugar, responde con un código de estado 200, lo cual es incorrecto.
- Es necesario mejorar la API para que maneje correctamente los casos de error y proporcione respuestas más precisas y consistentes.