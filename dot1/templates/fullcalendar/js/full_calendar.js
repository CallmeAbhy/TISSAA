jQuery(function() {
    jQuery.ajax({
      url:'/calendar-info/',
      type:'POST',
      success: function (response) {
        if(response.success == "true") {
          event_info(response);

        }
      }
    });
  function event_info(event_data) {
    jQuery('#calendar').fullCalendar({
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,listYear,agendaWeek,agendaDay',
        },
        eventSources: [
            {
              events: event_data.event_info,
              color: 'white',
              textColor: 'white!important',
              backgroundColor: '#f68c35!important'
            },
            {
              events: event_data.announce_info,
              color: '#d1ece3',
              textColor: '#00482e!important',
              backgroundColor: '#d1ece3!important'
            }

        ],
        eventClick: function(event) {
          $('#modalTitle').html(event.title);
          var event_start_time = (event.start) ? formatDate(new Date(event.start)) : '';
          var event_end_time = (event.end) ? formatDate(new Date(event.end)) : formatDate(new Date(event.start));

          var event_time = '<p><span style="color: #179e60;">Start:</span> '+event_start_time+', <span style="color: #179e60;">End:</span> '+event_end_time+' </p>';

          if(event.place) {
            var event_place = '<p><span style="color: #179e60;">Place:</span>'+event.place+'</p>';
          } else {
            var event_place = '';
          }

          if(event.type == 1 || event.type) {
              $('#modalContent').html(event_time + event_place + event.description);
          } else {
              $('#modalContent').html(event.description);
          }
          $('#modalUrl').attr("href",event.dataurl);
          $('#fullCalModal').modal();
        },
        eventAfterAllRender: function(view) {
           makeTodayButtonActive();
       }
    });
    function makeTodayButtonActive() {
       $('#calendar button.fc-today-button').removeClass('fc-state-disabled').prop('disabled', false);
   }
  }


    function formatDate(date) {
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

  });
