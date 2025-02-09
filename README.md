# Backend III - Entrega Final Brian Bohorquez

En este proyecto se desarrollaron los endpoints de mocks correspondientes a la generación de usuarios e información de prueba para la API de adopción de mascotas. Se escribieron los test funcionales para los endpoints de adopciones, la documentación del módulo de usuarios, y finalmente se generó una imagen del proyecto en Docker. Se optimizó la autenticación de las rutas desarrolladas y un logger personalizado

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Configuración](#configuración)
3. [Uso](#uso)
4. [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

### Requisitos previos

- Node.js v14.17.0
- Docker

### Instrucciones de instalación

1. Clonar el repositorio

   ```sh
   git clone https://github.com/bpbohorquez/backend3_final.git
   ```

2. Instalar dependencias

   ```sh
   npm install
   ```

3. Ejecutar el proyecto

   ```sh
   npm start
   ```

4. Se escribieron los test funcionales para el router de adopciones en src/test/supertest.test.js
5. La documentación del módulo Users se realizó en Swagger, en el archivo src/docs/Users.yaml
6. Se configuró la imagen del proyecto en el archivo Dockerfile. La imagen se subió a Dockerhub en https://hub.docker.com/r/brianb26/docker_adoptme
7. Se realizó la configuración de logger dentro de src/utils/logger.js, con el fin de configurar el registro de errores que puedan generarse en los distintos endpoints
8. Se agregó el middleware de autenticación para las rutas de la api en src/utils/policies.js, y en los respectivos routers
9. Para ejecutar y probar los endpoints, correr el respectivo endpoint en Postman, usando la dirección http://localhost:8080/

## Configuración

### Variables de entorno

`MONGO_URL`: URL de la base de datos de MongoDB. Para propósito de la valoración del proyecto, las variables de entorno ya están incluidas en el repositorio

### Tecnolgías:

- Express
- Node JS
- MongoDB
- Swagger
- Docker
- Winston Logger

## Uso

### Testing

Se escribieron los test funcionales para el router de adopciones en src\test\supertest.test.js

![Test](./src/public/img/test.png)

### Documentación

La documentación del módulo Users se implementó mediante Swagger, en el endpoint `/api-docs`

### Docker

Se subió la imagen generada con Docker al siguiente repositorio de Dockerhub: https://hub.docker.com/r/brianb26/docker_adoptme

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
├── Dockerfile
├── package.json
└── README.md
```
