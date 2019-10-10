<!DOCTYPE html>
<html>
    <head>
        <title></title>

    </head>
    <body>
        <nav id="sidebar">
            <div class="panel-group"> <!--id="accordion"-->
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed" ><span class="glyphicon glyphicon-stats">
                                </span> Tipo Grafico</a>
                        </h4>
                    </div>
                    <div>
                        <div class="panel-body">
                            <form class="form-inline">
                                <div class="checkbox checbox-switch switch-info"  data-toggle="collapse" data-target="#opts_mes">
                                    <label><input id="cb_typBar" type="checkbox" onchange="singleSelectionType(this.id)" /> <span></span>Barra</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info"  data-toggle="collapse" data-target="#opts_dia">
                                    <label><input id="cb_typLin" type="checkbox" onchange="singleSelectionType(this.id)" /> <span></span>Linea</label>
                                </div>
                                <br>
                                <div  class="checkbox checbox-switch switch-info"  data-toggle="collapse" data-target="#opts_franja">
                                    <label><input id="cb_typCir" type="checkbox" onchange="singleSelectionType(this.id)" /> <span></span>Circular</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info"  data-toggle="collapse" data-target="#opts_franja">
                                    <label><input id="cb_typDon" type="checkbox" onchange="singleSelectionType(this.id)" /> <span></span>Anillo</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed" ><span class="glyphicon glyphicon-calendar">
                                </span> Tiempo</a>
                        </h4>
                    </div>
                    <div>
                        <div class="panel-body">
                            <form class="form-inline">
                                <div class="checkbox checbox-switch switch-info"  data-toggle="collapse" data-target="#opts_mes">
                                    <label><input id="cb_temMes" type="checkbox" onchange="singleSelectionTime(this.id)" /> <span></span>Mensual</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info"  data-toggle="collapse" data-target="#opts_dia">
                                    <label><input id="cb_temDia" type="checkbox" onchange="singleSelectionTime(this.id)" /> <span></span>Diaria</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info"  data-toggle="collapse" data-target="#opts_franja">
                                    <label><input id="cb_temFran" type="checkbox" onchange="singleSelectionTime(this.id)" /> <span></span>Franjas</label>
                                </div>
                                

                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                <span class="glyphicon glyphicon-usd"></span> Tarifa</a>
                        </h4>

                    </div>
                    <div id="collapse1" class="panel-collapse collapse collapsed">
                        <div class="panel-body" id="accordion_tariff">
                            <form class="form-inline">
                                <div class="checkbox checbox-switch switch-info" data-toggle="collapse" data-target="#opts_tipo">
                                    <label><input id="cb_tipoTar"  type="checkbox" onchange="singleSelectionOthers(this.id)"/> <span></span>Tipo de Tarifa</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info" data-toggle="collapse" data-target="#opts_tou">
                                    <label><input id="cb_tarDin" type="checkbox" onchange="singleSelectionOthers(this.id)"/> <span></span>Tarifas Dinamicas</label>
                                </div>
                            </form>
                            <div class="form-check">
                                <div id="opts_tipo" class="panel-collapse collapse collapsed">
                                    <label><input type="checkbox" name="check">Estandar</label><br>
                                    <label><input type="checkbox" name="check">Dinamica</label><br>
                                </div>
                                <div id="opts_tou" class="panel-collapse collapse collapsed">
                                    <label><input type="checkbox" name="check">Alta</label><br>
                                    <label><input type="checkbox" name="check">Normal</label><br>
                                    <label><input type="checkbox" name="check">Baja</label><br>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2"><span class="glyphicon glyphicon-user">
                                </span> Demografia</a>
                        </h4>
                    </div>
                    <div id="collapse2" class="panel-collapse collapse collapsed">
                        <div class="panel-body" id="accordion_demo">
                            <form class="form-inline">
                                <div  class="checkbox checbox-switch switch-info" data-toggle="collapse" data-target="#opts_group">
                                    <label><input id="cb_demGrupo" type="checkbox" onchange="singleSelectionOthers(this.id)"/> <span></span>Grupo</label>
                                </div>
                                <div  class="checkbox checbox-switch switch-info" data-toggle="collapse" data-target="#opts_category">
                                    <label><input id="cb_demCategoria" type="checkbox" onchange="singleSelectionOthers(this.id)"/> <span></span>Categoria </label>
                                </div>
                            </form>
                            <div class="form-check" >
                                <!--                                GRUPOS-->
                                <div id="opts_group" class="panel-collapse collapse collapsed" >
                                    <label><input type="checkbox" name="check">Wealthy Executives</label><br>
                                    <label><input type="checkbox" name="check">Affluent Greys</label><br>
                                    <label><input type="checkbox" name="check">Flourishing Families</label><br>
                                    <label><input type="checkbox" name="check">Prosperous Professionals</label><br>
                                    <label><input type="checkbox" name="check">Educated Urbanites</label><br>
                                    <label><input type="checkbox" name="check">Aspiring Singles</label><br>
                                    <label><input type="checkbox" name="check">Starting Out</label><br>
                                    <label><input type="checkbox" name="check">Secure Families</label><br>
                                    <label><input type="checkbox" name="check">Settled Suburbia</label><br>
                                    <label><input type="checkbox" name="check">Prudent Pensioners</label><br>
                                    <label><input type="checkbox" name="check">Asian Communities</label><br>
                                    <label><input type="checkbox" name="check">Post-Industrial</label><br>
                                    <label><input type="checkbox" name="check">Blue-collar</label><br>
                                    <label><input type="checkbox" name="check">Struggling Families</label><br>
                                    <label><input type="checkbox" name="check">Burdened Singles</label><br>
                                    <label><input type="checkbox" name="check">High-Rise</label><br>
                                    <label><input type="checkbox" name="check">Inner City</label><br>
                                </div>
                                <!--                                CATEGORIAS-->
                                <div id="opts_category" class="panel-collapse collapse collapsed">
                                    <label><input type="checkbox" name="check">Wealthy Achievers</label><br>
                                    <label><input type="checkbox" name="check">Urban Prosperity</label><br>
                                    <label><input type="checkbox" name="check">Uomfortably Off</label><br>
                                    <label><input type="checkbox" name="check">Moderate Means</label><br>
                                    <label><input type="checkbox" name="check">Hard-Pressed</label><br>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </body>
</html>