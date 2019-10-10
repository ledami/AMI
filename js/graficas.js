var table;

$(document).ready(function () {
 initDataTable();
});
function initDataTable(){
	table = $('#datos').DataTable({
    "language": {
      "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
    }
  });
}
function esta(arreglo, valor){
    var enc = false;
    for (var i in arreglo) {
        if(arreglo[i] == valor){
            enc = true;
        }
    }
    return enc;
}
function loadTable(data, namesublabels, title_label, title_sublabel, title_value){
	var cel_label = document.getElementById("title_label");
	var cel_sublabel = document.getElementById("title_sublabel");
	var cel_value = document.getElementById("title_value");
	
	cel_label.innerHTML  = title_label;
	cel_sublabel.innerHTML  = title_sublabel;
	cel_value.innerHTML  = title_value;
	
    table.clear();
    for (var i in data) {
        table.row.add([
            data[i].label,
            namesublabels[(data[i].sublabel) - 1],
            data[i].value
            ] ).draw(false);
    }
}

function getColores(i){
    var colores = [
	{bgcolor:'#0A5B81',bcolor:'#0A5B81',hbgcolor:'#0A5B81',hbcolor:'#0A5B81'},
	{bgcolor:'#E57D06',bcolor:'#E57D06',hbgcolor:'#E57D06',hbcolor:'#E57D06'},
	{bgcolor:'#1390AE',bcolor:'#1390AE',hbgcolor:'#1390AE',hbcolor:'#1390AE'},
	{bgcolor:'#FCC81B',bcolor:'#FCC81B',hbgcolor:'#FCC81B',hbcolor:'#FCC81B'},
    {bgcolor:'#475CB8',bcolor:'#475CB8',hbgcolor:'#475CB8',hbcolor:'#475CB8'},
    {bgcolor:'#E2E0DC',bcolor:'#E2E0DC',hbgcolor:'#E2E0DC',hbcolor:'#E2E0DC'},
    {bgcolor:'#6BBC52',bcolor:'#6BBC52',hbgcolor:'#6BBC52',hbcolor:'#6BBC52'},
    {bgcolor:'#00A6A0',bcolor:'#00A6A0',hbgcolor:'#00A6A0',hbcolor:'#00A6A0'},
    {bgcolor:'#F5A11D',bcolor:'#F5A11D',hbgcolor:'#F5A11D',hbcolor:'#F5A11D'},
    {bgcolor:'#A94261',bcolor:'#A94261',hbgcolor:'#A94261',hbcolor:'#A94261'},
    {bgcolor:'#5C9632',bcolor:'#5C9632',hbgcolor:'#5C9632',hbcolor:'#5C9632'},
    {bgcolor:'#2E3289',bcolor:'#2E3289',hbgcolor:'#2E3289',hbcolor:'#2E3289'}];
	
var colores_bk1 = [
	{bgcolor:'#A8425B',bcolor:'#A8425B',hbgcolor:'#A8425B',hbcolor:'#A8425B'},
	{bgcolor:'#05A497',bcolor:'#05A497',hbgcolor:'#05A497',hbcolor:'#05A497'},
	{bgcolor:'#5D9530',bcolor:'#5D9530',hbgcolor:'#5D9530',hbcolor:'#5D9530'},
	{bgcolor:'#F4A01D',bcolor:'#F4A01D',hbgcolor:'#F4A01D',hbcolor:'#F4A01D'},
    {bgcolor:'#4573A7',bcolor:'#4573A7',hbgcolor:'#4573A7',hbcolor:'#4573A7'},
    {bgcolor:'#F05B24',bcolor:'#F05B24',hbgcolor:'#F05B24',hbcolor:'#F05B24'},
    {bgcolor:'#dc3545',bcolor:'#dc3545',hbgcolor:'#dc3545',hbcolor:'#dc3545'},
    {bgcolor:'#7D64A3',bcolor:'#7D64A3',hbgcolor:'#7D64A3',hbcolor:'#7D64A3'},
    {bgcolor:'#3FB24C',bcolor:'#3FB24C',hbgcolor:'#3FB24C',hbcolor:'#3FB24C'},
    {bgcolor:'#654264',bcolor:'#654264',hbgcolor:'#654264',hbcolor:'#654264'},
    {bgcolor:'#3FABCC',bcolor:'#3FABCC',hbgcolor:'#3FABCC',hbcolor:'#3FABCC'},
    {bgcolor:'#2E3289',bcolor:'#2E3289',hbgcolor:'#2E3289',hbcolor:'#2E3289'}];
	
	var colores_bk = [
	{bgcolor:'#5D9530',bcolor:'#5D9530',hbgcolor:'#5D9530',hbcolor:'#5D9530'},
	{bgcolor:'#F4A01D',bcolor:'#F4A01D',hbgcolor:'#F4A01D',hbcolor:'#F4A01D'},
	{bgcolor:'#A8425B',bcolor:'#A8425B',hbgcolor:'#A8425B',hbcolor:'#A8425B'},
	{bgcolor:'#05A497',bcolor:'#05A497',hbgcolor:'#05A497',hbcolor:'#05A497'},
    {bgcolor:'#4573A7',bcolor:'#4573A7',hbgcolor:'#4573A7',hbcolor:'#4573A7'},
    {bgcolor:'#AA4644',bcolor:'#AA4644',hbgcolor:'#AA4644',hbcolor:'#AA4644'},
    {bgcolor:'#3E96AE',bcolor:'#3E96AE',hbgcolor:'#3E96AE',hbcolor:'#3E96AE'},
    {bgcolor:'#7D64A3',bcolor:'#7D64A3',hbgcolor:'#7D64A3',hbcolor:'#7D64A3'},
    {bgcolor:'#83A84D',bcolor:'#83A84D',hbgcolor:'#83A84D',hbcolor:'#83A84D'},
    {bgcolor:'#F9D077',bcolor:'#F9D077',hbgcolor:'#F9D077',hbcolor:'#F9D077'},
    {bgcolor:'#3FABCC',bcolor:'#3FABCC',hbgcolor:'#3FABCC',hbcolor:'#3FABCC'},
    {bgcolor:'#C9488C',bcolor:'#C9488C',hbgcolor:'#C9488C',hbcolor:'#C9488C'}];
    return colores[i];
}

function deleteCanvas(){
    if (window.grafica) {
        if(window.grafica != null){
            window.grafica.clear();
            window.grafica.destroy();
        }
    }
}


function showGraph(id, titlechart, perLabels, labels, titlelabel) {
	// Se muestra el loader
    document.getElementById("loader").style.display = "block";
	
	// Visibilidad de pestañas
	document.getElementById("litabsummary").style.display = 'none';
	document.getElementById("tabsummary").style.display = 'none';
	document.getElementById("litabchart").style.display = 'block';
	document.getElementById("tabchart").style.display = 'block';
	document.getElementById("litabdata").style.display = 'block';
	document.getElementById("tabdata").style.display = 'block';
	
	$("#chart-container").show();
    deleteCanvas();

    var numDataSets = 0;
    var labely = '';
	
    //Nombres etiquetas predefinidas
    var namelabels = [];
    var labelMes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var labelDia = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
    var labelFranja = ['00:00 - 02:59','03:00 - 05:59','06:00 - 08:59','09:00 - 11:59','12:00 - 14:59','15:00 - 17:59','18:00 - 20:59','21:00 - 23:59'];
    var labelTrimestre = ['Primer Trimestre','Segundo Trimestre','Tercer Trimestre','Cuarto Trimestre'];
    var labelFestivo = ['No festivos','Festivos'];
    var labelFin = ['Dia Semana','Fin de Semana'];

    var typechart = getValueOptions("typechart");
    var tempochart = getValueOptions("timechart");
    var agregchart = getValueOptions("agregchart");
    var valuechart = getValueOptions("valuechart");

    if(typechart == '' || tempochart == '' || agregchart == '' ){
        alert(typechart +" "+tempochart +" "+agregchart);
        alert("Error graficando, por favor intente nuevamente.");
    }else{
    // Seleccion de datos
    var url = "dao/consultas.php?graf=".concat(id);
	
	title_label = titlechart;

    // Agregacion de Datos
    if(agregchart == 'avgchart'){
        url += '&agreg=AVG';
        labely += ' Promedio';
    }else if(agregchart == 'sumchart'){
        url += '&agreg=SUM';
        labely += ' Total';
    }

    // Tiempo del grafico   
    if(tempochart == 'monthchart'){
        url += '&tempo=mes';
        numDataSets = 12;
        if(!perLabels){
            namelabels = labelMes;
        }
		title_sublabel = "Mes";
    }else if(tempochart == 'daychart'){
        url += '&tempo=dia';
        numDataSets = 7;
        if(!perLabels){
            namelabels = labelDia;
        }
		title_sublabel = "Dia";
    }else if(tempochart == 'hourchart'){
        url += '&tempo=franja';
        numDataSets = 8;
        if(!perLabels){
            namelabels = labelFranja;
        }
		title_sublabel = "Franja";
    }else if(tempochart == 'trimesterchart'){
        url += '&tempo=trimestre';
        numDataSets = 8;
        if(!perLabels){
            namelabels = labelTrimestre;
        }
		title_sublabel = "Trimestre";
    }else if(tempochart == 'holydaychart'){
        url += '&tempo=festivo';
        numDataSets = 8;
        if(!perLabels){
            namelabels = labelFestivo;
        }
		title_sublabel = "Tipo Dia";
    }else if(tempochart == 'weekendchart'){
        url += '&tempo=finsemana';
        numDataSets = 8;
        if(!perLabels){
            namelabels = labelFin;
        }
		title_sublabel = "Tipo Dia";
    }

    // Valor de grafica
    if(valuechart == 'conschart'){
        url += '&value=CONSUMO';
        labely = 'Consumo'+labely+' (kWh)';
		titlechart = 'Consumo'+' por '+titlechart;
    }else if(valuechart == 'pricechart'){
        url += '&value=COSTO';
        labely = 'Precio'+labely+' (peniques)';
		titlechart = 'Precio'+' por '+titlechart;
    }else if(valuechart == 'bothchart'){
        url += '&value=AMBOS';
        labely = 'Consumo (kWh) & Precio (peniques)';
    }

    if (perLabels) {
        namelabels = labels;
    }

    // Tipo de grafico
	loadData(url,namelabels, typechart, titlechart, labely, title_sublabel, title_label);
	
    
}}

function loadData(url, namesublabels, typechart, titlechart, labely, title_sublabel, title_label) {
	console.log('iniciando consulta...');
		$.post(url,
		function (data){
			console.log('llenando tabla..');
			loadTable(data, namesublabels, title_label, title_sublabel, labely);
			console.log('procesando datos..');
			var etiquetas = [];
			var loadDatasets = [];
			var subetiquetas = [];
			for (var i in data) {
				if(!esta(subetiquetas, data[i].sublabel)){
					subetiquetas.push(data[i].sublabel);
				}
				if(!esta(etiquetas, data[i].label)){
					etiquetas.push(data[i].label);
				}
			}

            for (var i in subetiquetas) {
				var valores = [];
				for (var j in etiquetas) {
					for (var k in data) {
						if(data[k].sublabel == subetiquetas[i]){
							if(data[k].label == etiquetas[j]){
								valores.push(Number(data[k].value).toFixed(3));
							}
						}
					}
                }
				var colores = getColores(i);
				var dataset = {
					label: namesublabels[i],
					backgroundColor: colores.bgcolor,
					borderColor: colores.bcolor,
					hoverBackgroundColor: colores.hbgcolor,
					hoverBorderColor: colores.hbcolor,
					data: valores
                }
				loadDatasets.push(dataset);
            }
			
			var chartData = {
                    labels: etiquetas,
                    datasets: loadDatasets
                };
				console.log('generando grafico...');
			if(typechart == 'barchart'){
        showBarGraph(titlechart, labely, chartData);
    }else if(typechart == 'linechart'){
        showLineGraph(titlechart, labely, chartData);
    } 
        });
	
}

function showBarGraph(titlechart, labely, chartData){
                var graphTarget = $("#graphCanvas");
	window.grafica = new Chart(graphTarget, {
                    type: 'bar',
                    data: chartData,
                    responsive: true,
                    maintainAspectRatio: false,
                    options: {
                      title: {
                        display: true,
                        text: titlechart
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            position:'top',
                            boxWidth: 30,
                            fontColor: 'rgb(0, 0, 0)'
                        }
                    },
                    scales: {
                        yAxes: [{
                          scaleLabel: {
                            display: true,
                            stacked: false,
                            labelString: labely
                        }
                    }],
                    xAxes: [{
                      scaleLabel: {
                        display: false,
                        stacked: false,
                        labelString: 'pendiente'
                    }
                }],
            }
        }
    });
	document.getElementById("loader").style.display = "none";
}
function showLineGraph(titlechart, labely, chartData) {

                var graphTarget = $("#graphCanvas");
                window.grafica = new Chart(graphTarget, {
                    type: 'line',
                    data: chartData,
                    responsive: true,
                    maintainAspectRatio: false,
                    options: {
                      title: {
                        display: true,
                        text: titlechart
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            position:'top',
                            boxWidth: 30,
                            fontColor: 'rgb(0, 0, 0)'
                        }
                    },
                    scales: {
                        yAxes: [{
                          scaleLabel: {
                            display: true,
                            stacked: false,
                            labelString: labely
                        }
                    }],
                    xAxes: [{
                      scaleLabel: {
                        display: false,
                        stacked: false,
                        labelString: 'pendiente'
                    }
                }],
            }
        }
    });
	document.getElementById("loader").style.display = "none";
}

