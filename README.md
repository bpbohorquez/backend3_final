# Backend III - Pre-entrega 1 Brian Bohorquez

En este proyecto se desarrollaron los endpoints de mocks correspondientes a la generación de usuarios e información de prueba para la API de adopción de mascotas.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Configuración](#configuración)
3. [Uso](#uso)
4. [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

### Requisitos previos

- Node.js v14.17.0

### Instrucciones de instalación

1. Clonar el repositorio

   ```sh
   git clone https://github.com/bpbohorquez/backend3_preentrega_1.git
   ```

2. Se escribieron los test funcionales para el router de adopciones en src/test/supertest.test.js
3. La documentación del módulo Users se realizó en Swagger, en el archivo src/docs/Users.yaml
4. Para ejecutar y probar los endpoints, correr el respectivo endpoint en Postman, usando la dirección http://localhost:8080/

## Configuración

### Variables de entorno

`MONGO_URL`: URL de la base de datos de MongoDB. Para propósito de la valoración del proyecto, las variables de entorno ya están incluidas en el repositorio

### Tecnolgías:

- Express
- Node JS
- MongoDB
- Swagger
- Docker

## Uso

### Testing

Se escribieron los test funcionales para el router de adopciones en src\test\supertest.test.js

![Test](./src/public/img/test.png)

### Documentación

La documentación del módulo Users se implementó mediante Swagger, en el endpoint `/api-docs`

### Endpoints de la API - módulo mocking

**GET** `/api/mocks/mockingpets`: Genera 50 usuarios de prueba:

![GET Mocking Pets](./src/public/img/GET.png)

**POST** `/api/mocks/generateData`: Genera el número de usuarios y mascotas de prueba ingresados en el body del request, con información aleatoria, para ser subidos en la base datos:

![POST Mocking Data](./src/public/img/POST.png)

![MongoDB Pets DB](./src/public/img/mongoPets.png)

![MongoDB Users DB](./src/public/img/mongoUsers.png)

## Estructura del Proyecto

```
proyecto/
├── src/
│   ├── controllers/
│   ├── dao/
│   │   └── models/
│   ├── docs/
│   ├── dto/
│   ├── public/
│   ├── repository/
│   ├── routes/
│   ├── services/
│   ├── test/
│   ├── utils/
│   └── app.js
├── package.json
└── README.md
```
