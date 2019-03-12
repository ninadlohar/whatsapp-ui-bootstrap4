$(document).ready(function() {
  /*** left side */
  var clickedOutSideDiv = false;
  $(".sl1").css("display", "none");
  
  $("#left-side-ellipsis").click(function(e) {
    clickedOutSideDiv = true;
      $(".sl1").css("display", "block");
    e.preventDefault()
  });

  $("body").mouseup(function(e) {
    if (clickedOutSideDiv) {
      $(".sl1").css("display", "none");
      e.preventDefault()
    }
  });
  
  /*** right side */
  var rightclickedOutSideDiv = false;
  $(".sl2").css("display", "none");
  
  $("#right-side-ellipsis").click(function(e) {
    rightclickedOutSideDiv = true;
      $(".sl2").css("display", "block");
    e.preventDefault()
  });

  $("body").mouseup(function(e) {
    if (rightclickedOutSideDiv) {
      $(".sl2").css("display", "none");
      e.preventDefault()
    }
  });
});



