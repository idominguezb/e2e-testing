# e2e-testing 
[Como ejecutar](#Ejecutar-las-pruebas)
# Funcionalidades probadas 
| Funcionalidad | Detalle                                                                                                            | Escenarios |
|---------------|--------------------------------------------------------------------------------------------------------------------|------------|
| Crear post    | Crear un post manera inmediata o de forma programada para que los miembros puedan ver la información.              | [Escenarios](#Escenarios-para-crear-post)           |
| Crear página  | Crear una pagina manera inmediata o de forma programada para que los miembros puedan ver la información.           |    [Escenarios](#Escenarios-para-crear-pagina)        |
| Crear tags    | Crear tags para relacionar los posts con el propósito de informar a los lectores de que se trata la publicación.   | [Escenarios](#Escenarios-para-crear-tag)           |
| Integraciones | Se requiere adiministrar las integraciones de la pagina                                                            | [Escenarios](#Escenarios-para-intergacion)           |
| Membresia     | Administrar los miembros que se suscriben al blog                                                                  |      [Escenarios](#Escenarios-para-miembros)      |

# Escenarios de pruebas
# Escenarios para crear post
| Identificador | Nombre                        | Tipo de escenario |
|---------------|-------------------------------|-------------------|
| ECPT1         | Crear post                    | Positivo          |
| ECPT2         | Programar post                | Positivo          |
| ECPT3         | Titulo mayor a 255 caracteres | MIX               |
| ECPT4         | Crear post con link repetido  | MIX               |

## Escenarios para crear pagina
| Identificador | Nombre                            | Tipo de escenario |
|---------------|-----------------------------------|-------------------|
| ECPG1         | Crear pagina                      | Positivo          |
| ECPG2         | Crear pagina programada           | Positivo          |
| ECPG3         | Crear pagina a partir de un draft | Positivo          |
| ECPG4         | Crear pagina con titulo extenso   | MIX               |

## Escenarios para crear tag
| Identificador | Nombre                                               | Tipo de escenario |
|---------------|------------------------------------------------------|-------------------|
| ECT1          | Crear tag                                            | Positivo          |
| ECT2          | Crear tag con color invalido                         | Negativo          |
| ECT3          | Crear un internal tag y leer lista de internals tags | MIX               |
| ECT4          | Crear tag con descripción mayor a 500 caracteres     | Negativo          |

## Escenarios para intergacion
| Identificador | Nombre               | Tipo de escenario |
|---------------|----------------------|-------------------|
| EIT1          | Crear integracion    | Positivo          |
| EIT2          | Eliminar Integracion | Positivo          |
| EIT3          | Editar Integracion   | Positivo          |
| EIT4          | Agregar webhook      | Positivo          |

## Escenarios para miembros
| Identificador | Nombre                                                  | Tipo de escenario |
|---------------|---------------------------------------------------------|-------------------|
| EMB1          | Crear miembro                                           | Positivo          |
| EMB2          | Crear miembro con email invalido                        | Positivo          |
| EMB3          | Crear miembro con descripcion con mas de 500 caracteres | Positivo          |
| EMB4          | Borrar miembro                                          | Positivo          |

# Ejecutar las pruebas
Antes de ejecutar las pruebas se recomienda tener un usuario con email: prueba@example.com y password:prueba@example.com123456789, de no ser asi se debe modifcar las variables USER y PASSWORD en el archivo properties.json y para cypress se debe modifcar en la funcion login de todos los archivos de que se encuentran en integrations los valores cambiando de #amber7 y #amber9 en la funcion .type() por el usuario y contraseña respectivamente.
## Cypress 
1. Ejecute el comando `npm install` en la raiz del repositorio
2. Ejecute el comando `cypress run` en la raiz del repositorio

## Kraken
1. Ingrese a la carpeta kraken desde la terminal 
2. Ejecute el comando `npm install`
3. Ejecute el comando `npx kraken-node run` 
