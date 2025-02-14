# PruebaTecnicaGPTX

## Justificación

Para la prueba técnica he decidido darle un enfoque tipo CRM(teniendo en cuenta uno de los requisitos opcionales dados), para lo cual como contenedor de React.js he decidido que lo mejor seria usar un proyecto de Vite al ser mas ligero y rápido para la creación de CRM respecto a Next.js.

## Ejecución
Primero que nada hay que ejecutar el script en "Create.sql" en la carpeta raíz del repositorio, en una base de datos MySQL.

Segundo paso, actualizar los datos de acceso de usuario en el archivo ".env" en la carpeta Api que estara funcionando en el puerto 3050, en caso de estar en uso podra ser modificado desde el archivo .env, en caso de ser modificada tambien debera ser modificada la URL de acceso en el .env de la carpeta Web
por ultimo ejecutar la api con el comando en consola "npm run dev"

Tercer paso, comprobar que el .env la url de la api esta haciendo referencia correctamente al link y puerto donde la Api se encuentra ejecutándose, posterior a eso ejecutar el proyecto con "npm run dev", seguido de eso se nos abrirá una pagina con un login, un usuario ya fue registrado en la DB con las claves de acceso:

**username: admin**
**password: admin**

por último tras iniciar sesión se podrá tener acceso a la pagina para registrar las personas

# Prueba Teórica
1.  Está recibiendo dos flujos de datos de dos sensores de temperatura (2
observables que devuelven números enteros), ¿qué operador de RxJS utilizaría para recibir estos dos datos en la misma suscripción?
	>En este caso de uso considero que lo mejor seria usar el operador `combineLatest` cuya función  es combinar los valores mas recientes de sus Observable asignados  en un array y emite un nuevo valor cada que uno cambia
	
2. Si tiene dos llamadas al servidor y la segunda llamada depende de la primera, ¿Cómo manejaría con RxJS esta secuencia de llamadas?
	>Usaría `concatMap` ya que nos permite suscribir el valor del primer Observable  y  tras esto suscribir el segundo y así sucesivamente

3. Tengo en un servidor un archivo de texto que está en minúscula y ocupa 2GB en el disco duro, pero le solicitan que todo el archivo debe ser pasado a mayúsculas, ¿cómo lo haría?
	>Lo mejor para este tipo de procesamiento considero que lo mejor es usa Streams y leyendo por bloques el documento se podría lograr una ahorro en memoria lo que a su vez implicaría el mas fácil procesamiento del mismo
	

4. Tiene un arreglo de strings los cuales deben ser filtrados por su longitud mayor a dos y a la vez convertidos a un array de enteros con la longitud de cada string, ¿cómo lo haría? Ejemplo de entrada y salida: [“hola”, “mundo”, “es”, “una”, “prueba”] => [4, 5, 3, 6]
	>Para dicho problema usaria un codigo como el siguiente
	
    const  array1  = ["hola", "mundo", "es", "una", "prueba"]
    let  arraySalida  = []
    array1.filter(element  =>  element.length  >  2).forEach(item  => { arraySalida.push(item.length) })
    console.log(arraySalida)
    

5. Tiene un arreglo de números, los cuales pueden ser o no repetidos, ¿cómo eliminaría los repetidos? ¿Cómo los ordenaría en forma ascendente? Ejemplo de entrada y salida: [1, 2, 5, 10, 8, 8, 1, 3, 4, 5] => [1, 2, 3, 4, 5, 8, 10]
	>Lo resolveria con el siguiente codigo:
	
    const  arrayInicial  = [1, 2, 5, 10, 8, 8, 1, 3, 4, 5];
    const  arrayFinal  = [...new  Set(arrayInicial)].sort((a, b) =>  a  -  b);
    console.log(arrayFinal);

