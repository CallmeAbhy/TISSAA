
$(document).ready(function(){

	$("#recipeCarousel").carousel({
         interval : 2000,
         pause: 'hover'
    });

	$( "#next_18_gi" ).click(function() {

		var count = 0;

		count = $( "#book-cards .col-md-3.active" ).data( "slide-grp" )
		var lengh_of_array = $('#book-cards .col-md-3').length

		if (count > 0 && count < 7 && ((4*count) < lengh_of_array)){


			$("#book-cards .books-" + count + ".active").removeClass('active');
			$("#book-cards .books-" + count + ".active").hide();

			count = count + 1

			$("#book-cards .books-"+count).addClass('active')
			$("#book-cards .books-"+count).show();
		}

	});


	$( "#next_18" ).click(function() {

		var count = 0;

		count = $( "#book-cards .col-md-3.active" ).data( "slide-grp" )
		var length_of_array = $('#book-cards .col-md-3').length
	
		if ((count-1)> 0 && (count-1) < 7 && ((4* (count-1)) < length_of_array)){

			$("#book-cards .books-" + count + ".active").removeClass('active');
			$("#book-cards .books-" + count + ".active").hide();
			count = count - 1

			$("#book-cards .books-"+count).addClass('active')
			$("#book-cards .books-"+count).show();
		}

	});

	
});