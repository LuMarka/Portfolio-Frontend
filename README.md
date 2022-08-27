# 💻 Portfolio Web Full Stack
### Proyecto Integrador - #YoProgramo (AP)
------------
**NOTA**: En este repositorio se encuentra todo lo relacionado al Frontend del proyecto, para dirigirse al repositorio del Backend hacer [click aquí](https://github.com/LuMarka/Portfolio-Backend "click aquí")

### 📝 Descripción
------------
- Este **portfolio** fué realizado como** proyecto final integrador** a presentar en el curso **#YoProgramo** de **Argentina Programa.****

- Se trata de una ***Single Page Application*** (SPA) generada con el framework de JavaScript [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0. y para su desarrollo se utilizaron los siguientes lenguajes: [HTML](https://developer.mozilla.org/es/docs/Glossary/HTML5) , [CSS](https://developer.mozilla.org/es/docs/Web/CSS),  [TypeScript](https://www.typescriptlang.org/) y [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript).

- Otro framework que ha sido incorporado en el diseño del proyecto es Bootstrap (en su versión 5.2.0) para el formulario de Login (Bootstrap Login form) , los íconos para ejecutar las acciones de editar, eliminar y agregar (Bootstrap Icons) , el diseño responsivo de las imágenes y la aplicación en general. Así como Popper.js que es una librería de Javascript que permite añadir tooltips y popovers en elementos HTML y ofrece un montón de opciones de personalización.

- También, se pueden encontrar las siguientes dependencias :

		Ngx-toastr | alertas que comunican determinados sucesos al usuario
		Ng-circle-progress | animaciones que representan los skills en porcentajes
		FortAwesome | íconos

- El deploy del Frontend de esta aplicación fué realizado en la plataforma Firebase.

- Los campos de los datos editables en el frontend provienen de las entidades de la base de datos alojada en Clever Cloud .Estas tablas fueron generadas desde el backend en lenguaje Java.


- El deploy del Frontend de esta aplicación fué realizado en la plataforma [Firebase](
https://firebase.google.com/firebase).

- Los campos de los datos editables en el frontend provienen de las entidades de la base de datos alojada en [Clever Cloud](https://www.clever-cloud.com/) .Estas tablas fueron generadas desde el [backend](https://github.com/LuMarka/Portfolio-Backend) en lenguaje [Java](https://www.java.com/es/). 


### ✅ Manejo de la App
------------
- Podemos ingresar desde el apartado "Login" en la barra de navegación, con un usuario y una contraseña previamente creados a través de una API.

![](https://i.ibb.co/BZ4M16N/login.png)

- Una vez que el usuario se encuentra logueado, se pueden realizar distintas acciones con la información, dependiendo del rol asignado. Si el usuario que se ha logueado es *administrador* podrá editar, agregar o eliminar información. En cambio si el usuario tiene asignado el *rol user*, solo podrá editar los campos.

![](https://i.ibb.co/JFNDZsj/botones.png)


### ⌨🖱  Instalación
------------
1. Para ejecutar la aplicación en un entorno local se debe clonar el repositorio desde GitHub mediante descarga del archivo .zip, GitHub desktop o utilizando Git.
		git clone https://github.com/LuMarka/Portfolio-Frontend.git

2. Instalar las dependencias a través de NPM.

		npm install o npm i

3. En los servicios configurar las URL según corresponda, para conectar con el backend corriendo en un puerto local:
-  URLs para las conexiones de distintos componentes con nuestra API REST, por ejemplo:

		URL = 'http://localhost:8080/personas/'
		eduURL= 'http://localhost:8080/educacion/'
		expURL = 'http://localhost:8080/explab/'
		etc.


 - URL para realizar las autenticaciones en nuestra API REST. EJ:

		authURL= 'http://localhost:8080/auth'

4. Compilar y montar el proyecto utilizando el comando `ng serve -o` o bien `ng serve` y navegar al link `http://localhost:4200/` .

**IMPORTANTE:** El servidor con el proyecto Backend debe encontrarse activo para poder obtener los datos, de lo contrario, no se renderizarán los componentes de Angular. Para más información ir al repositorio [backend](https://github.com/LuMarka/Portfolio-Backend).*



### ⌨ Más sobre la Angular CLI

------------

- Ejecute `ng serve`. Navegue a http://localhost:4200/. Si cambia cualquiera de los archivos de origen, la aplicación se recargará automáticamente .

- Para crear componentes en [Angular CLI](https://github.com/angular/angular-cli)se debe ejecutar en la terminal del editor de código o en el CMD `ng generate component/component-name` o `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- Ejecute `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

- Ejecución de pruebas unitarias: implementar `ng test` para ejecutar las pruebas unitarias vía [Karma](https://karma-runner.github.io).

- Ejecución de tests end-to-end:  colocar en la terminal `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de su elección. Para usar este comando, primero debe agregar un paquete que implemente capacidades de prueba de un extremo a otro.

- Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Descripción general y referencia de comandos de Angular CLI](https://angular.io/cli).


### 📩Contacto

------------
🙋‍♂️ En caso de tener alguna duda y te interesa ponerte en contacto conmigo podés hacerlo a través de:  
#### [LinkedIn](https://www.linkedin.com/in/luisa-markarian-253985246/ "LinkedIn") -  [Mi app](https://portfoliolumarka.web.app/ "Mi app")
