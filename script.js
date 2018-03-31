/*Page TESTS JS & JQUERY*/
	
	/*JAVASCRIPT*/
/*Test0*/
	function myFunction1(){
		var x = document.getElementsByClassName("txt");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "white";
		}
	}
		function myFunction1bis(){
		var x = document.getElementsByClassName("txt");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "transparent";
		}
	}
	function myFunction2(){
		var x = document.getElementsByClassName("txt2");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "white";
		}
	}
	function myFunction2bis(){
		var x = document.getElementsByClassName("txt2");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.backgroundColor = "transparent";
		}
	}


	/*JQUERY*/
$(document).ready(function() {
/*Test1*/
	$('div.JavascriptTest1').click(function() {
		$(this).animate({
			height:'+=10px'
		});
	});
/*Test2*/
	$('div.JavascriptTest2').mouseenter(function() {
		//PI : Toggle permet de basculer un élément d'un état à un autre. ex : si l'élément est visible, il devient invisible.
		$(this).toggle(1000);
		});
	$('div.JavascriptTest2bis').mouseenter(function() {
		$(this).fadeOut(1000);
		});
/*Test3*/
	$('div.JavascriptTest3').click(function() {
		$('div.JavascriptTest3').not(this).fadeOut(1000);
		});	
});
