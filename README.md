# Bootcamp Full Stack Web Developer #


## Práctica Final - Módulo: Introducción a JavaScript ##

### EuroCup Simulator ###

Esta práctica consiste en realizar un simulador de la Eurocopa de fútbol.
Al ejecutar el programa se iniciará una simulación del campeonato por consola.

En esta versión inicial del programa no se tendrá en cuenta la fase de grupos (fase inicial), realizando así el requisito mínimo de la práctica.

Para la versión mínima se emplearán 16 de los 24 equipos que iniciarían el torneo si se incluyera la fase de grupos.

**Equipos empleados:**

- España
- Francia
- Portugal
- Italia
- Alemania
- Inglaterra
- Holanda
- Croacia
- Turquía
- Gales
- Suiza
- Dinamarca
- Finlandia
- Bélgica
- Rusia
- Ucrania

#### SISTEMA DE JUEGO ####

La fase de octavos de final será la primera fase que se iniciará, en la que se asignarán los primeros 8 partidos correspondientes a los 16 equipos empleados:

**OCTAVOS DE FINAL:**

1. España vs Turquía - (Winner1)
 
1. Francia vs Gales - (Winner2)
 
1. Portugal vs Suiza - (Winner3)
 
1. Italia vs Dinamarca - (Winner4)
 
1. Alemania vs Finlandia - (Winner5)
 
1. Inglaterra vs Bélgica - (Winner6)
 
1. Holanda vs Rusia - (Winner7)
 
1. Croacia vs Ucrania - (Winner8)

En base a los ganadores de los 8 partidos de octavos de final, se asignarán los partidos correspondientes a la siguiente fase de cuartos de final, del siguiente modo:

**CUARTOS DE FINAL:**

1. Winner1 vs Winner8
 
1. Winner7 vs Winner2
 
1. Winner3 vs Winner6
 
1. Winner5 vs Winner4

Una vez completada la fase de cuartos de final, se asignarán automáticamente los partidos correspondientes a la semifinal, del siguiente modo:

**SEMIFINALES:**

1. (Ganador de: Winner1 vs Winner8) vs (Ganador de: Winner3 vs Winner6)
 
1. (Ganador de: Winner7 vs Winner2) vs (Ganador de: Winner5 vs Winner4)

A partir de aquí, ya tendríamos los 2 equipos que participarían en el partido de la final de la Eurocopa. Pero se incluirá además, el partido como requisito opcional de la práctica, correspondiente a la clasificación del tercer y cuarto puesto del torneo, quedando así del siguiente modo:

**TERCER Y CUARTO PUESTO:** 

Perdedor Semifinal 1 vs Perdedor Semifinal 2

Luego se disputará el partido de la final de la Eurocopa, mostrando los resultados del partido y devolviendo al final un mensaje destacado con el nombre del equipo ganador de la Eurocopa de fútbol.

**FINAL DE LA EUROCOPA:**

Ganador Semifinal 1 vs Ganador Semifinal 2

----------


**Resultado final mostrado por consola:**

===============================================

¡*SelecciónGanadora* campeona de la EUROCOPA!

===============================================
