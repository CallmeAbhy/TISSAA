/*
 * File Name : main.js
 * Description: Global jQuery file
 * Author: NetTantra Technologies
 * Author URI: http://www.nettantra.com
 */



jQuery(function() {


jQuery('#tiss-carousel .item').on('click', function() {
    var $data_url = jQuery(this).data('url');
    var $data_target = jQuery(this).data('target');
    var $data_target = ($data_target) ? $data_target : '_self';
    if($data_url) {
	window.open($data_url, $data_target);
    }
});


    
    jQuery('#tiss-news-carousel').carousel({
        interval: false
    });
    // show subnav on DOM ready
    jQuery('.tiss-dropdown.active').find('.tiss-custom-subnav').addClass('tiss-subnav-show');

    if(jQuery(window).outerWidth() >= 768) {
        // navigate to first menu item if parent not set
        jQuery('body').on('click', '.tiss-dropdown', function() {
            var $self = jQuery(this);
            var firstElelink = $self.find('.tiss-custom-subnav li:first a').attr('href');
            if (!$self.hasClass('active')) {
                $self.find('.tiss-custom-subnav').hide();
                jQuery(location).attr('href', firstElelink);
            }
        });
    }

    // // Toggle search box
    // jQuery('form#tiss-searchform button#tiss-searchsubmit').click(function(e) {
    //     if (!jQuery('input#tiss-searchbox').is(':visible')) {
    //         jQuery('form#tiss-searchform').find('input#tiss-searchbox').show();
    //         if (jQuery(window).outerWidth() < 768) {
    //             jQuery('.tiss-responsive-view').css('visibility', 'hidden');
    //         }
    //         return false;
    //     } else if (jQuery('input#tiss-searchbox').is(':visible') && jQuery.trim(jQuery('input#tiss-searchbox').val()) == "") {
    //         jQuery('input#tiss-searchbox').hide();
    //         jQuery('input#tiss-searchbox').val('');
    //         if (jQuery(window).outerWidth() < 768) {
    //             jQuery('.tiss-responsive-view').css('visibility', 'visible');;
    //         }
    //         return false;
    //     }
    // });
    // Remove hide class from Menu Glyphicon for responsive screen
    if (jQuery(window).outerWidth() <= 752) {
        jQuery('.tiss-custom-subnav').removeClass('tiss-subnav-show');
        jQuery('.tiss-custom-main-nav .tiss-dropdown').each(function() {
            var $obj = jQuery(this);
            if ($obj.find('.tiss-custom-subnav').length > 0)
                $obj.find('.glyphicon-menu-down').removeClass('hide');
        });

        jQuery('body').on('click', '.tiss-dropdown', function() {
            var $self = jQuery(this);
            jQuery('.tiss-dropdown').find('.glyphicon').removeClass('glyphicon-menu-up');
            if ($self.find('.tiss-custom-subnav').length > 0 && $self.find('.tiss-custom-subnav').is(':hidden')) {
                $self.find('.glyphicon:first').addClass('glyphicon-menu-up');
            } else {
                $self.find('.glyphicon:first').removeClass('glyphicon-menu-up');
            }
        });
        jQuery('body').on('click', '.navbar-toggle', function() {
            jQuery('.tiss-dropdown').find('.glyphicon:first').removeClass('glyphicon-menu-up');
        });

        // // Toggling tabs
        // jQuery('.tiss-custom-nav-tabs li:not(.active)').slideUp('fast');
        // jQuery('.tiss-custom-nav-tabs li.active').addClass('tiss-active').find('i.glyphicon').removeClass('hide');
        // jQuery('.tiss-custom-nav-tabs li').on('click', function() {
        //     var $self = jQuery(this);
        //     var exceptActiveliEle = jQuery('.tiss-custom-nav-tabs li:not(.tiss-active)');
        //     var liEle = jQuery('.tiss-custom-nav-tabs li');
        //     if ($self.hasClass('tiss-active')) {
        //         exceptActiveliEle.slideToggle('slow');
        //     } else {
        //         liEle.removeClass('tiss-active');
        //         $self.addClass('tiss-active');
        //         jQuery('.tiss-custom-nav-tabs li:not(.tiss-active)').slideUp('slow');
        //         liEle.find('i.glyphicon').addClass('hide');
        //         $self.find('i.glyphicon').removeClass('hide');
        //     }
	//     // jQuery('.tiss-custom-nav-tabs li:first').show();
	//     // jQuery('.tiss-custom-nav-tabs li:first').find('i.glyphicon').removeClass('hide');
        //     $self.toggleClass('tiss-no-bg');
        // });



	// Toggling tabs
	jQuery('.tiss-custom-nav-tabs li:not(.active)').slideUp('fast');
	jQuery('.tiss-toogler li.toogler').find('i.glyphicon').removeClass('hide');
	// jQuery('.tiss-custom-nav-tabs li.active').addClass('tiss-active').find('i.glyphicon').removeClass('hide');
	jQuery('.tiss-custom-nav-tabs li').on('click', function() {
	    var $self = jQuery(this);
	    var exceptActiveliEle = jQuery('.tiss-custom-nav-tabs li:not(.tiss-active)');
	    var liEle = jQuery('.tiss-custom-nav-tabs li');
	    if ($self.hasClass('tiss-active')) {
		//  exceptActiveliEle.slideToggle('slow');
	    } else {
		liEle.removeClass('tiss-active');
		$self.addClass('tiss-active');
		jQuery('.tiss-custom-nav-tabs li:not(.tiss-active)').slideUp('slow');
		liEle.find('i.glyphicon').addClass('hide');
		$self.find('i.glyphicon').removeClass('hide');
	    }
	    $self.toggleClass('tiss-no-bg');
	});
	jQuery('.tiss-toogler li.toogler').on('click', function() {
	    jQuery('.tiss-custom-nav-tabs li:not(".tiss-active, .active")').slideToggle('slow');
	});

        // Toggle search box
        jQuery('form#tiss-searchform button#tiss-searchsubmit').click(function(e) {
            if (!jQuery('input#tiss-searchbox').is(':visible')) {
                jQuery('form#tiss-searchform').find('input#tiss-searchbox').show();
                if (jQuery(window).outerWidth() < 768) {
                    jQuery('.tiss-responsive-view').css('visibility', 'hidden');
                }
                return false;
            } else if (jQuery('input#tiss-searchbox').is(':visible') && jQuery.trim(jQuery('input#tiss-searchbox').val()) == "") {
                jQuery('input#tiss-searchbox').hide();
                jQuery('input#tiss-searchbox').val('');
                if (jQuery(window).outerWidth() < 768) {
                    jQuery('.tiss-responsive-view').css('visibility', 'visible');;
                }
                return false;
            }
        });
    }

    if(jQuery(window).outerWidth() <= 991) {
        toggleFooterDropdown();
        jQuery(window).resize(function() {
            toggleFooterDropdown();
        });
        jQuery('.tiss-footer-top h5').on('click', function() {
            var $obj = jQuery(this);
            $obj.next('.tiss-footer-dropdown').slideToggle('600', function() {
                $obj.find('.glyphicon-menu-down').toggleClass('rotate-arrow');
            });
        });
    }

    // Truncating text using jQuery dotdotdot
    jQuery(".tiss-truncated, .tiss-widget-title").dotdotdot({
        wrap: 'letter'
    });

    // jQuery on page scroll event
    if (jQuery('.tiss-hidden-widgets1').length > 0) {
        var lastScrollTop = 0;
        var stickyTopDistance = 160;
        jQuery(window).scroll(function(event) {
            var st = jQuery(this).scrollTop();
            if (st > lastScrollTop) {
                jQuery('.tiss-hidden-widgets').removeClass('hide');
                if (jQuery('.tiss-hidden-widget-contents').is(':visible') && jQuery('.tiss-widget-open').length == 0)
                    jQuery('.tiss-hidden-widget-contents').slideUp('slow');
            }
            if (!st) {
                if (jQuery('.tiss-hidden-widget-contents').is(':hidden'))
                    jQuery('.tiss-hidden-widget-contents').slideDown('slow');
                jQuery('.tiss-hidden-widget-contents').removeClass('tiss-widget-open');
                jQuery('.tiss-hidden-widgets').addClass('hide');
            }
            if (st > stickyTopDistance) {
                jQuery('.tiss-hidden-widgets').parent('.tiss-widget-container').addClass('tiss-sticky-widget');
                jQuery('.tiss-hidden-widget-contents').addClass('tiss-sticky-widget-items');
                jQuery('.tiss-sticky-widget').next('.tiss-widget-container').addClass('tiss-sticky-widget-contents');
            } else {
                jQuery('.tiss-sticky-widget').next('.tiss-widget-container').removeClass('tiss-sticky-widget-contents');
                jQuery('.tiss-hidden-widgets').parent('.tiss-widget-container').removeClass('tiss-sticky-widget');
                jQuery('.tiss-hidden-widget-contents').removeClass('tiss-sticky-widget-items');
            }
            lastScrollTop = st;
        });
    }

    // jQuery toggle sticky widget contents
    jQuery('body').on('click', '.tiss-hidden-widgets', function() {
        jQuery.when(jQuery('.tiss-hidden-widget-contents').toggleClass('tiss-widget-open').slideToggle('slow')).then(function() {
            jQuery('body').toggleClass('tiss-no-scroll');
            jQuery('.tiss-widget-open').css({
                height: (jQuery(window).outerHeight() - 120) + 'px'
            });
        });
    });

    // jQuery smooth scrolling
    jQuery('.tiss-schools a1').on('click', function() {
        var $self = jQuery(this);
        var eleId = $self.attr('href');
        jQuery('body').removeClass('tiss-no-scroll');
        jQuery.when(jQuery('.tiss-hidden-widget-contents').slideUp('slow').removeClass('tiss-widget-open')).then(function() {
            var stop = (jQuery(eleId).offset().top - 80);
            var delay = 1500;
            jQuery('html,body').animate({
                scrollTop: stop
            }, delay);
        })
        return false;
    });

    // Bootstrap Content vertical scroller
    if(jQuery(".tiss-content-scroller").length > 0) {
        jQuery(".tiss-content-scroller").bootstrapNews({
            newsPerPage: 4,
            autoplay: true,
            pauseOnHover: true,
            navigation: false,
            direction: 'down',
            animationSpeed: 'normal',
            newsTickerInterval: 2500,
        });
    }

    jQuery('.tiss-content-scroller-single').each(function() {
        var $self = jQuery(this);
        if($self.find('.tiss-content-scroller-contents').length > 2) {
            $self.bootstrapNews({
                newsPerPage: 2,
                autoplay: true,
                pauseOnHover: true,
                navigation: false,
                direction: 'down',
                animationSpeed: 'normal',
                newsTickerInterval: 2500,
            });
        }
    });

    if(jQuery(".tiss-home-upcoming-events-scroller").length > 0) {
        jQuery('.tiss-home-upcoming-events-scroller').each(function() {
            var newsPerPage = (jQuery(window).outerWidth() < 768) ? 2 : 3;
            var $self = jQuery(this);
            if($self.find('.tiss-home-events-scroller-contents').length > newsPerPage) {
                $self.bootstrapNews({
                    newsPerPage: newsPerPage,
                    autoplay: true,
                    pauseOnHover: true,
                    navigation: false,
                    direction: 'down',
                    animationSpeed: 'normal',
                    newsTickerInterval: 2500,
                });
            }
        });
    }

    if(jQuery(".tiss-fap-upcoming-events-scroller").length > 0) {
        jQuery('.tiss-fap-upcoming-events-scroller').each(function() {
            var $self = jQuery(this);
            if($self.find('.tiss-fap-events-scroller-contents').length > 1) {
                $self.bootstrapNews({
                    newsPerPage: 1,
                    autoplay: true,
                    pauseOnHover: true,
                    navigation: false,
                    direction: 'down',
                    animationSpeed: 'normal',
                    newsTickerInterval: 2500,
                });
            }
        });
    }

    // Individual Campuse page on drop down change
    if(jQuery('#tiss-campuses').length > 0) {
        jQuery('body').on('change', '#tiss-campuses', function() {
            var $obj = jQuery(this);
            var campusSelected = $obj.val();
            location.href="campuses-"+campusSelected+"-campus.html";
        })
    }

    // TISS event calendar
    if(jQuery('.tiss-event-calendar').length > 0) {
        jQuery('.tiss-event-calendar').datepicker({
            prevText: "",
            nextText: "",
            onChangeMonthYear: function() {
                addIcons();
            },
            onSelect: function() {
                addIcons();
            }
        });
        addIcons();
    }

    function addIcons() {
        setTimeout(function() {
            jQuery('.tiss-event-calendar').find('.ui-datepicker-prev span').addClass('glyphicon glyphicon-triangle-left');
            jQuery('.tiss-event-calendar').find('.ui-datepicker-next span').addClass('glyphicon glyphicon-triangle-right');
        }, 1);
    }
    function toggleFooterDropdown() {
        // show/hide footer dropdown icon
        if(jQuery(window).outerWidth() <= 991) {
            jQuery('.tiss-footer-top').find('.glyphicon-menu-down').removeClass('hide');
            jQuery('.tiss-footer-top .tiss-footer-dropdown').each(function(){
                jQuery(this).slideUp('fast');
            });
        } else {
            jQuery('.tiss-footer-top').find('.glyphicon-menu-down').addClass('hide');
            jQuery('.tiss-footer-top .tiss-footer-dropdown').each(function(){
                jQuery(this).slideDown('fast');
            });
        }
    }
});

jQuery(function() {
    jQuery('body').on('click', '.tiss-project-search', function() {
	jQuery('.tiss-project-filters-wrapper').slideToggle();
    });
    jQuery('body').on('click', '.pagination a', function() {
      jQuery('.pagination a').removeClass('active');
	jQuery(this).addClass('active');
    });
    jQuery(window).on('resize load', function() {
	if(jQuery(document).width() < 768) {
	    jQuery('.tiss-dropdown').each(function(){
		var $self = jQuery(this);
		if($self.find('.tiss-custom-subnav').length > 0 && !$self.find('a:first').attr('data-toggle'))
		    $self.find('a:first').attr('data-toggle','dropdown');
	    });
	} else {
	    jQuery('.tiss-custom-main-nav').find('a:first').removeAttr('data-toggle');
	}
    });


      if (window.outerWidth > 767 && window.outerWidth < 991) {
          jQuery('html body .overlay .header-wrapper .primary-nav form#tiss-searchform input#tiss-searchbox').css({'display':'none'});

          jQuery('body .overlay .header-wrapper .primary-nav form#tiss-searchform #tiss-searchsubmit').attr('type', 'button');
          jQuery('body').on('click', 'button#tiss-searchsubmit', function(e) {
               e.stopPropagation();
              jQuery('form#tiss-searchform input#tiss-searchbox').slideToggle(200);
          });
          jQuery('form#tiss-searchform input#tiss-searchbox').click(function(e){
             e.stopPropagation();
          });
          jQuery('body').click(function(e){
             jQuery('form#tiss-searchform input#tiss-searchbox').fadeOut();
          });

      } else {
        jQuery('body .overlay .header-wrapper .primary-nav form#tiss-searchform #tiss-searchsubmit').attr('type', 'submit');
        jQuery('body .overlay .header-wrapper .primary-nav form#tiss-searchform input#tiss-searchbox').css({'display':'inline-block'});
      }

    jQuery('body #tiss-navbar-collapse .tiss-custom-btn').text('');
    jQuery('body #tiss-navbar-collapse .tiss-custom-btn').html('<i class="fa fa-file-pdf-o"</i>');
    jQuery('body #tiss-navbar-collapse .tiss-custom-btn').css({
      'border': 'none',
      // 'margin-top': '5px'
    });
    jQuery('body #tiss-navbar-collapse .tiss-custom-btn .fa').css({
      'font-size': '16px',
    });

});



/* For Tender notification on Menu section */
jQuery( window ).load(function() {

  // var rss_renders = '<span data-href="/rss-tenders/"  title="Tenders RSS Feed" class="nt-rss-top-link"><i class="fa fa-rss-square"></i></span>';
  // if(jQuery('.primary-nav .tiss-custom-nav:last li:last').text() == 'Tenders') {
  //   jQuery('.primary-nav .tiss-custom-nav:last li:last').prepend(rss_renders);
  // }
  // if(jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last li:last').prev('li').text() == 'Tenders') {
  //   jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last li:last').prev('li').prepend(rss_renders);
  // }
  // // jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').prepend(rss_renders);

  // var rss_careers = '<span data-href="/rss-careers/" title="Careers RSS Feed" class="nt-rss-top-link"><i class="fa fa-rss-square"></i></span>';
  // if(jQuery('.primary-nav .tiss-custom-nav:last li:nth-child(2)').text() == 'Careers') {
  //   jQuery('.primary-nav .tiss-custom-nav:last li:nth-child(2)').prepend(rss_careers);
  // }

  // if(jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last li:last').prev('li').prev('li').text() == 'Careers') {
  //   jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last li:last').prev('li').prev('li').prepend(rss_careers);
  // }
  // // jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').prev('li').prepend(rss_careers);

  // var rss_admissions = '<span data-href="/rss-admissions/" title="Admissions RSS Feed" class="nt-rss-top-link admission-rss-link"><i class="fa fa-rss-square"></i></span>';
  // jQuery('.secondary-nav .tiss-custom-main-nav:first li:first').prepend(rss_admissions);


    var rss_renders = '<span data-href="/rss-tenders/"  title="Tenders RSS Feed" class="nt-rss-top-link"><i class="fa fa-rss-square"></i></span>';
    if(jQuery('.primary-nav .tiss-custom-nav:last li:last').text() == 'Tenders') {
	jQuery('.primary-nav .tiss-custom-nav:last li:last').prepend(rss_renders);
    }

    var rss_careers = '<span data-href="/rss-careers/" title="Careers RSS Feed" class="nt-rss-top-link"><i class="fa fa-rss-square"></i></span>';
    if(jQuery('.primary-nav .tiss-custom-nav:last li:nth-child(2)').text() == 'Careers') {
	jQuery('.primary-nav .tiss-custom-nav:last li:nth-child(2)').prepend(rss_careers);
    }
    jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last li').each(function() {
	console.log(jQuery(this).find('a').text());
	if(jQuery(this).find('a').text() == 'Tenders') {
	    jQuery(this).prepend(rss_renders);
	}
	if(jQuery(this).find('a').text() == 'Careers') {
	    jQuery(this).prepend(rss_careers);
	}
    });
    var rss_admissions = '<span data-href="/rss-admissions/" title="Admissions RSS Feed" class="nt-rss-top-link admission-rss-link"><i class="fa fa-rss-square"></i></span>';
    jQuery('.secondary-nav .tiss-custom-main-nav:first li:first').prepend(rss_admissions);

  if(jQuery('.nt-rss-top-link').length > 0 ) {
    jQuery('.nt-rss-top-link').on('click', function() {
       var rss_url = jQuery(this).data('href');
       window.open(rss_url,'_blank');
    });
  }
  var isChrome = !!window.chrome && !!window.chrome.webstore;
  if(isChrome) {
    jQuery('.nt-rss-top-link, .nt-rss-news-link, .nt-rss-events-link, .nt-rss-announcements-link').attr('title', 'Please install Chrome extension to add RSS Feed Live Bookmarks.');
  }

  jQuery.ajax({
    url:'/ct-tender-count/',
    type:'POST',
    success: function (response) {
      if(response.success == "true") {
        if (response.tender_count) {
          var tender_count = response.tender_count;
          var counter_tender = "<span class='nt-count-notification-badge'><span style='display: block;line-height: 7px;'>"+tender_count+"</span></span>";

          jQuery('.primary-nav .tiss-custom-nav:last li:last > a').append(counter_tender);
          jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').css('position', 'relative');

          jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').find('a').append(counter_tender);

          jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').find('.nt-count-notification-badge').css('left', '60px');
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
          jQuery('.primary-nav .tiss-custom-nav:last li:nth-child(2) > a').append(counter_acad);
          jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').prev('li').css('position', 'relative');
          jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').prev('li').find('a').append(counter_acad);
          jQuery('#tiss-navbar-collapse .tiss-custom-main-nav:last .tiss-custom-subnav li:last').prev('li').prev('li').find('a .nt-count-notification-badge').css('left', '60px');

        }
      }
    }
  });

  jQuery.ajax({
      url:'/admissions-count/',
      type:'POST',
      success: function (response) {
        if(response.success == "true") {
          if (response.today_admission_count) {
            var admission_count = response.today_admission_count;
            var counter_tender = "<span class='nt-count-notification-badge'><span style='display: block;line-height: 7px;'>"+admission_count+"</span></span>";
            jQuery('.secondary-nav .tiss-custom-main-nav:first li:first > a').append(counter_tender);
          }
        }
      }
    });

});

jQuery(window).on("load resize", function(e) {

  if(jQuery(window).outerWidth() < 768) {
    if(jQuery('body .overlay .tiss-content-wrapper .tiss-custom-widget-box .tiss-schools .tiss-schools-title span').length) {
      var school_box_height =  jQuery('body .overlay .tiss-content-wrapper .tiss-custom-widget-box .tiss-schools .tiss-schools-title').outerHeight();
      var school_box_title_height =  jQuery('body .overlay .tiss-content-wrapper .tiss-custom-widget-box .tiss-schools .tiss-schools-title span').outerHeight();
      var scholl_box_title_padding = ((school_box_height - school_box_title_height) / 2) - 20;
      console.log('Padding-top: '+ scholl_box_title_padding);
      jQuery('body .overlay .tiss-content-wrapper .tiss-custom-widget-box .tiss-schools .tiss-schools-title span').css({
        'padding-top' : scholl_box_title_padding+'px',
        'display': 'block',
        'text-align': 'center'
      });
    }
  } else {
    jQuery('body .overlay .tiss-content-wrapper .tiss-custom-widget-box .tiss-schools .tiss-schools-title span').css({
      'padding-top' : 'unset',
      'display': 'block',
      'text-align': 'left'
    });
  }

  if (window.outerWidth > 767 && window.outerWidth < 997) {
    jQuery('body .overlay .header-wrapper .primary-nav form#tiss-searchform input#tiss-searchbox').css({'display':'none'});
  } else {

  }

});

jQuery(window).on("load", function(e) {
    if (window.outerWidth < 767) {
	jQuery('body .overlay .header-wrapper .primary-nav form#tiss-searchform input#tiss-searchbox').css({'display':'none'});
    }

});

