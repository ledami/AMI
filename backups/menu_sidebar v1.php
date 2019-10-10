<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="css/menu_sidebar.css">
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div id="sidebar">
            <div class="list-group">
                <a href="#mendem" class="list-group-item" data-toggle="collapse" data-parent="#sidebar">
                        <span class="glyphicon glyphicon-user"/> 
                        Demografia  
                        <span class="glyphicon glyphicon-chevron-right"/>
                </a>
                <div class="collapse" id="mendem">
                    <a href="#mendemsub1" class="list-group-item" data-toggle="collapse" aria-expanded="false">Clasificación<i class="fa fa-caret-down"></i></a>
                    <div class="collapse" id="mendemsub1">
                        <a id="cons_group" onclick="showGraph(this.id, 'Consumo por grupo')" class="list-group-item" data-parent="#mendemsub1">Consumo por grupo</a>
                        <a id="cons_cat" onclick="showGraph(this.id, 'Consumo por categoria')" class="list-group-item" data-parent="#mendemsub2">Consumo por categoria</a>
                    </div>
                    <a href="#mendemsub2" class="list-group-item" data-toggle="collapse" aria-expanded="false">Temas<i class="fa fa-caret-down"></i></a>
                    <div class="collapse" id="mendemsub2">
                        <a id="graf_cons_avg_pob" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Poblacion</a>
                        <a id="graf1_2_2" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Vivienda</a>
                        <a id="graf1_2_3" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Familia</a>
                        <a id="graf1_2_4" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Economia</a>
                        <a id="graf1_2_5" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Educacion</a>
                        <a id="graf1_2_6" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Salud</a>
                        <a id="graf1_2_7" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Transporte</a>
                        <a id="graf1_2_8" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Canales de Marketing</a>
                        <a id="graf1_2_9" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Finanzas</a>
                        <a id="graf1_2_10" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Digital</a>
                        <a id="graf1_2_11" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Compras</a>
                        <a id="graf1_2_12" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Contacto</a>
                        <a id="graf1_2_13" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Ambiente</a>
                        <a id="graf1_2_14" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Seguridad Comunitaria</a>
                        <a id="graf1_2_15" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Ocio</a>
                        <a id="graf1_2_16" onclick="graficar(this.id)" class="list-group-item" data-parent="#mendemsub2">Transporte</a>
                    </div>
                </div>
                <a href="#mentar" class="list-group-item" data-toggle="collapse" data-parent="#sidebar">
                    <span class="glyphicon glyphicon-usd"/> 
                    Tarifas
                    <span class="glyphicon glyphicon-chevron-right"/>
                </a>
                <div class="collapse" id="mentar">
                    <a href="#mentarsub1" class="list-group-item" data-toggle="collapse" aria-expanded="false">Tipo de tarifa<i class="fa fa-caret-down"></i></a>
                    <div class="collapse" id="mentarsub1">
                        <a id="cons_tipo_tarifa" onclick="showGraph(this.id,'Consumo por tipo de tarifa')" class="list-group-item" data-parent="#mentarsub1">Consumo por tipo tarifa</a>
                    </div>
                    <a href="#mentarsub2" class="list-group-item" data-toggle="collapse" aria-expanded="false">Tarifas dinamicas<i class="fa fa-caret-down"></i></a>
                    <div class="collapse" id="mentarsub2">
                        <a id="cons_tar_din" onclick="showGraph(this.id, 'Consumo por tarifas dinamicas')" class="list-group-item" data-parent="#mentarsub2">Consumo por tarifas dinamicas</a>
                    </div>
                </div>
                <a href="#mentem" class="list-group-item" data-toggle="collapse" data-parent="#sidebar">
                    <span class="glyphicon glyphicon-calendar"/> 
                    Tiempo
                    <span class="glyphicon glyphicon-chevron-right"/>
                </a>
                <div class="collapse" id="mentem">
                    <a href="#mentemsub1" class="list-group-item" data-toggle="collapse" aria-expanded="false">Franjas<i class="fa fa-caret-down"></i></a>
                    <div class="collapse" id="mentemsub1">
                        <a id="HGYT" onclick="graficar(this.id)" class="list-group-item" data-parent="#mentemsub1">Consumo promedio por tipo tarifa</a>
                    </div>
                    <a href="#mentemsub2" class="list-group-item" data-toggle="collapse" aria-expanded="false">Dias<i class="fa fa-caret-down"></i></a>
                    <div class="collapse" id="mentemsub2">
                        <a id="GTR" onclick="graficar(this.id)" class="list-group-item" data-parent="#mentemsub2">Consumo promedio tarifas dinamicas</a>
                    </div>
                    <a href="#mentemsub3" class="list-group-item" data-toggle="collapse" aria-expanded="false">Mes<i class="fa fa-caret-down"></i></a>
                    <div class="collapse" id="mentemsub3">
                        <a id="graf3_3_1" onclick="graficar(this.id)" class="list-group-item" data-parent="#mentemsub3">Reporte 1</a>
                    </div>
                </div>
                
            </div>
        </div>
    </body>
</html>