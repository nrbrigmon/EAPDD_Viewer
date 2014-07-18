$(document).ready(function(){

	$('#clickme1').click(function() {
        	$('#mapToggle').slideToggle(750);
        	$('#menu_button').slideToggle(500);
                if ($('#map-menu').is(":visible")){
                        $('#map-menu').slideToggle(500);
                };
        	var origsrc = $('#img1').attr('src');
                var src = '';
                if (origsrc == 'images/chevron_down_new.png') 
                {
                	src = 'images/chevron_right_new.png';
                }
                if (origsrc == 'images/chevron_right_new.png') 
                {
                	src = 'images/chevron_down_new.png';
                }
                $('#img1').attr('src', src);
		});

	$('#clickme2').click(function() {
		$('div#tableToggle').slideToggle(750);
		var origsrc = $('#img2').attr('src');
                var src = '';
                if (origsrc == 'images/chevron_down_new.png') 
                {
                	src = 'images/chevron_right_new.png';
                }
                if (origsrc == 'images/chevron_right_new.png') 
                {
                	src = 'images/chevron_down_new.png';
                }
                $('#img2').attr('src', src);
		});
	
	$('#clickme3').click(function() {
		$('#searchOptions').slideToggle(750);
		var origsrc = $('#img3').attr('src');
                var src = '';
                if (origsrc == 'images/chevron_down_new.png') 
                {
                	src = 'images/chevron_right_new.png';
                }
                if (origsrc == 'images/chevron_right_new.png') 
                {
                	src = 'images/chevron_down_new.png';
                }
                $('#img3').attr('src', src);
	});

        //this is for the map icon
        $("#menu_button").hover(function(){
                var origsrc = $('#menu_button img').attr('src');
                var src = '';
                if (origsrc == "images/menu_list_icon.png") 
                {
                        src = "images/menu_list_icon_hover.png";
                }
                if (origsrc == "images/menu_list_icon_hover.png") 
                {
                        src = "images/menu_list_icon.png";
                }
                $('#menu_button img').attr('src', src);
        });

        //the below are for the map menu
        $('#menu_button').click(function() {
                $('#map-menu').slideToggle(750);
        });

        $('.crime-menu').click(function(){
                $('.crime-list').slideToggle(750);
        });
        $('.demo-menu').click(function(){
                $('.demo-list').slideToggle(750);
        });
        $('.edu-menu').click(function(){
                $('.edu-list').slideToggle(750);
        });
        $('.env-menu').click(function(){
                $('.env-list').slideToggle(750);
        });
        $('.infra-menu').click(function(){
                $('.infra-list').slideToggle(750);
        });
        $('.plan-menu').click(function(){
                $('.plan-list').slideToggle(750);
        });
        $('.parks-menu').click(function(){
                $('.parks-list').slideToggle(750);
        });
        $('.biz-menu').click(function(){
            $('.biz-list').slideToggle(750);
        });

});


