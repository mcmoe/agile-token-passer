
/**
* CREATE session nickname and replace form with greeting
*/
$(document).ready(function(){
  $("#nickname-button").click(function(e) {
    e.preventDefault();
    $.ajax({type: "POST", url: "/greeting",
            data: { nickname: $("#nickname").val() },
            success:function(result) {
              $("#nickname-row").html(result);
            },
            error:function(jqXHR, textStatus, errorThrown) {
              $("#nickname-row").html(jqXHR.responseText);
            }
          }
    );
  });

  /**
  * CREATE a daily and append its info to dailies list
  */
  $("#daily-button").click(function(e) {
    e.preventDefault();
    $.ajax({type: "POST", url: "/dailies",
            data: { daily_name: $("#daily-name").val() },
            success:function(result) {
              $("#dailies").append(result);
            },
            error:function(jqXHR, textStatus, errorThrown) {
              $("#dailies").append(jqXHR.responseText);
            }
          }
    );
  });
});
