//WORKING CORRECTLY BUT UNABLE TO REFRESH

$(function() {

/* $("#calendar").datepicker(); */
	// $(".titi").scroll(function(){
	//	
	// $('.bosanova').offset({ top: 5 });
	//		
	//		
	// })
	

/* $("#Bouton_studio").css('background-color', 'blue') */

$("#Bouton_maison").click(function(){
	$("#Bouton_studio").show()
	$( "#maison").show();
	/* $( "#Bouton_studio").hide(); */
/* 	$( "#Bouton_maison").hide(); */
/* 	$( "#Bouton_title_studio").show(); */
 	/* $( "#studio").hide(); */
	/* $( "#bienvenue").hide();  */
	
	
$("#maison_title").text("Location Maison Hossegor/Capbreton");
	$("#maison").show();
		$("#studio").hide();
	});
	
	$("#Bouton_studio").click(function(){
	$("#Bouton_maison").show();
	$("#Bouton_studio").hide();
	$( "#studio").show();
/* 	$( "#Bouton_maison").hide();
	$( "#Bouton_studio").hide();
	$( "#Bouton_title_maison").show();
	$( "#maison").hide();
	$( "#bienvenue").hide(); */
	$("#maison_title").text("Location Studio Hossegor/Capbreton");
	$("#studio").show();
	$("#maison").hide();
	/* $("#Bouton_studio").css('color', 'blue') */

	});

/* par default */
/* $( "#Bouton_maison").hide(); */
$("#template_Aout_maison").hide();
$("#template_Septembre_maison").hide();
$("#template_Aout_studio").hide();
$("#template_Septembre_studio").hide();
$("#studio").hide();
$("#Bouton_maison").hide()



$("#Bouton_next_Juillet_maison").click(function(){
	$("#template_Aout_maison").show();
	$("#template_Juillet_maison").hide();
});

$("#Bouton_next_Aout_maison").click(function(){
	$("#template_Septembre_maison").show();
	$("#template_Aout_maison").hide();
});

$("#Bouton_next_Septembre_maison").click(function(){

});

$("#Bouton_prev_Septembre_maison").click(function(){
	$("#template_Aout_maison").show();
	$("#template_Septembre_maison").hide();
});

$("#Bouton_prev_Aout_maison").click(function(){
	$("#template_Juillet_maison").show();
	$("#template_Aout_maison").hide();
});

$("#Bouton_prev_Juillet_maison").click(function(){
	
});


/* studio */

$("#Bouton_next_Juillet_studio").click(function(){
	$("#template_Aout_studio").show();
	$("#template_Juillet_studio").hide();
});

$("#Bouton_next_Aout_studio").click(function(){
	$("#template_Septembre_studio").show();
	$("#template_Aout_studio").hide();
});

$("#Bouton_next_Septembre_studio").click(function(){

});

$("#Bouton_prev_Septembre_studio").click(function(){
	$("#template_Aout_studio").show();
	$("#template_Septembre_studio").hide();
});

$("#Bouton_prev_Aout_studio").click(function(){
	$("#template_Juillet_studio").show();
	$("#template_Aout_studio").hide();
});

$("#Bouton_prev_Juillet_studio").click(function(){
	
});

$("#myCarousel_studio")
			.bind(
					'slid.bs.carousel',
					function(e) {
						// do something
						var src = $('.active').find('img').attr('id'); // gives
						// you
						// the
						// id

						switch (src) {

						case 'porte_escalier_interieur':

							$("#H1notation").html("porte_escalier_interieur ")
							$("#Pnotation").html("Vue de la porte interieure et de l'escalier")
							break;

						case 'cote1':

							$("#H1notation").html("cote1")
							$("#Pnotation").html("Vue de l'entree pour acceder au studio")

							break;

						case 'cote2':

							$("#H1notation").html("cote2");
							$("#Pnotation").html("Vue de l'entree principale du studio`\n` comme vous pouvez le voir il y a de la vegetation !!");

							break;

						case 'map':

							$("#H1notation").html("map")
							$("#Pnotation").html("vue sur la carte ou se trouve le studio Christianerie")

							break;

						case 'routeA':

							$("#H1notation").html("routeA")
							$("#Pnotation").html("pour aller au centre d'hossegor, FACILE !!...suivez le guide... Prenez le chemin pietonie qui passe devant la maisone")

							break;

						case 'routeB':
							$("#H1notation").html("routeB")
							$("#Pnotation").html("...puis allez sur votre gauche")

							break;

						case 'routeC':

							$("#H1notation").html("routeB")
							$("#Pnotation").html("...et prendre le premier chemin sur votre droite")

							break;

						case 'routeC1':

							$("#H1notation").html("routeC1")
							$("#Pnotation").html("...autre image du chemin")

							break;

						case 'chambre':

							$("#H1notation").html("chambre")
							$("#Pnotation").html("Deux lits (double et simple) bien douilles")

							break;

						case 'cuisine':

							$("#H1notation").html("cuisine")
							$("#Pnotation").html("Jolie petite cuisine pour Monsieur")

							break;

						case 'terrasse':

							$("#H1notation").html("terrasse")
							$("#Pnotation").html("Terrase sympatique pour se relaxer, comme vous pouvez le noter elle este bien isolée")

							break;

						}

					});


/* FIN studio */


$("#myCarousel_maison")
			.bind(
					'slid.bs.carousel',
					function(e) {
						// do something
						var src = $('.active').find('img').attr('id'); // gives
						// you
						// the
						// id

						switch (src) {

						case 'porte_escalier_interieur':

							$("#H1notation").html("porte_escalier_interieur ")
							$("#Pnotation").html("Vue de la porte interieure et de l'escalier")
							break;

						case 'cote1':

							$("#H1notation").html("cote1")
							$("#Pnotation").html("Vue de l'entree pour acceder au studio")

							break;

						case 'cote2':

							$("#H1notation").html("cote2");
							$("#Pnotation").html("Vue de l'entree principale du studio`\n` comme vous pouvez le voir il y a de la vegetation !!");

							break;

						case 'map':

							$("#H1notation").html("map")
							$("#Pnotation").html("vue sur la carte ou se trouve le studio Christianerie")

							break;

						case 'routeA':

							$("#H1notation").html("routeA")
							$("#Pnotation").html("pour aller au centre d'hossegor, FACILE !!...suivez le guide... Prenez le chemin pietonie qui passe devant la maisone")

							break;

						case 'routeB':
							$("#H1notation").html("routeB")
							$("#Pnotation").html("...puis allez sur votre gauche")

							break;

						case 'routeC':

							$("#H1notation").html("routeB")
							$("#Pnotation").html("...et prendre le premier chemin sur votre droite")

							break;

						case 'routeC1':

							$("#H1notation").html("routeC1")
							$("#Pnotation").html("...autre image du chemin")

							break;

						case 'chambre':

							$("#H1notation").html("chambre")
							$("#Pnotation").html("Deux lits (double et simple) bien douilles")

							break;

						case 'cuisine':

							$("#H1notation").html("cuisine")
							$("#Pnotation").html("Jolie petite cuisine pour Monsieur")

							break;

						case 'terrasse':

							$("#H1notation").html("terrasse")
							$("#Pnotation").html("Terrase sympatique pour se relaxer, comme vous pouvez le noter elle este bien isolée")

							break;

						}

					});
					

	
	
	
})
