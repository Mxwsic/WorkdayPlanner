// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $("#time9").val(localStorage.getItem("9AM"));
  $("#time10").val(localStorage.getItem("10AM"));
  $("#time11").val(localStorage.getItem("11AM"));
  $("#time12").val(localStorage.getItem("12PM"));
  $("#time13").val(localStorage.getItem("1PM"));
  $("#time14").val(localStorage.getItem("2PM"));
  $("#time15").val(localStorage.getItem("3PM"));
  $("#time16").val(localStorage.getItem("4PM"));
  $("#time17").val(localStorage.getItem("5PM"));
  var now = dayjs().format("ddd, MMM DD YYYY, hh:mm:ssa");
  console.log(now);
  $("#currentDay").text(now);


  $(".saveBtn").on("click", function() {
    var hour = $(this).siblings(".hour").text();
    localStorage.setItem($(this).siblings(".hour").text(), $(this).siblings(".description").val());
  });


  
function changeTime(){
    let currentHour = dayjs().hour();
    console.log(currentHour);
    $(".time-block").each(function (){
      let Time = parseInt($(this).attr("data-time"));
      console.log(Time);
      if (Time < currentHour){
        $(this).addClass("past");
      } else if (Time === currentHour){
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    })
}
changeTime();
});
