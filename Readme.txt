Logica y explicación de los ejercicios

1. Para este ejercicio realice un for que recorriera el array de ingreso desde 
   la segunda posición hasta la última, y comparando cual es mayor anterior.

2. Para este ejercicio realice un for que recorriera desde el primer valor hasta
   el segundo valor, y realizando la suma entre ellos.

3. Para este ejercicio use la función sort para organizar los elementos del 
   array y retornando el valor en la posición del valor ingresado como segundo
   valor menos 1.

4. Para este ejercicio creo un vector que va almacenar los datos no retidos,
   uso un for para recorrer el array de ingreso y valido si existe o no el elemento
   dentro del array de salida, si existe no lo agrega y retorno un array sin elementos
   repetidos.

5. Para este ejercicio creo dos arrays, uno de lectura de datos y el segundo de datos
   datos de respuesta, y por medio de los indices se hace el match de los caracteres 
   de apertura con el de cierre por ejemplo '(' y ')', luego con un for recorro cada
   caracter, valido si hace parte del array de elementos de apertura o cierre, luego 
   si hace parte de los elementos del array de apertura, busco su contra parte en
   el array de cierre y lo agrego en un nuevo array, si llega hacer parte de los
   elementos de cierre el caracter, valido si es el mismo que el ultimo elemento
   agregado entonces elimino el elemento del array de los campos esperados y así
   sucesivamente hasta vacias el array de campos esperados para saber que esta balanceado
   los datos de ingresos. Si el campo no concuerda con el ultimo elemento del array
   de los campos esperados entonces el input no esta balanceado y devuelve false.

6. Para este ejercicio creo un array classroom para almancenar los objetos de horainicio
   horafin de cada salon, para saber cuantos salones son requeridos va hacer igual 
   a la longitud del array. Ahora recorro el array de elementos de horas, y comparo 
   las horas de cada elemento camparando si no se traslapan, si lo hacen pues creo otro
   elemento agregando las horas de inicio y fin y hace hasta recorrer todas las horas
   del array de ingreso.

Mil disculpas que no pude terminar con el sexto y septimo punto, agregue la libreria jest
para realizas las pruebas unitarias pero por tiempo y carga de trabajo no pude completar
los puntos.