$(function(){

<img class="product_image" src="first.png">
You can get the attr() with jQuery like this:

$(".product_image").attr("src","second.png");
and then using your buttons you load a click function like:

$('yourButtons').click(function() {
    $('.product_image').attr('src','second.jpg');
});
});

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