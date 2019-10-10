<!DOCTYPE html>
<?
php ini_set("display_errors", "on"); 
include 'DaoFunciones.php';
?>
<html>
<head>
    <title>Dashboard AMI</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/stylegraficas.css">
    <link rel="stylesheet" href="DataTables/datatables.min.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="DataTables/datatables.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/Chart.min.js"></script>
    <script type="text/javascript" src="js/graficas.js"></script>
    <script type="text/javascript" src="js/gui.js"></script>
	<script type="text/javascript" src="js/jspdf.js"></script>
	
</head>
<body>
<?php
session_start();
?>
<div id="loader" style="display:none;"></div>
    <div class="container-fluid">
      <div class="row">
          <?php include 'navbar.php' ?>
      </div>
      <div class="row">
	  <div class="col-md-2">
            <?php include 'options_sidebar.php'; ?>
        </div>
        <div class="col-md-10">
            <div class="tab-content">
                <ul class="nav nav-tabs small justify-content-end" role="tablist">
				<li id="litabsummary" class="active"><a data-toggle="tab" href="#tabsummary">Inicio</a></li>
				<li id="litabchart" style="display:none;"><a data-toggle="tab" href="#tabchart">Grafico</a></li>
				<li id="litabdata" style="display:none;"><a data-toggle="tab" href="#tabdata">Datos</a></li>
				</ul>
				
				<div id="tabsummary" class="tab-pane fade in active"></div>
				<div id="tabchart" style="display:none;" class="tab-pane fade  in active">
                    <div id="chart-container" >
                        <canvas id="graphCanvas"></canvas>
                    </div>
                </div>
				<div id="tabdata" style="display:none;" class="tab-pane fade">
                    <table id="datos" class="table table-striped table-bordered " data-pagination="true" data-search="true" data-toggle="table" style="width:100%">
                        <thead>
                            <tr>
                                <th id = "title_label"></th>
                                <th id = "title_sublabel"></th>
                                <th id = "title_value"></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
      <?php include 'footer.php' ?>
  </div>
</div>
<div class="row">
</div>
</div>
</body>
</html>