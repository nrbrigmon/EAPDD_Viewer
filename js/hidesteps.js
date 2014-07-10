$(document).ready(function(){
	$('#clickme1').click(function() {
		$('#stepOne').slideToggle(750);
		var origsrc = $('#img1').attr('src');
        var src = '';
        if (origsrc == 'images/chevron_right_new.png') 
        {
        	src = 'images/chevron_down_new.png';
        }
        if (origsrc == 'images/chevron_down_new.png') 
        {
        	src = 'images/chevron_right_new.png';
        }
        $('#img1').attr('src', src);
		});
	$('#clickme2').click(function() {
		$('#stepTwo').slideToggle(750);
		var origsrc = $('#img2').attr('src');
        var src = '';
        if (origsrc == 'images/chevron_right_new.png') 
        {
        	src = 'images/chevron_down_new.png';
        }
        if (origsrc == 'images/chevron_down_new.png') 
        {
        	src = 'images/chevron_right_new.png';
        }
        $('#img2').attr('src', src);
		});
	
	$('#clickme3').click(function() {
		$('#stepThree').slideToggle(750);
		var origsrc = $('#img3').attr('src');
        var src = '';
        if (origsrc == 'images/chevron_right_new.png') 
        {
        	src = 'images/chevron_down_new.png';
        }
        if (origsrc == 'images/chevron_down_new.png') 
        {
        	src = 'images/chevron_right_new.png';
        }
        $('#img3').attr('src', src);

		});

        $('#clickme4').click(function() {
                $('#stepFour').slideToggle(750);
                var origsrc = $('#img4').attr('src');
        var src = '';
        if (origsrc == 'images/chevron_right_new.png') 
        {
                src = 'images/chevron_down_new.png';
        }
        if (origsrc == 'images/chevron_down_new.png') 
        {
                src = 'images/chevron_right_new.png';
        }
        $('#img4').attr('src', src);

                });

        $('#clickme5').click(function() {
                $('#stepFive').slideToggle(750);
                var origsrc = $('#img5').attr('src');
        var src = '';
        if (origsrc == 'images/chevron_right_new.png') 
        {
                src = 'images/chevron_down_new.png';
        }
        if (origsrc == 'images/chevron_down_new.png') 
        {
                src = 'images/chevron_right_new.png';
        }
        $('#img5').attr('src', src);

                });

        $('#clickme6').click(function() {
                $('#intro').slideToggle(750);
                var origsrc = $('#img6').attr('src');
        var src = '';
        if (origsrc == 'images/chevron_right_new.png') 
        {
                src = 'images/chevron_down_new.png';
        }
        if (origsrc == 'images/chevron_down_new.png') 
        {
                src = 'images/chevron_right_new.png';
        }
        $('#img6').attr('src', src);

                });
});


