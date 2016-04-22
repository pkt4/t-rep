
/*Show div id="#one-info" Hide all its siblings (i.e. the 2nd and the 3rd)*/
$("#one-info").show().siblings('.timeline-content').hide();

/*When page loads, make the 1st toggler, active by default*/
$('.dot.toggler:nth-child(1)').find('.step-title a').addClass('active');





/* First step */
$('.dot.toggler:nth-child(1)').click(function(){
  console.log ("In Timeline js step 1");
  var $this = $(this);
  
  /*Remove class "active" from the siblings' links (a) and add class "active" on this element's link (a)*/
  $this.siblings().find('.step-title a').removeClass('active');  
  $this.find('.step-title a').addClass('active');


  /*Animate timeline line*/
  $('.inside').animate({
    'width' : '0'
  }, 500);
  
  /*Remove class "active" from the siblings' links (a) and add class "active" on this element's link (a)*/
  $("#" + $(this).attr("id") + "-info").show().siblings('.timeline-content').hide();

});

/* Second step - similarly as above */
$('.dot.toggler:nth-child(2)').click(function(){
  console.log ("In Timeline js step 2");
  var $this = $(this);
  $this.find('.step-title a').addClass('active');
  $this.siblings().find('.step-title a').removeClass('active');

  $('.inside').animate({
    'width' : '48%'
  }, 500);

  $("#" + $(this).attr("id") + "-info").show().siblings('.timeline-content').hide();

});

/* Third step - similarly as above */
$('.dot.toggler:nth-child(3)').click(function(){
  console.log ("In Timeline js step 3");
  var $this = $(this);
  $this.find('.step-title a').addClass('active');
  $this.siblings().find('.step-title a').removeClass('active');

  $('.inside').animate({
    'width' : '98%'
  }, 500);

  $("#" + $(this).attr("id") + "-info").show().siblings('.timeline-content').hide();

});




