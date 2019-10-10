var table;
$(document).ready(function () {
     table = $('#datos').DataTable();
 });

function setTypeChart(id){
    /*var types = document.getElementsByName("typechart");
    for(var i = 0; i < types.length; i++){
        alert(types[i].selected+"df");
    }*/
}

function setTempoChart(id){

}

function showGraph(id, titlechart) {
    if (window.grafica) {
        window.grafica.clear();
        window.grafica.destroy();
    }

    var numDataSets = 0;
    var namesublabel = "";
    var typechart = document.getElementById("typechart").value;
    var tempochart = document.getElementById("tempochart").value;
    var agregchart = document.getElementById("agregchart").value;

    // Seleccion de datos
    var url = "dao/consultas.php?graf=".concat(id);

    // Agregacion de Datos
    if(agregchart == 'avgchart'){
        url += '&agreg=AVG';
        titlechart += '(Promedio)';
    }else if(agregchart == 'sumchart'){
        url += '&agreg=SUM';
        titlechart += '(Total)';
    }

    // Tiempo del grafico
    if(tempochart == 'monthchart'){
        url += '&tempo=mes';
        numDataSets = 12;
        namesublabel = "Mes ";
    }else if(tempochart == 'daychart'){
        url += '&tempo=dia';
        numDataSets = 7;
        namesublabel = "Dia ";
    }else if(tempochart == 'hourchart'){
        url += '&tempo=franja';
        numDataSets = 8;
        namesublabel = "Franja ";
    }

    // Tipo de grafico
    if(typechart == 'barchart'){
        showBarGraph(url,namesublabel, titlechart);
    }else if(typechart == 'linechart'){
        showLineGraph(url,namesublabel, titlechart);
    }else if(typechart == 'circlechart'){
        showCircleGraph(url,namesublabel, titlechart);
    }else if(typechart == 'donutchart'){
        showDonutGraph(url,namesublabel, titlechart);
    }else{
        alert("Error graficando");
    }
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

function getColores(i){
    var colores = [
    {bgcolor:'#4573A7',bcolor:'#4573A7',hbgcolor:'#4573A7',hbcolor:'#4573A7'},
    {bgcolor:'#3E96AE',bcolor:'#3E96AE',hbgcolor:'#3E96AE',hbcolor:'#3E96AE'},
    {bgcolor:'#7D64A3',bcolor:'#7D64A3',hbgcolor:'#7D64A3',hbcolor:'#7D64A3'},
    {bgcolor:'#83A84D',bcolor:'#83A84D',hbgcolor:'#83A84D',hbcolor:'#83A84D'},
    {bgcolor:'#AA4644',bcolor:'#AA4644',hbgcolor:'#AA4644',hbcolor:'#AA4644'},
    {bgcolor:'#F9D077',bcolor:'#F9D077',hbgcolor:'#F9D077',hbcolor:'#F9D077'},
    {bgcolor:'#3FABCC',bcolor:'#3FABCC',hbgcolor:'#3FABCC',hbcolor:'#3FABCC'},
    {bgcolor:'#C9488C',bcolor:'#C9488C',hbgcolor:'#C9488C',hbcolor:'#C9488C'}];
    return colores[i];
}

function showBarGraph(url, namesublabel,titlechart) {
    {
        $.post(url,
            function (data){
                loadTable(data);
                var etiquetas = [];
                var subetiquetas = [];

                for (var i in data) {
                    if(!esta(subetiquetas, data[i].sublabel)){
                        subetiquetas.push(data[i].sublabel);
                    }
                    if(!esta(etiquetas, data[i].label)){
                        etiquetas.push(data[i].label);
                    }
                }

                var loadDatasets = [];

                for (var i in subetiquetas) {
                    var valores = [];
                    for (var j in etiquetas) {
                        for (var k in data) {
                            if(data[k].sublabel == subetiquetas[i]){
                                if(data[k].label == etiquetas[j]){
                                    valores.push(Number(data[k].value));
                                }
                            }
                        }
                    }
                    var colores = getColores(i);
                    var dataset = {
                        label: namesublabel+(Number(i)+1),
                        backgroundColor: colores.bgcolor,
                        borderColor: colores.bcolor,
                        hoverBackgroundColor: colores.hbgcolor,
                        hoverBorderColor: colores.hbcolor,
                        data: valores
                    }
                    loadDatasets.push(dataset);
                }

                
                var chartdata = {
                    labels: etiquetas,
                    datasets: loadDatasets
                };

                var graphTarget = $("#graphCanvas");

                window.grafica = new Chart(graphTarget, {
                    type: 'bar',
                    data: chartdata,
                    responsive: true,
                    maintainAspectRatio: false,
                    options: {
                      title: {
                        display: true,
                        text: titlechart
                    },
                    legend: {
                        display: true,
                        position: 'top',
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
                            labelString: 'Consumo (kWh)'
                        }
                    }],
                    xAxes: [{
                      scaleLabel: {
                        display: false,
                        labelString: 'pendiente'
                    }
                }],
            }
        }
    });
            });
    }
}

function showLineGraph(url, namesublabel) {
    {
        $.post(url,
            function (data){
                var etiquetas = [];
                var subetiquetas = [];

                for (var i in data) {
                    if(!esta(subetiquetas, data[i].sublabel)){
                        subetiquetas.push(data[i].sublabel);
                    }
                    if(!esta(etiquetas, data[i].label)){
                        etiquetas.push(data[i].label);
                    }
                }

                var loadDatasets = [];

                for (var i in subetiquetas) {
                    var valores = [];
                    for (var j in etiquetas) {
                        for (var k in data) {
                            if(data[k].sublabel == subetiquetas[i]){
                                if(data[k].label == etiquetas[j]){
                                    valores.push(Number(data[k].value));
                                }
                            }
                        }
                    }
                    var colores = getColores(i);
                    var dataset = {
                        label: namesublabel+(Number(i)+1),
                        backgroundColor: colores.bgcolor,
                        borderColor: colores.bcolor,
                        hoverBackgroundColor: colores.hbgcolor,
                        hoverBorderColor: colores.hbcolor,
                        fill: false,
                        data: valores
                    }
                    loadDatasets.push(dataset);
                }

                
                var chartdata = {
                    labels: etiquetas,
                    datasets: loadDatasets
                };

                var graphTarget = $("#graphCanvas");

                window.grafica = new Chart(graphTarget, {
                    type: 'line',
                    data: chartdata
                });
            });
    }
}
function showCircleGraph(url,namesublabel) {
    {
        $.post(url,
            function (data){
                var etiquetas = [];
                var subetiquetas = [];

                for (var i in data) {
                    if(!esta(subetiquetas, data[i].sublabel)){
                        subetiquetas.push(data[i].sublabel);
                    }
                    if(!esta(etiquetas, data[i].label)){
                        etiquetas.push(data[i].label);
                    }
                }

                var loadDatasets = [];

                for (var i in subetiquetas) {
                    var valores = [];
                    for (var j in etiquetas) {
                        for (var k in data) {
                            if(data[k].sublabel == subetiquetas[i]){
                                if(data[k].label == etiquetas[j]){
                                    valores.push(Number(data[k].value));
                                }
                            }
                        }
                    }
                    var colores = getColores(i);
                    var dataset = {
                        label: namesublabel+(Number(i)+1),
                        backgroundColor: colores.bgcolor,
                        borderColor: colores.bcolor,
                        hoverBackgroundColor: colores.hbgcolor,
                        hoverBorderColor: colores.hbcolor,
                        data: valores
                    }
                    loadDatasets.push(dataset);
                }

                
                var chartdata = {
                    labels: etiquetas,
                    datasets: loadDatasets
                };

                var graphTarget = $("#graphCanvas");

                window.grafica = new Chart(graphTarget, {
                    type: 'pie',
                    data: chartdata
                });
            });
    }
}
function showDonutGraph(url,namesublabel) {
    {
        $.post(url,
            function (data){
                var etiquetas = [];
                var subetiquetas = [];

                for (var i in data) {
                    if(!esta(subetiquetas, data[i].sublabel)){
                        subetiquetas.push(data[i].sublabel);
                    }
                    if(!esta(etiquetas, data[i].label)){
                        etiquetas.push(data[i].label);
                    }
                }

                var loadDatasets = [];

                for (var i in subetiquetas) {
                    var valores = [];
                    for (var j in etiquetas) {
                        for (var k in data) {
                            if(data[k].sublabel == subetiquetas[i]){
                                if(data[k].label == etiquetas[j]){
                                    valores.push(Number(data[k].value));
                                }
                            }
                        }
                    }
                    var colores = getColores(i);
                    var dataset = {
                        label: namesublabel+(Number(i)+1),
                        backgroundColor: colores.bgcolor,
                        borderColor: colores.bcolor,
                        hoverBackgroundColor: colores.hbgcolor,
                        hoverBorderColor: colores.hbcolor,
                        data: valores
                    }
                    loadDatasets.push(dataset);
                }

                
                var chartdata = {
                    labels: etiquetas,
                    datasets: loadDatasets
                };

                var graphTarget = $("#graphCanvas");

                window.grafica = new Chart(graphTarget, {
                    type: 'doughnut',
                    data: chartdata
                });
            });
    }
}
function loadTable(data){
    for (var i in data) {
        table.row.add( [
            data[i].label,
            data[i].sublabel,
            data[i].value
            ] ).draw( false );
    }
    

}
