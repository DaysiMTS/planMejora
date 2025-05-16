Feature: Busqueda de Consola
    Scenario: Ejercicio: Mercado libre 
        Given Entrar a Mercado Libre
        And selecciono "Mexico" como pais
        And busca "Playstation 5"
        And filtrar por condiciones "Nuevo"
        #Se cambia CDMX A "Distrito Federal" porque antes no se llamaba ciudad de Mexico
        And filtrar por ubicacion "Distrito Federal"
        And ordenar de mayor a menor precio
        And obtener el nombre y precio de los primeros 5 productos
        And imprimir los resultados
        Then Generar un reporte en formato pdf de los resultados

