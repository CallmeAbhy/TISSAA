
  
  var myScrollFunc = function() {
  var myID = document.getElementById("main-right-fixed-navbar");

  // var myID = document.getElementById("n__kHGezmjRSsinyHaK1WLMOw");
  // var myID = document.getElementById("id-right-navbar-text1");
  // var myID = document.getElementById("Image_2");
  // var myID = document.getElementById("id-right-navbar-text2");
  // var myID = document.getElementById("covid-19");
  // var myID = document.getElementById("id-right-navbar-text3");
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  // console.log(isChrome);
    // h = screen.height - 820;
    // h = h / 2
  var y = window.scrollY;
  if (y >= 500 && isChrome == true) {
  	// console.log(screen.height)
  	var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    h = screen.height - 667;
    vh = vh - 667;
    h = vh / 2 ;
    // h = h - 180

    myID.className = "right-fixed-navbar-desktop";
    myID.style.top = h + "px";  	
  }
  else if (y >= 400 && isChrome == false) {
  	// alert(h)
    h = screen.height - 820;
    h = h / 2
    myID.className = "right-fixed-navbar-desktop";
    myID.style.top = h + "px";

  } else {
    myID.className = "right-fixed-navbar"
    myID.style.top = "286px"
  }
};

window.addEventListener("scroll", myScrollFunc);





$(document).ready(function(){


// $( "#next_18" ).trigger("click");
  
  var timer = null;

  function next_18(){
    if ( $("#announcement-text .main-text").css('opacity') == '0'  ||  $("#announcement-text .main-text").css('opacity') == '1'  ){
      $("#announcement-text .main-text").css({ "opacity": "0" , "right": ""});
      $("#announcement-text .active").css({ "opacity": "1" , "right": ""});
      $("#announcement-text .main-text").css({ "opacity": "0" , "left": "100px"});
      $("#announcement-text .active").css({ "opacity": "1" , "left": "0px"});
    }

    var lengh_of_array = $('.main-text').length

    var position = 0

    if (lengh_of_array > 1){

      $('.main-text').each(function(i, obj) {

          if ($(obj).hasClass("active") == true){

            if ((lengh_of_array - 1 )== i){
              position = 0
            }
            else {
              position = i + 1  
            }

            $(this ).animate({ "opacity":"0", "left": "100px" }, 500 );
            $(this).removeClass('active');

          }

      });

      $('.main-text').each(function(i, obj) { 
        if (position == i){
          $(this).addClass('active');
          $(this ).animate({ "opacity":"1" , "left": "0px"}, 500 );

        }
      });

    }
  }
	$( "#next_18" ).click(function() {
    
    next_18()

		// alert(position)

	});

  function callback(){
      // alert("11")
      // $("#next_18" ).trigger('click')
      next_18()  
  }
  
  timer = setInterval( callback ,3000);
  // callback()
  // var timer = null;
  $('.announcement-card').hover(function(ev){

    clearInterval(timer);

  }, function(ev){
    timer = setInterval( callback, 3000);
  });




  function next_18_bs(){


    if ( $("#announcement-text .main-text").css('opacity') == '0'  ||  $("#announcement-text .main-text").css('opacity') == '1'  ){
      $("#announcement-text .main-text").css({ "opacity": "0" , "left": ""});
      $("#announcement-text .active").css({ "opacity": "1" , "left": ""});
      $("#announcement-text .main-text").css({ "opacity": "0" , "right": "100px"});
      $("#announcement-text .active").css({ "opacity": "1" , "right": "0px"});
    }

    var lengh_of_array = $('.main-text').length

    var position = 0
    if (lengh_of_array > 1){
      $('.main-text').each(function(i, obj) {

          if ($(obj).hasClass("active") == true){

            if (0 == i){
              position = lengh_of_array - 1
            }
            else {
              position = i - 1  
            }

            $(this ).animate({ "opacity":"0", "right": "100px" }, 500 );
            $(this).removeClass('active');

          }

      });

      $('.main-text').each(function(i, obj) { 
        if (position == i){
          $(this).addClass('active');
          $(this ).animate({ "opacity":"1" , "right": "0px"}, 500 );

        }
      });
   }
  }



  $( "#next_18_bs" ).click(function() {
    
    next_18_bs()

  });



function next_18_ee(){


    var lengh_of_array = $('.announcement-body').length

    var position = 0

    $('.announcement-body').each(function(i, obj) {

        if ($(obj).hasClass("active") == true){

          if ( 0 == i){
            position = lengh_of_array - 1
          }
          else {
            position = i - 1  
          }

          // $(this ).animate({ "opacity":"0", "padding-right": "100px" }, 500 );
          $(this).removeClass('active');

        }

    });

    $('.announcement-body').each(function(i, obj) { 
      if (position == i){
        $(this).addClass('active');
        // $(this ).animate({ "opacity":"1" , "padding-right": "0px"}, 500 );

      }
    });


}


  $( "#next_18_ee" ).click(function() {

    next_18_ee()

    // alert(position)

  });



function next_18_ed(id_or_class_name){
      var lengh_of_array = $(id_or_class_name).length

    var position = 0

    $(id_or_class_name).each(function(i, obj) {

        if ($(obj).hasClass("active") == true){

          if ((lengh_of_array - 1 ) == i){
            position = 0
          }
          else {
            position = i + 1  
          }

          // $(this ).animate({ "opacity":"0", "margin-left": "100px" }, 500 );
          $(this).removeClass('active');

        }

    });

    $(id_or_class_name).each(function(i, obj) { 
      if (position == i){
        $(this).addClass('active');
        // $(this ).animate({ "opacity":"1" , "margin-left": "0px"}, 500 );

      }
    });
}


  $( "#next_18_ed" ).click(function() {

    next_18_ed('.announcement-body')

    // alert(position)

  });




  $( ".next_18_ed" ).click(function() {

    // var lengh_of_array = $('.events-body').length

    // var position = 0

    // $('.events-body').each(function(i, obj) {

    //     if ($(obj).hasClass("active") == true){

    //       if ((lengh_of_array - 1 ) == i){
    //         position = 0
    //       }
    //       else {
    //         position = i + 1  
    //       }

    //       // $(this ).animate({ "opacity":"0", "margin-left": "100px" }, 500 );
    //       $(this).removeClass('active');

    //     }

    // });

    // $('.events-body').each(function(i, obj) { 
    //   if (position == i){
    //     $(this).addClass('active');
    //     // $(this ).animate({ "opacity":"1" , "margin-left": "0px"}, 500 );

    //   }
    // });

    next_18_ed('.events-body')

    // alert(position)

  });




  $( ".next_18_ee" ).click(function() {


    var lengh_of_array = $('.events-body').length

    var position = 0

    $('.events-body').each(function(i, obj) {

        if ($(obj).hasClass("active") == true){

          if ( 0 == i){
            position = lengh_of_array - 1
          }
          else {
            position = i - 1  
          }

          // $(this ).animate({ "opacity":"0", "padding-right": "100px" }, 500 );
          $(this).removeClass('active');

        }

    });

    $('.events-body').each(function(i, obj) { 
      if (position == i){
        $(this).addClass('active');
        // $(this ).animate({ "opacity":"1" , "padding-right": "0px"}, 500 );

      }
    });

    // alert(position)

  });



  var timer1=null
  function callback1(){
      // alert("11")
      // $("#next_18_ed" ).trigger('click')  
      next_18_ed('.announcement-body')
  }
  
  timer1 = setInterval( callback1 ,3000);
  // callback()
  // var timer = null;
  $('.announcement-body').hover(function(ev){

    clearInterval(timer1);

  }, function(ev){
    timer1 = setInterval( callback1, 3000);
  });
  



  var timer2=null
  function callback2(){
      // alert("11")
      // $(".next_18_ed" ).trigger('click')
      next_18_ed('.events-body')  
  }
  
  timer2 = setInterval( callback2 ,3000);
  // callback()
  // var timer = null;
  $('.events-body').hover(function(ev){

    clearInterval(timer2);

  }, function(ev){
    timer2 = setInterval( callback2, 3000);
  });
  


  jQuery.ajax({
    url:'/ct-tender-count/',
    type:'POST',
    success: function (response) {
      if(response.success == "true") {
        if (response.tender_count) {
          var tender_count = response.tender_count;
          var counter_tender = "<span class='nt-count-notification-badge'><span style='display: block;line-height: 7px;'>"+tender_count+"</span></span>";

          jQuery('.menus .nav .nav-item:nth-last-child(4)  > a').append(counter_tender);
          counter_tender = "<span class='nt-count-notification-badge-for-mobile'><span style='display: block;line-height: 7px;'>"+tender_count+"</span></span>";
          jQuery('#id_dropdown_menu li:nth-last-child(3)  > a').append(counter_tender);
          
          // jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').css('position', 'relative');

          // jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').find('a').append(counter_tender);

          // jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').find('.nt-count-notification-badge').css('left', '60px');
        }
      }
    }
  });

  jQuery.ajax({
    url:'/ct-acad-count/',
    type:'POST',
    success: function (response) {
      if(response.success == "true") {
        if (response.acad_count) {
          var acad_count = response.acad_count;
          var counter_acad = "<span class='nt-count-notification-badge'><span style='display: block;line-height: 7px;'>"+acad_count+"</span></span>";
          jQuery('.menus .nav .nav-item:nth-last-child(5)  > a').append(counter_acad);
          counter_acad = "<span class='nt-count-notification-badge-for-mobile-workwithus'><span style='display: block;line-height: 7px;'>"+acad_count+"</span></span>";
          jQuery('#id_dropdown_menu li:nth-last-child(4)  > a').append(counter_acad);
          // jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').prev('li').css('position', 'relative');
          // jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').prev('li').find('a').append(counter_acad);
          // jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').prev('li').find('a .nt-count-notification-badge').css('left', '60px');

        }
      }
    }
  });

  $('#carouselExampleCaptions').carousel({
    interval: 2000
});

});
