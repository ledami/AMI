<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="css/menu_sidebar.css">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div id="sidebar" >
        <div class="list-group">
            <a href="#mendem" class="list-group-item" data-toggle="collapse" data-parent="#sidebar">
                <span class="glyphicon glyphicon-user"/> 
                Demografia  
                <span class="glyphicon glyphicon-chevron-right"/>
            </a>
            <div class="collapse collapse in" id="mendem">
                <a id="cons_group" onclick="showGraph(this.id, 'Consumo por grupo');hideOptCaracteristicas()" class="list-group-item">Grupos ACORN</a>
                <a id="cons_cat" onclick="showGraph(this.id, 'Consumo por categoria');hideOptCaracteristicas()" class="list-group-item" data-parent="#mendemsub2">Categorias ACORN</a>
                <!-- <a id="cons_caracteristicas" onclick="showOptCaracteristicas()" class="list-group-item">Caracteristicas</a> -->
            </div>
            <a href="#mentar" class="list-group-item" data-toggle="collapse" data-parent="#sidebar">
                <span class="glyphicon glyphicon-usd"/> 
                Tarifas
                <span class="glyphicon glyphicon-chevron-right"/>
            </a>
            <div class="collapse collapse in" id="mentar">
                <a id="cons_tipo_tarifa" onclick="showGraph(this.id,'Consumo por tipo de tarifa');hideOptCaracteristicas()" class="list-group-item" data-parent="#mentarsub1">Tipo de Tarifa</a>
            </div>

        </div>
    </div>
</body>
</html>