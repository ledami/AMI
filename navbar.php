<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="css/navbar.css">
    </head>
    <body>
        <!-- -->
        <nav class="navbar navbar-fixed-top ">
            <div class="container">
                <div class="navbar-header">
                   <a class="navbar-brand" href="index.php">CONSUMO ELECTRICO AMI</a>
                </div>
                <ul class="nav navbar-nav ">
                    <li><a id="cons_group" onclick="showGraph(this.id, ' Grupo')">Grupos</a></li>
					<li><a id="cons_cat" onclick="showGraph(this.id, ' Categoria')">Categorias</a></li>
					<li><a id="cons_tipo_tarifa" onclick="showGraph(this.id,' Tipo de Tarifa')">Tipos de Tarifa</a></li>
                </ul>
                
                <ul class="nav navbar-nav navbar-right">
					<li onclick="printGrafico('graphCanvas');"><a href="#"><span class="glyphicon glyphicon-export"></span> Exportar</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-exclamation-sign"></span> Acerca de</a></li>
                    <!--<li><a href="index.php"><span class="glyphicon glyphicon-exclamation-sign"></span>Cerrar Sesion</a></li>-->
                </ul>
            </div>
        </nav>
		<!--<nav id="footer" class="navbar navbar-default navbar-fixed-bottom" role="navigation"></nav>-->
    </body>
</html>