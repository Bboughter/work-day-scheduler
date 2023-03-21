
var clockElement = document.getElementById("clock");
function updateClock(clock) {
  
  clock.innerHTML = new Date().toLocaleTimeString();
}
setInterval(function () {
  updateClock(clockElement);
}, 1000);

$(document).ready(function () {
  var displayDate = dayjs();
  $('#currentDay').text(displayDate.format('MMM D, YYYY'));

  var currentHour = dayjs().format('H');

  $('.time-block').each(function () {
    var futureHour = parseInt($(this).attr('id').split('-')[1]);
   

    if (futureHour < currentHour) {
      $(this).addClass('past');
    } else if (futureHour > currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
  $(document).ready(function() {
    // Retrieve stored data and display it on the page
    $('.time-block').each(function() {
      var time = $(this).attr('id');
      var text = localStorage.getItem(time);
      if (text !== null) {
        $(this).children('.description').val(text);
      }
    });
    
    // Save data to local storage when the Save button is clicked
    $('.saveBtn').on('click', function(event) {
      event.preventDefault();
      var text = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.setItem(time, text);
    })
  })
})


      
