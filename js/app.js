
$function()
{
	$(".color").hide();
	$(".grayscale").show();
​
	$(".filter").on("click",function()
	{
		$(".color").hide();
		$(".grayscale").hide();
		$(".color." + $(this).data("filter")).show();
	});
​
});
​