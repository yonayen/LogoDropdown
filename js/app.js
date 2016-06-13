$(function(){
	
0
down vote
If I understood your question right, try this:

Let's say your HTML is something like this:

<img class="product_image" src="first.png">
You can get the attr() with jQuery like this:

$(".product_image").attr("src","second.png");
and then using your buttons you load a click function like:

$('yourButtons').click(function() {
    $('.product_image').attr('src','second.jpg');
});
});