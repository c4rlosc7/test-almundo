# test-almundo
test almundo

# Pasos para ejecutar la prueba de Almundo
Primero clonar el repositorio
> git clone https://github.com/c4rlosc7/test-almundo.git

Entrar al repositorio clonado
> cd test-almundo

Encontrara 2 carpetas una llamada api y frontend-angularjs, primero lanzamos el api
> cd api/

Instalamos dependencias
> npm install

Lanzamos el api rest
> node app.js

Ahora vamos a lanzar el frontend 
> cd ..

Entramos a la carpeta frontend-angularjs
> cd frontend-angularjs

Instalamos dependencias del frontend
> npm install

Lanzamos el servidor de npm serve
> serve

# Frontend AngularJS
Creamos el directorio donde vamos alojar los archivos del frontend
> mkdir frontend-angularjs

> cd frontend-angularjs

Dentro de la carpeta creada anteriormente
> npm init --yes

Instalamos dependencia de angular js
> npm install --save angular

Instalamos dependencia de bootstrap 3.7
> npm install --save bootstrap@3

Instalamos server
> npm install server -g --save

run 
> serve


# Backend
creamos directorio de trabajo del API
> mkdir api

Ingresamos al directorio
> cd api

Iniciamos un proyecto con package.json
> npm init --yes

Instalamos dependencia Express
> npm i express --save

Instalamos dependencia de Body-Parser
> npm i body-parser --save

Instalamos dependencia de Morgan
> npm i morgan

