function tableViewer(tableArray){
    
    $("h4.tableTitles").remove();

    function drawTable() {

      if (tableArray.length == 0 || tableArray.length > 5){
        $("#tableResults1").hide();
        $("#tableResults2").hide();
        $("#tableResults3").hide();
        $("#tableResults4").hide();
        $("#tableResults5").hide();
        $("p#noTable").show();
      }
      if (tableArray.length == 1){
        $(tableTitles[0]).insertBefore("#tableResults1");
        $("#tableResults1").show();
        $("#tableResults2").hide();
        $("#tableResults3").hide();
        $("#tableResults4").hide();
        $("#tableResults5").hide();
        $("p#noTable").hide();
        var query = 'SELECT col1 FROM '+ tableArray[0];
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText);

        gvizQuery.send(function(response) {
          var table = new google.visualization.Table(document.getElementById('tableResults1'));
          table.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
      }
      if (tableArray.length == 2){
        
        $(tableTitles[0]).insertBefore("#tableResults1");
        $(tableTitles[1]).insertBefore("#tableResults2");
        $("#tableResults1").show();
        $("#tableResults2").show();
        $("#tableResults3").hide();
        $("#tableResults4").hide();
        $("#tableResults5").hide();
        $("p#noTable").hide();
        var query = 'SELECT col1  FROM '+ tableArray[0];
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText);

        gvizQuery.send(function(response) {
          var table = new google.visualization.Table(document.getElementById('tableResults1'));
          table.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
        
        var query2 = 'SELECT col1  FROM '+ tableArray[1];
        var queryText2 = encodeURIComponent(query2);
        var gvizQuery2 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText2);

        gvizQuery2.send(function(response) {
          var table2 = new google.visualization.Table(document.getElementById('tableResults2'));
          table2.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
      }
      if (tableArray.length == 3){

        $(tableTitles[0]).insertBefore("#tableResults1");
        $(tableTitles[1]).insertBefore("#tableResults2");
        $(tableTitles[2]).insertBefore("#tableResults3");
        $("#tableResults1").show();
        $("#tableResults2").show();
        $("#tableResults3").show();
        $("#tableResults4").hide();
        $("#tableResults5").hide();
        $("p#noTable").hide();
        var query = 'SELECT col1  FROM '+ tableArray[0];
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText);

        gvizQuery.send(function(response) {
          var table = new google.visualization.Table(document.getElementById('tableResults1'));
          table.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
        
        var query2 = 'SELECT col1  FROM '+ tableArray[1];
        var queryText2 = encodeURIComponent(query2);
        var gvizQuery2 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText2);

        gvizQuery2.send(function(response) {
          var table2 = new google.visualization.Table(document.getElementById('tableResults2'));
          table2.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });

        var query3 = 'SELECT col1  FROM '+ tableArray[2];
        var queryText3 = encodeURIComponent(query3);
        var gvizQuery3 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText3);

        gvizQuery3.send(function(response) {
          var table3 = new google.visualization.Table(document.getElementById('tableResults3'));
          table3.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
      }  
      if (tableArray.length == 4){

        $(tableTitles[0]).insertBefore("#tableResults1");
        $(tableTitles[1]).insertBefore("#tableResults2");
        $(tableTitles[2]).insertBefore("#tableResults3");
        $(tableTitles[3]).insertBefore("#tableResults4");
        $("#tableResults1").show();
        $("#tableResults2").show();
        $("#tableResults3").show();
        $("#tableResults4").show();
        $("#tableResults5").hide();
        $("p#noTable").hide();
        var query = 'SELECT col1  FROM '+ tableArray[0];
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText);

        gvizQuery.send(function(response) {
          var table = new google.visualization.Table(document.getElementById('tableResults1'));
          table.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
        
        var query2 = 'SELECT col1  FROM '+ tableArray[1];
        var queryText2 = encodeURIComponent(query2);
        var gvizQuery2 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText2);

        gvizQuery2.send(function(response) {
          var table2 = new google.visualization.Table(document.getElementById('tableResults2'));
          table2.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
        
        var query3 = 'SELECT col1  FROM '+ tableArray[2];
        var queryText3 = encodeURIComponent(query3);
        var gvizQuery3 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText3);

        gvizQuery3.send(function(response) {
          var table3 = new google.visualization.Table(document.getElementById('tableResults3'));
          table3.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });

        var query4 = 'SELECT col1  FROM '+ tableArray[3];
        var queryText4 = encodeURIComponent(query4);
        var gvizQuery4 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText4);

        gvizQuery4.send(function(response) {
          var table4 = new google.visualization.Table(document.getElementById('tableResults4'));
          table4.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
      }
      if (tableArray.length == 5){

        $(tableTitles[0]).insertBefore("#tableResults1");
        $(tableTitles[1]).insertBefore("#tableResults2");
        $(tableTitles[2]).insertBefore("#tableResults3");
        $(tableTitles[3]).insertBefore("#tableResults4");
        $(tableTitles[4]).insertBefore("#tableResults5");
        $("#tableResults1").show();
        $("#tableResults2").show();
        $("#tableResults3").show();
        $("#tableResults4").show();
        $("#tableResults5").show();
        $("p#noTable").hide();
        var query = 'SELECT col1  FROM '+ tableArray[0];
        var queryText = encodeURIComponent(query);
        var gvizQuery = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText);

        gvizQuery.send(function(response) {
          var table = new google.visualization.Table(document.getElementById('tableResults1'));
          table.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
        
        var query2 = 'SELECT col1  FROM '+ tableArray[1];
        var queryText2 = encodeURIComponent(query2);
        var gvizQuery2 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText2);

        gvizQuery2.send(function(response) {
          var table2 = new google.visualization.Table(document.getElementById('tableResults2'));
          table2.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
        
        var query3 = 'SELECT col1  FROM '+ tableArray[2];
        var queryText3 = encodeURIComponent(query3);
        var gvizQuery3 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText3);

        gvizQuery3.send(function(response) {
          var table3 = new google.visualization.Table(document.getElementById('tableResults3'));
          table3.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });

        var query4 = 'SELECT col1  FROM '+ tableArray[3];
        var queryText4 = encodeURIComponent(query4);
        var gvizQuery4 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText4);

        gvizQuery4.send(function(response) {
          var table4 = new google.visualization.Table(document.getElementById('tableResults4'));
          table4.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });

        var query5 = 'SELECT col1  FROM '+ tableArray[4];
        var queryText5 = encodeURIComponent(query5);
        var gvizQuery5 = new google.visualization.Query(
            'https://www.google.com/fusiontables/gvizdata?tq=' + queryText5);

        gvizQuery5.send(function(response) {
          var table5 = new google.visualization.Table(document.getElementById('tableResults5'));
          table5.draw(response.getDataTable(),{
              showRowNumber:true,
              sort: 'enable',
              pageSize: 10,
              page: 'enable'
              });

        });
      }

    }
    drawTable();

}