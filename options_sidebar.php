<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="css/options_sidebar.css">

    </head>
    <body>
        <nav id="sidebar">
            <div class="panel-group" > <!--id="accordion"-->
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                <span class="glyphicon glyphicon-calendar"></span>Tiempo</a>
                        </h4>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse in">
                        <div class="panel-body" id="accordion_tariff">
                            <form class="form-inline">
                                <div class="checkbox checbox-switch switch-info">
                                    <label><input id="hourchart" checked class="timechart"   name="timechart" value="hourchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Franjas</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info">
                                    <label><input id="daychart" class="timechart"  name="timechart" value="daychart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Dias</label>
                                </div>
                                <div class="checkbox checbox-switch switch-info">
                                    <label><input id="monthchart" class="timechart"  name="timechart" value="monthchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Meses</label>
                                </div>
                                <div class="checkbox checbox-switch switch-info">
                                    <label><input id="trimesterchart" class="timechart"  name="timechart" value="trimesterchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Trimestres</label>
                                </div>
                                <div class="checkbox checbox-switch switch-info">
                                    <label><input id="holydaychart" class="timechart"  name="timechart" value="holydaychart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Festivos</label>
                                </div>
                                <div class="checkbox checbox-switch switch-info">
                                    <label><input id="weekendchart" class="timechart"  name="timechart" value="weekendchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Fines de Semanas</label>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2"><span class="glyphicon glyphicon-stats">
                                </span> Tipo de grafico</a>
                        </h4>
                    </div>
                    <div id="collapse2" class="panel-collapse collapse in">
                        <div class="panel-body" id="accordion_demo">
                            <form class="form-inline">
                                <div  class="checkbox checbox-switch switch-info">
                                    <label><input id="barchart" name="typechart" checked class="typechart" value="barchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Barras</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info">
                                    <label><input id="linechart" name="typechart" class="typechart" value="linechart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Lineas</label>
                                </div>
                               <!-- <div  class="checkbox checbox-switch switch-info">
                                    <label><input id="circlechart" name="typechart" class="typechart" value="circlechart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Circular</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info">
                                    <label><input id="donutchart" name="typechart" class="typechart" value="donutchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Anillo</label>
                                </div> -->
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3"><span class="glyphicon glyphicon-plus">
                                </span> Agregación</a>
                        </h4>
                    </div>
                    <div id="collapse3" class="panel-collapse collapse in">
                        <div class="panel-body" id="accordion_demo">
                            <form class="form-inline">
                                <div  class="checkbox checbox-switch switch-info ">
                                    <label><input id="avgchart" name="agregchart" checked  class="agregchart" value="avgchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Promedio</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info">
                                    <label><input id="sumchart" name="agregchart"  class="agregchart" value="sumchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Sumatoria</label>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse4"><span class="glyphicon glyphicon-dashboard">
                                </span> Valor</a>
                        </h4>
                    </div>
                    <div id="collapse4" class="panel-collapse collapse in">
                        <div class="panel-body" id="accordion_demo">
                            <form class="form-inline">
                                <div  class="checkbox checbox-switch switch-info ">
                                    <label><input id="conschart" name="valuechart" checked  class="valuechart" value="conschart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Consumo</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info">
                                    <label><input id="pricechart" name="valuechart"  class="valuechart" value="pricechart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Precio</label>
                                </div>
                                <!-- <div  class="checkbox checbox-switch switch-info">
                                    <label><input id="bothchart" name="valuechart"  class="valuechart" value="bothchart" type="checkbox" onchange="singleSelection(this.name, this.id)"/> <span></span>Ambos</label>
                                </div> -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </body>
</html>

