# Registro de datos de contacto

Es una aplicación para agregar, editar, eliminar y listar los datos de contacto. Regresan datos por defecto desde una API pero no los agrega, edita o elimina de allí ([https://cincoveinticinco.com/users.json](https://cincoveinticinco.com/users.json))

## Instalación

Usar el paquete de [npm](https://www.npmjs.com/) para instalar las dependencias del proyecto.

```bash
npm install
```

## Descripción

En esta aplicación usé NgRx para manejar la información principal como el estado global de la aplicación. De esta manera puedo manejar la información de todos los módulos futuros de forma más centralizada y acceder a ella desde cualquier componente. Aunque en este caso pudo ser más sencillo manejar la información, agregar NgRx me asegura una arquitectura limpia y una base sólida para agregar nuevas funcionalidades.

## Librerías en uso

[NgRx](https://ngrx.io/)

[PrimeNg](https://primeng.org/)

