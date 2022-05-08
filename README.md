# e2e-testing 

# Funcionalidades probadas 
| Funcionalidad | Detalle                                                                                                            | Escenarios |
|---------------|--------------------------------------------------------------------------------------------------------------------|------------|
| Crear post    | Crear un post manera inmediata o de forma programada para que los miembros puedan ver la información.              |            |
| Crear página  | Crear una pagina manera inmediata o de forma programada para que los miembros puedan ver la información.           |            |
| Crear tags    | Crear tags para relacionar los posts con el propósito de informar a los lectores de que se trata la publicación.   |            |
| Integraciones | Se requiere adiministrar las integraciones de la pagina                                                            |            |
| Membresia     | Administrar los miembros que se suscriben al blog                                                                  |            |

# Escenarios
## Escenarios de pruebas para crear post
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

## Escenerios para crear tag
| Identificador | Nombre                                               | Tipo de escenario |
|---------------|------------------------------------------------------|-------------------|
| ECT1          | Crear tag                                            | Positivo          |
| ECT2          | Crear tag con color invalido                         | Negativo          |
| ECT3          | Crear un internal tag y leer lista de internals tags | MIX               |
| ECT4          | Crear tag con descripción mayor a 500 caracteres     | Negativo          |
