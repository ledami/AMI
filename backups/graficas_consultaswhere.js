

function setTypeChart(id){
    /*var types = document.getElementsByName("typechart");
    for(var i = 0; i < types.length; i++){
        alert(types[i].selected+"df");
    }*/
}

function setTempoChart(id){

}

function showGraph(id) {
    if (window.grafica) {
        window.grafica.clear();
        window.grafica.destroy();
    }

    var url = "";
    var numDataSets = 0;
    
    var typechart = document.getElementById("typechart").value;
    var tempochart = document.getElementById("tempochart").value;

    // Seleccion de datos
    if(id == 'graf_cons_avg_group'){
        url = "dao/consultas.php?graf=cons_avg_group";
    }else if(id == 'graf_cons_avg_cat'){
        url = "dao/consultas.php?graf=cons_avg_cat";
    }

    // Tiempo del grafico
    if(tempochart == 'monthchart'){
        url += '&tempo=mes';
        numDataSets = 12;
    }else if(tempochart == 'daychart'){
        url += '&tempo=dia';
        numDataSets = 7;
    }else if(tempochart == 'hourchart'){
        url += '&tempo=franja';
        numDataSets = 8;
    }

    // Tipo de grafico
    if(typechart == 'barchart'){
        showBarGraph(url,numDataSets);
    }else if(typechart == 'linechart'){
        showLineGraph(url,numDataSets);
    }else if(typechart == 'circlechart'){
        showCircleGraph(url,numDataSets);
    }else if(typechart == 'donutchart'){
        showDonutGraph(url,numDataSets);
    }else{
        alert("Error graficando");
    }
}


function showBarGraph(url,numDataSets) {
    var graphTarget = $("#graphCanvas");

    var barChartData = {
        labels: [],
        datasets: []
    };

    for (var i = 1; i <= numDataSets; i++) {
        $.post(url+"&dataset="+i,
            function (dataSQL){
                if(dataSQL.length > 0){
                var valores =[];
                dataSQL.forEach((serie) => { 
                  valores.push(Number(serie.value));    
              });
                var newDataset = {
                    label: i,
                    backgroundColor: 'rgba(99, 255, 132, 0.2)',
                    borderColor: 'rgba(99, 255, 132, 1)',
                    borderWidth: 1,
                    data: valores,
                }
                barChartData.datasets.push(newDataset);
            }
            });
    }
    console.log(barChartData);
window.grafica = new Chart(graphTarget, { 
        type: 'bar',
        data: barChartData
    });
    
}

    function showLineGraph(url) {
        {
            $.post(url,
                function (data){
                    console.log(data);
                    var etiquetas = [];
                    var valores = [];

                    for (var i in data) {
                        etiquetas.push(data[i].label);
                        valores.push(Number(data[i].value));
                    }
                    var chartdata = {
                        labels: etiquetas,
                        datasets: [
                        {
                            label: 'Consumo',
                            backgroundColor: '#2196F3',
                            borderColor: '#3F51B5',
                            hoverBackgroundColor: '#009688',
                            hoverBorderColor: '#009688',
                            data: valores
                        }
                        ]
                    };

                    var graphTarget = $("#graphCanvas");

                    window.grafica = new Chart(graphTarget, {
                        type: 'line',
                        data: chartdata
                    });
                });
        }
    }
    function showCircleGraph(url) {
        {
            $.post(url,
                function (data){
                    console.log(data);
                    var etiquetas = [];
                    var valores = [];

                    for (var i in data) {
                        etiquetas.push(data[i].label);
                        valores.push(Number(data[i].value));
                    }
                    var chartdata = {
                        labels: etiquetas,
                        datasets: [
                        {
                            label: 'Consumo',
                            backgroundColor: '#2196F3',
                            borderColor: '#3F51B5',
                            hoverBackgroundColor: '#009688',
                            hoverBorderColor: '#009688',
                            data: valores
                        }
                        ]
                    };

                    var graphTarget = $("#graphCanvas");

                    window.grafica = new Chart(graphTarget, {
                        type: 'pie',
                        data: chartdata
                    });
                });
        }
    }
    function showDonutGraph(url) {
        {
            $.post(url,
                function (data){
                    console.log(data);
                    var etiquetas = [];
                    var subetiquetas = [];
                    var valores = [];


                    for (var i in data) {
                        etiquetas.push(data[i].label);
                        valores.push(Number(data[i].value));
                    }



                    var chartdata = {
                        labels: etiquetas,
                        datasets: [
                        {
                            label: 'Primer Datasets',
                            backgroundColor: '#2196F3',
                            borderColor: '#3F51B5',
                            hoverBackgroundColor: '#009688',
                            hoverBorderColor: '#009688',
                            data: valores
                        }
                        ]
                    };

                    var graphTarget = $("#graphCanvas");

                    window.grafica = new Chart(graphTarget, {
                        type: 'doughnut',
                        data: chartdata
                    });
                });
        }
    }
    function loadTable(dataChart){
        $('#tabledata').bootstrapTable({
            data: dataChart
        });
    }
