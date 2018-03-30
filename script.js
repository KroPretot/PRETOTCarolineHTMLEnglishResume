/*Page WORK EXPERIENCES*/
/*...fonctionne pas
exemple w3shool fonctionne pas chez moi...https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_style
function changerCouleur(){
	document.getElementByClassName('infographie').style.fontSize='35px'
}*/	

/*Page TESTS JS & JQUERY*/
	/*JAVASCRIPT*/
/*Test0*/
/*function changerCouleur(){
	document.getElementsByClassName("impair").style.backgroundColor="blue";
}
...fonctionne pas*/
/*function changerCouleur() {
    var x = document.getElementsByClassName("impair");
    x[0].style.backgroundColor = "red";
}
...fonctionne pas tout à fait
Le bout de code [0] ou [1] ou... empêche de colorer tous les éléments de la class "impair"
exercice duquel est tiré le code : https://www.w3schools.com/Jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname2
*/
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
