//check of specific items by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete item

$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

//Getting new todo and adding it to todo List
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>"+ " " +todoText+"</li>");
	}
});

//Toggle input based on plus sign
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});