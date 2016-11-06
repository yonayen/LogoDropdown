

$function()
{
	$(".color").hide();
	$(".grayscale").show();

	$(".filter").on("click",function()
	{
		$(".color").hide();
		$(".grayscale").hide();
		$(".color." + $(this).data("filter")).show();
	});

}

function()
{

}


	// .css( "opacity", 1 )
  //   .fadeIn( 30 )
  //   .fadeOut( 1000 );


// on click 'value of data-filter' show color and hide grayscale
// of items with matching filter

// on
