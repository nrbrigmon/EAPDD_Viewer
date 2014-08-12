$(document).ready(function() {
		var count = 0;
		var dialog, form,
		  name = $( "#name" ),
		  tables_list = $( "#tables_list"),
		  allFields = $( [] ).add( name );
	 	
		function updateMapLayers2() {
			var layerCount = $('#legend_option').length;
			console.log(layerCount);
	  		
	  		if (tables_list.val() == "Fire Stations"){
	  			tableIdSelection = fireTable;
	  		}
			  

		  //update map
   			 layer0.setOptions({
                  query: {
                      select: "col2",
                      from: tableIdSelection,
                      where: "" 
                      },
                  options: {
                      styleId: 2,
                      templateId: 2
                  }
              });

              layer0.setMap(map);
  
		  //update tables

		  //update legend
			$( "#legend" ).append( "<div>" +
			  "<div id='legend_option'>" + 
			  "<img id='removeLayerIcon' src='css/remove_icon.png'/>   " + 
			  tables_list.val() + "</div>" +
			  "</div>" );
			dialog.dialog( "close" );
		  	
		}
	 			 

		dialog = $( "#add-layer-form" ).dialog({
		  autoOpen: false,
		  height: 450,
		  width: 350,
		  modal: true,
		  buttons: {
			"Add New Layer": updateMapLayers2,
			Cancel: function() {
			  dialog.dialog( "close" );
			}
		  },
		  close: function() {
			form[ 0 ].reset();
			allFields.removeClass( "ui-state-error" );
		  }
		});
	 
		form = dialog.find( "form" ).on( "submit", function( event ) {
		  event.preventDefault();
		  updateMapLayers2();
		});
	 
		$( "#add-new-map-layer" ).button().on( "click", function() {
		  dialog.dialog( "open" );
		});
	  });