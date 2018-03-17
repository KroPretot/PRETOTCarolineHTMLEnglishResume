$(document).ready(function() {
	$('div.JavascriptTest1').click(function() {
       $(this).animate({
           height: '+=10px'
       });
	});
	//click peut être remplacé par (entre autre) : mouseenter et mouseleave
	//height peut être remplacé par (entre autre) : width
	$('div.JavascriptTest2').mouseenter(function() {
		//Toggle permet de basculer un élément d'un état à un autre. ex : si l'élément est visible, il devient invisible.
		$(this).toggle(1000);
		});
	$('div.JavascriptTest2bis').mouseenter(function() {
		$(this).fadeOut(1000);
		});
	$('div.JavascriptTest3').click(function() {
		$('div.JavascriptTest3').not(this).fadeOut(1000);
		});	
});