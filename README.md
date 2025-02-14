# PruebaTecnicaGPTX

Para la prueba tecnica he decidido darle un enfoque tipo CRM(teniendo en cuenta uno de los requisitos opcionales dados), para lo cual como contenedor de React.js he decidido que lo mejor seria usar un proyecto de Vite al ser mas ligero y rapido para la creacion de CRM respecto a Next.js.

Ejecución:

Primero que nada hay que ejecutar el script en "Create.sql" en la carpeta raiz del repositorio, en una base de datos MySQL.

Segundo paso, actualizar los datos de acceso de usuario en el archivo ".env" en la carpeta Api que estara funcionando en el puerto 3050, en caso de estar en uso podra ser modificado desde el archivo .env, en caso de ser modificada tambien debera ser modificada la URL de acceso en el .env de la carpeta Web
por ultimo ejecutar la api con el comando en consola "npm run dev"

Tercer paso, comprobar que el .env la url de la api esta haciendo referencia correctamente al link y puerto donde la Api se encuentra ejecutandose, posterior a eso ejecutar el proyecto con "npm run dev", seguido de eso se nos abrira una pagina con un login, un usuario ya fue registrado en la DB con las claves de acceso:

username: admin
password: admin

por utlimo tras iniciar sesion se podra tener acceso a la pagina para registrar las personas