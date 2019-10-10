$( document ).ready(function() {
	cargarTemas();
	cargarAsuntos();
	hideOptCaracteristicas();
});



function printGrafico(nombreCanvas) {
	var canvas = document.getElementById(nombreCanvas);
	var imgData = canvas.toDataURL("image/png", 0.5);
	var pdf = new jsPDF("landscape","pt", "letter");
	//pdf.text(10, 10, "Hello world!");
	pdf.addImage(imgData, 'PNG', 10, 30);
	
	pdf.addPage();
	var table = $('#datos').DataTable();
	var data = table.rows().data();
	var headers = [];
	$("table thead tr th").each(function(){
		headers.push($(this).text());
	});
	console.log(headers);
	pdf.table(10, 10, data, headers);
	pdf.save("download.pdf");
}

function showOptCaracteristicas(){
	$("#opt_variables").show();
	$("#chart-container").hide();
}
function hideOptCaracteristicas(){
	$("#opt_variables").hide();
}
function cargarTemas(){
	var temas = [];
	$.post('dao/funcionesGUI.php?func=getTemas', 
		function (data){
			for (var i in data) {
				temas.push(data[i].label);
			}
			addOptions("sl_tema", temas);
		});
}

function cargarAsuntos(tema){
	var asuntos = [];
	$.post('dao/funcionesGUI.php?func=getAsuntos&tema='+tema, 
		function (data){
			for (var i in data) {
				asuntos.push(data[i].label);
			}
			addOptions("sl_asunto", asuntos);
		});
}
function addOptions(sl, array) {
	array.sort();
	var select = document.getElementById(sl);
	select.options.length = 0;
	var option = document.createElement("option");
		option.text = "Seleccione";
		select.add(option);
	for (var value in array) {
		var option = document.createElement("option");
		option.text = array[value];
		option.value = array[value];
		select.add(option);
	}
}

function getValueOptions(clase){
	var chkArray = [];
	
	$("."+clase+":checked").each(function() {
		chkArray.push($(this).val());
	});
	
	return chkArray[0];
}

function singleSelection(name,id){
	var checkboxs = document.getElementsByName(name); 
	var checkbox = document.getElementById(id); 
	for (var i in checkboxs) {
		checkboxs[i].checked = false;
	}
	checkbox.checked = true;
}
