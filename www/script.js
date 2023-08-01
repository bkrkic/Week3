
/*Task 4.3. Add a submit button to the form that sends a request to a login route via a jQuery
ajax post request.*/
$(document).ready(function(){
  $("#loginform").submit(function(event){
    //Stop form from submitting normally
    event.preventDefault();
    //Calling the ajaxPost function
    ajaxPost();
  });
});

//ajaxPost function
function ajaxPost(){
      var formData = {
        username: $("#username").val(),
        password: $("#password").val()
      }

      $.ajax({ //DO AJAX FORM
        type: "POST",
        contentType: "application/json",
        url: window.location + "login",
        data: JSON.stringify(formData),
        dataType: "json",
        success: function(account) {
          if (account.valid == true) {
            $("#loginform").removeClass("showmessage");
            $("#loginform").addClass("hidemessage");

            $("#successmsg").removeClass("hidemessage");
            $("#successmsg").addClass("showmessage");

          } else {
            $("#loginform").removeClass("hidemessage");
            $("#loginform").addClass("showmessage");

            $("#errormsg").removeClass("hidemessage");
            $("#errormsg").addClass("showmessage");
          }
      },
      error: function(e){
        alert("Error!")
        console.log("ERROR: ", e);
      }
    });
  //Reset formData after Posting
  resetData();
}
//Reset function
function resetData(){
  $("#username").val("");
  $("#password").val("");
}



