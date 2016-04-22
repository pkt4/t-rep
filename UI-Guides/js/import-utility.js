
 // ---- Toggle timeline steps and FAQs by url anchor---------------------------------------------------------------------------------------------------------------


//**************************************** IMPORTANT ****************************************
//resourcepath variable value NEEDS TO BE CHANGED FOR DIFFERENT QUICK GUIDE MAIN SECTIONS e.g. Advertise UI, API Offers, Adserving 



var resourcepath = " "; // Path of documentation file resource

//**************************************** IMPORTANT ****************************************



var myWidth     = 0, myHeight = 0; //Window width and height
var qnaheight   = 0; //Question and answer height
var ancposition = 0; //Anc position 
var stepnumber  = 1;

var total_hash = window.location.hash;
var hash_parts = location.hash.split('&', 2); //2 - limit, may be changed if more than two arguments.
var step       = hash_parts[0];               // Tab number part of url.  Array starts at 0 for 1st element.
var anc        = hash_parts[1];               // Anchor name including "#" e.g #app-creation

var ancId 		   = " "			  		  // Anchor name widthout "#" e.g app-creation)
var defaultFirst_id = " "; 					  // Id of first dd element of the timeline, used to load the first dd element of a step by default, when there is not a valid anchor (anc)
var clickedEl_id   = " ";					  // Id of the dd element that was clicked, used to load the correspondant content of the documentation
var doc_prefix     = "D-";					  // Prefix used in documentation resource file. Needs to be changed if prefix id changes in documentation id names e.g. now it is D-app-creation, that's why it's value is D-
var cont    = " ";			  

// Get started variables
var hoveredCircle = "apps-circle";
var hoveredCircleTxt = "apps-box";
var activeBg = "#e88d8f";
var activeDescr = "#apps-description";

 //Get Started Initial Settings (on page load)
$('#' + hoveredCircle + '.ch-item .ch-info').addClass("active-circle");
$('#' + hoveredCircle).css("background",activeBg);  // set correspondant active background color for the hovered circle
$('#circle-description ' + activeDescr).siblings().hide();
$('#circle-description ' + activeDescr).show();




console.log("step is: " + step + " anc is: " + anc + " ancId is : " + ancId);

function findResourcepath() {

	if ( $( ".container.rsc-advertise" ).length ) { resourcepath = "../resources/advertise.html"; console.log("I AM IN ADVERTISER");}
	if ( $( ".container.rsc-adserving" ).length ) { resourcepath = "../resources/monetize-adserving.html"; console.log("I AM IN ADSERVING");}
	if ( $( ".container.rsc-apioffers" ).length ) { resourcepath = "../resources/monetize-apioffers.html"; console.log("I AM IN MONETIZE API OFFERS");}

}

findResourcepath(); //Find the right path of documentation file resource

function importhtml(cont) {
	var contId = '#'+ cont +'-txt';
    var src = ' #' + doc_prefix + cont;
    console.log("src id is: "+src);
    $(contId).load(resourcepath + src, function() {  //Load text content from resourcepath resource file
       $(contId + " :header:first").css("display","none");  //Hide first header dom element in div with id = contId
       prettyPrint();
       linkToTimelineStep();
    });
}

/* In case of an internal link to a timeline step, this function triggers the right content and effects */
function linkToTimelineStep() {
	$('a').click(function(){
		  
	  var $this = $(this);
	  var ahref = $this.attr('href');

	  /* check if the link href value ends to "-info" and if yes, trigger the right timeline step */
	  if (ahref.match("-info$")) { 
		    console.log ("LINK CONTAINS -info!!!");
		    $(ahref).show().siblings('.timeline-content').hide();

		    var ahrefStep = ahref.replace("-info","").replace("#","");
		    
		    $('.dot.toggler').each(function() {
			   if ( $(this).attr("id") === ahrefStep) { 
			    	$(this).find('.step-title a').addClass('active');
  					$(this).siblings().find('.step-title a').removeClass('active');
		    	}
			});
	  }
	});
}

 
 /* -----------GET STARTED HOVER CIRCLES (effects and import content from documentation) Start --------------- */

$('.ch-item').hover(function() {

	hoveredCircle = $(this).attr("id");
	/*console.log("Hovered Circle is : " + hoveredCircle);*/

	/*Set variables values activeBg, activeDescr and hoveredCircleTxt depending on hovered circle, 
	in order to be used for styling active circle and importing the orrespondant text from documentation */
	if(hoveredCircle === "apps-circle") { activeBg = "#e88d8f"; activeDescr = "#apps-description"; hoveredCircleTxt = "apps-box"}
	if(hoveredCircle === "campaigns-circle") { activeBg = "#e8d17e"; activeDescr = "#campaigns-description"; hoveredCircleTxt = "campaigns-box"}
	if(hoveredCircle === "billing-circle") { activeBg = "#9ace8d"; activeDescr = "#billing-description"; hoveredCircleTxt = "billing-box"}
	if(hoveredCircle === "reports-circle") { activeBg = "#7e95e8"; activeDescr = "#reports-description"; hoveredCircleTxt = "reports-box"}
	if(hoveredCircle === "adzones-circle") { activeBg = "#e8d17e"; activeDescr = "#adzones-description"; hoveredCircleTxt = "adzones-box"}
	if(hoveredCircle === "alloffers-circle") { activeBg = "#e8d17e"; activeDescr = "#alloffers-description"; hoveredCircleTxt = "all-offers-box"}
	if(hoveredCircle === "myoffers-circle") { activeBg = "#9ace8d"; activeDescr = "#myoffers-description"; hoveredCircleTxt = "my-offers-box"}
	if(hoveredCircle === "apireports-circle") { activeBg = "#7e95e8"; activeDescr = "#apireports-description"; hoveredCircleTxt = "api-reports-box"}



	$('#' + hoveredCircle + '.ch-item .ch-info').addClass("active-circle");
	$('#' + hoveredCircle).css("background",activeBg);  // set correspondant active background color for the hovered circle

	importhtml(hoveredCircleTxt); //import the correspondant text from documentation

	/*var notSel = [];*/
	

	$('.ch-item').not(this).each(function(){      //set gray background color for the rest of the circles (with class = "ch-item")
		 console.log("Other Circles are : " + $(this).attr("id")); //get the rest of the circles (with class = "ch-item") ids

		 /*notSel.push($(this).attr("id")); */ 
         $(this).css("background","#d1d1d1");
         $(this).removeClass("active-circle");

     });
	/*for (var i = 0, len = notSel.length; i < len; i++) {
	  $('#' + notSel[i] + '.ch-item .ch-info').removeClass("active-circle");

	  console.log("NOT SEL in for : " + notSel[i]);
	}*/

	/*console.log("not Sel : " + notSel);*/
	$('#circle-description ' + activeDescr).siblings().hide();
    $('#circle-description ' + activeDescr).show();
});

 /* -----------GET STARTED HOVER CIRCLES (effects and import content from documentation) End --------------- */


 /* ---------TIMELINE FAQ QUESTIONS utilities (effects and import content from documentation) Start---------- */

function windowSize() {
		  
		  if( typeof( window.innerWidth ) == 'number' ) {
		    //Non-IE
		    myWidth = window.innerWidth;
		    myHeight = window.innerHeight;
		  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		    //IE 6+ in 'standards compliant mode'
		    myWidth = document.documentElement.clientWidth;
		    myHeight = document.documentElement.clientHeight;
		  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		    //IE 4 compatible
		    myWidth = document.body.clientWidth;
		    myHeight = document.body.clientHeight;
		  }
		  /*window.alert( 'Width = ' + myWidth + ' Height = ' + myHeight );*/
}

windowSize(); 

function elementHeight($element) {
	var eHeight = $element.height();
	return eHeight;
}

function scrollTo($element){
		    $('html,body').animate({scrollTop: $element.offset().top},'slow');
		}

function timelineDefault($element, stepnumber) { //Go to timeline default behavior (step 1, question 1)
	
	/*Show div id="#one-info" Hide all its siblings (i.e. the 2nd and the 3rd)*/
	$element.show().siblings('.timeline-content').hide();
	
	/*$('.dot.toggler:nth-child(stepnumber)').find('.step-title a').addClass('active');*/

	$element.find('.qset dd:nth-child(n+4)').hide();
	$element.siblings().find('.qset dd:nth-child(n+4)').hide();


	$element.find('.qset dt:nth-child(1) span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	$element.siblings().find('.qset dt:nth-child(1) span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');

	defaultFirst_id = $element.find('.qset dt:nth-child(1)').attr("id");
	console.log("HELLOOOO  "+"#" + defaultFirst_id  + "-info");

	importhtml(defaultFirst_id); //Show documentation content for the default dd element (step 1, question 1) 

}

function scrollIfNeeded(qnaheight, anc) {

	ancposition = $(anc).offset(); //Find anc's vertical position (from top) in the html page
	console.log("Top: " + ancposition.top);

	console.log("elementheight is: " + qnaheight );

	console.log("Windowheight is: " + myHeight );

	console.log("Anc position is: " + ancposition.top );

	if(myHeight < (ancposition.top + qnaheight) ) {
		scrollTo($(anc));
		console.log("Scrolled!!!"  );
	}
}

$(function() {
	//if there is no link anchor
	if(!location.hash) {

		timelineDefault($('#one-info'), 1);
		
	}

	else { //If there is an anchor in the link


		var thereisvalidstep = false;
		var thereisvalidanc = false;



		/*If there is a valid step hash, show this step and hide siblings*/
		if ( (typeof step != 'undefined') && ((step ==="#one-info") || (step ==="#two-info")  || (step ==="#three-info"))  ){
			thereisvalidstep = true;
		}
		if ( (typeof anc != 'undefined') && ($(anc).length) ) {
	  		thereisvalidanc = true;
		}

		if ( !thereisvalidstep) { //If hash is invalid (invalid step), go to timeline default behavior (step 1, question 1)
	  		timelineDefault($('#one-info'), 1);
		}

		// STEP HASH

		/*Depending on the step in the hash, trigger the right timeline animation effect*/
		if(thereisvalidanc) {
			ancId 	=  anc.slice(1);			  // Anchor name widthout "#" e.g app-creation)
		}
		

		if (thereisvalidstep && !thereisvalidanc) {
	  		console.log("there is valid step but not a valid anc");


	  		$(step).show().siblings('.timeline-content').hide();


	      	if (step === "#one-info") {
			      	$(function(){

			      		$('.inside').animate({
						    'width' : '0%'
						  }, 500);

			      		timelineDefault($('#one-info'), 1);

			      		$('.dot.toggler:nth-child(1)').siblings().find('.step-title a').removeClass('active');  
						$('.dot.toggler:nth-child(1)').find('.step-title a').addClass('active');

						
			      	});
			}

			if (step === "#two-info") {
			      	$(function(){

			      		$('.inside').animate({
						    'width' : '48%'
						  }, 500);

			      		timelineDefault($('#two-info'), 2);

			      		$('.dot.toggler:nth-child(2)').siblings().find('.step-title a').removeClass('active');  
						$('.dot.toggler:nth-child(2)').find('.step-title a').addClass('active');


						
			      	});
			}

			if (step === "#three-info") {
			      	$(function(){

			      		$('.inside').animate({
						    'width' : '98%'
						  }, 500);

			      		timelineDefault($('#three-info'), 3);

			      		$('.dot.toggler:nth-child(3)').siblings().find('.step-title a').removeClass('active');  
						$('.dot.toggler:nth-child(3)').find('.step-title a').addClass('active');

						
			      	});
			}
    	}

	    // QUESTION ANCHOR HASH

	    /*If there is a question anc value (e.g.#create-app)*/
	    if ( thereisvalidstep && thereisvalidanc) {
	      	console.log('valid step and valid anc');

	      	console.log("anc is: " + anc);

	      	$(step).show().siblings('.timeline-content').hide();


			    if (step === "#one-info") {

			    	qnaheight = elementHeight($(anc)) + elementHeight($(anc).next()); //Find a qna (question and answer) height

			      	$(function(){

			      		$('.inside').animate({
						    'width' : '0%'
						  }, 500);

			      		$('#two-info .qset dd:nth-child(n+4)').hide();
						$('#three-info .qset dd:nth-child(n+4)').hide();
			      		$('#one-info .qset dd:nth-child(n)').hide();

			      		$('.dot.toggler:nth-child(1)').siblings().find('.step-title a').removeClass('active');  
  						$('.dot.toggler:nth-child(1)').find('.step-title a').addClass('active');

			      		$(anc).next().slideToggle(); // Toggle respective dd of the dt with id = anc
			      		importhtml(ancId); // import question content from documentation resource html file the right text with id=ancId
			      		

						$(anc).find('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
						$(anc).siblings().find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');

						scrollIfNeeded(qnaheight, anc);
					});
			    }

			    if (step === "#two-info") {

			    	qnaheight = elementHeight($(anc)) + elementHeight($(anc).next()); //Find a qna (question and answer) height

			      	$(function(){

			      		$('.inside').animate({
						    'width' : '48%'
						  }, 500);

			      		$('#one-info .qset dd:nth-child(n+4)').hide();
						$('#three-info .qset dd:nth-child(n+4)').hide();
			      		$('#two-info .qset dd:nth-child(n)').hide();

			      		$('.dot.toggler:nth-child(2)').siblings().find('.step-title a').removeClass('active');  
  						$('.dot.toggler:nth-child(2)').find('.step-title a').addClass('active');

					    $(anc).next().slideToggle(); // Toggle respective dd of the dt with id = anc
					    importhtml(ancId); // import question content from documentation resource html file the right text with id=ancId

						$(anc).find('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
						$(anc).siblings().find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
						
						scrollIfNeeded(qnaheight, anc);
					});
			    }

			    if (step === "#three-info") {

			    	qnaheight = elementHeight($(anc)) + elementHeight($(anc).next()); //Find a qna (question and answer) height 

			      	$(function(){

			      		$('.inside').animate({
						    'width' : '98%'
						  }, 500);

			      		$('#one-info .qset dd:nth-child(n+4)').hide();
						$('#two-info .qset dd:nth-child(n+4)').hide();
			      		$('#three-info .qset dd:nth-child(n)').hide();

			      		$('.dot.toggler:nth-child(3)').siblings().find('.step-title a').removeClass('active');  
  						$('.dot.toggler:nth-child(3)').find('.step-title a').addClass('active');

			      		$(anc).next().slideToggle(); // Toggle respective dd of the dt with id = anc
			      		importhtml(ancId); // import question content from documentation resource html file the right text with id=ancId

						scrollIfNeeded(qnaheight, anc);
					});
			    } 	
	    }

	    else {
	     	console.log("Anc is undefined or invalid");
	    }
	}
});

 // ---- FAQs on click---------------------------------------------------------------------------------------------------------------


$('#one-info .qset dt').click(function(){
		
		$('#one-info .qset dd').slideUp();
		$(this).next().slideToggle(); // Toggle dd when the respective dt is clicked
		$(this).find('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		$(this).siblings().find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		clickedEl_id = $(this).attr("id");
		console.log ("hello clicked : " + clickedEl_id);
		importhtml(clickedEl_id); // import clicked question content from documentation resource html file the right text with id=clickedEl_id


}); 


$('#two-info .qset dt').click(function(){ 

		$('#two-info .qset dd').slideUp();
		$(this).next().slideToggle(); // Toggle dd when the respective dt is clicked
		$(this).find('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		$(this).siblings().find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		clickedEl_id = $(this).attr("id");
		console.log ("hello clicked : " + clickedEl_id);
		importhtml(clickedEl_id); // import clicked question content from documentation resource html file the right text with id=clickedEl_id

}); 

$('#three-info .qset dt').click(function(){ 

		$('#three-info .qset dd').slideUp();
		$(this).next().slideToggle(); // Toggle dd when the respective dt is clicked
		$(this).find('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		$(this).siblings().find('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		clickedEl_id = $(this).attr("id");
		console.log ("hello clicked : " + clickedEl_id);
		importhtml(clickedEl_id); // import clicked question content from documentation resource html file the right text with id=clickedEl_id
		
}); 

	
/* ---------TIMELINE FAQ QUESTIONS utilities (effects and import content from documentation) END---------- */


