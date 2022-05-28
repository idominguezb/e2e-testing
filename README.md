# e2e-testing 
[Como ejecutar](#Ejecutar-las-pruebas)
# Escenario de pruebas(ghost 3.42)
| Identificador | Nombre escenario      | Tipo     |
|---------------|-----------------------|----------|
|  ECPT1        | Crear post            | Positivo |
| ECPG1         | Crear pagina          | Positivo |
| ECT1          | Crear tag             | Positivo |
| ECI1          | Crear integracion     | Positivo |
| ECPT2         | Crear post programado | Positivo |
## Funcionalidades probadas 
| Funcionalidad | Detalle                                                                                                            | Escenarios |
|---------------|--------------------------------------------------------------------------------------------------------------------|------------|
| Crear post    | Crear un post manera inmediata o de forma programada para que los miembros puedan ver la información.              | [Escenarios](#Escenarios-para-crear-post)           |
| Crear página  | Crear una pagina manera inmediata o de forma programada para que los miembros puedan ver la información.           |    [Escenarios](#Escenarios-para-crear-pagina)        |
| Crear tags    | Crear tags para relacionar los posts con el propósito de informar a los lectores de que se trata la publicación.   | [Escenarios](#Escenarios-para-crear-tag)           |
| Integraciones | Se requiere adiministrar las integraciones de la pagina                                                            | [Escenarios](#Escenarios-para-intergacion)           |
| Membresia     | Administrar los miembros que se suscriben al blog                                                                  |      [Escenarios](#Escenarios-para-miembros)      |

## Escenarios de pruebas(Ghost 4.47)
### Escenarios para crear post
| Identificador | Nombre                        | Tipo de escenario |
|---------------|-------------------------------|-------------------|
| ECPT1         | Crear post                    | Positivo          |
| ECPT2         | Programar post                | Positivo          |
| ECPT3         | Titulo mayor a 255 caracteres | MIX               |
| ECPT4         | Crear post con link repetido  | MIX               |

### Escenarios para crear pagina
| Identificador | Nombre                            | Tipo de escenario |
|---------------|-----------------------------------|-------------------|
| ECPG1         | Crear pagina                      | Positivo          |
| ECPG2         | Crear pagina programada           | Positivo          |
| ECPG3         | Crear pagina a partir de un draft | Positivo          |
| ECPG4         | Crear pagina con titulo extenso   | MIX               |

### Escenarios para crear tag
| Identificador | Nombre                                               | Tipo de escenario |
|---------------|------------------------------------------------------|-------------------|
| ECT1          | Crear tag                                            | Positivo          |
| ECT2          | Crear tag con color invalido                         | Negativo          |
| ECT3          | Crear un internal tag y leer lista de internals tags | MIX               |
| ECT4          | Crear tag con descripción mayor a 500 caracteres     | Negativo          |

### Escenarios para intergacion
| Identificador | Nombre               | Tipo de escenario |
|---------------|----------------------|-------------------|
| EIT1          | Crear integracion    | Positivo          |
| EIT2          | Eliminar Integracion | Positivo          |
| EIT3          | Editar Integracion   | Positivo          |
| EIT4          | Agregar webhook      | Positivo          |

### Escenarios para miembros
| Identificador | Nombre                                                  | Tipo de escenario |
|---------------|---------------------------------------------------------|-------------------|
| EMB1          | Crear miembro                                           | Positivo          |
| EMB2          | Crear miembro con email invalido                        | Positivo          |
| EMB3          | Crear miembro con descripcion con mas de 500 caracteres | Positivo          |
| EMB4          | Borrar miembro                                          | Positivo          |

## Ejecutar las pruebas

Antes de ejecutar las pruebas se recomienda tener un usuario con email: prueba@example.com y password:prueba@example.com123456789 en ambas versiones, de no ser asi se debe modifcar las variables USER y PASSWORD en el archivo properties.json y para cypress se debe modifcar en la funcion login de todos los archivos de que se encuentran en integrations los valores cambiando de #amber7 y #amber9 en la funcion .type() por el usuario y contraseña respectivamente.

La version 3.42 se debe ejecutar en el puerto 3001 y la version 4.47 en el puerto 2368

### Cypress 
Para hacer las pruebas de regresion se recomienda ejecutar las pruebas de ghost 3.42 primero
1. Ejecute el comando `npm install` en la raiz del repositorio
2. Para ejecutar las pruebas:
   * Ejecutar solo las pruebas de ghost 3.42 `cypress run --spec "cypress/integration/pruebas-de-regresion/3.42/*.spec.js"`
   * Ejecutar solos las pruebas de ghost 4.47 `cypress run --spec "cypress/integration/pruebas-de-regresion/4.47/*.spec.js"`
   * Ejecutar todas las pruebas `cypress run`

### Kraken
*Para realizar las pruebas de regresion se recomiendo ejecutar primero las pruebas de ghost 4.47 que estaran en el archivo para esto puede ejecutar el comando `npm run enablev4` y luego `npm run start` desde la carpeta kraken* `ghost4_47.feature` 
 <br>

1. Ingrese a la carpeta kraken desde la terminal 
2. Ejecute el comando `npm install`
3. Si desea:
  * Ejecutar solo los 5 feature para realizar el VRT `npm run enablev4` 
  * Ejecutar solo los 5 feature de la version 3.42 `npm run enablev3`
  * Ejecutar todos `npm run enableAll`  
4. Ejecute el comando `npm run start` para empezar con la ejecucion
<br>
*Nota: en caso de que aparezca este error al ejecutar handleErrorFromBinding(ctx) se deben ejecutar las pruebas individualmente.*

## VRT
Antes debe ejecutar las pruebas
1. Ir a la carpeta resemblejs
2. Ejecutar `npm install`
3. Ejecutar el comando `node index.js`
4. Dirigirse a la carpeta results generada
5. Abrir el archivo index.html

