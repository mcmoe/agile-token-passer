
/*
* Helper method that builds a bootstrap danger alert panel
* NOTE: not sure about scope - angular introduction should help manage such things
*/
function alertPanel(status, errorThrown, message) {
    return "<div class=\"alert alert-danger alert-dismissible fade in\" role=\"alert\">" +
      "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
        "<span aria-hidden=\"true\">&times;</span>" +
      "</button>"+
      status + ":" + errorThrown + "> " + message +
    "</div>";
}

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
              $("#nickname-row").after(alertPanel(textStatus, errorThrown, jqXHR.responseText));
            }
          }
    );
  });

  /**
  * CREATE a daily and append its info to dailies list
  */
  $("#daily-add-button").click(function(e) {
    e.preventDefault();
    $.ajax({type: "POST", url: "/dailies",
            data: { daily_name: $("#daily-name").val() },
            success:function(result) {
              $("#dailies").append(result);
              $("#daily-name").val('');
            },
            error:function(jqXHR, textStatus, errorThrown) {
              $("#dailies").before(alertPanel(textStatus, errorThrown, jqXHR.responseText));
            }
          }
    );
  });

  /**
  * DELETE a daily
  */
  $("#dailies").on('click', '.daily-delete', function(e) {
    e.preventDefault();
    $.ajax({type: "DELETE", url: "/dailies/" + $(e.currentTarget).attr("name"),
            success:function(result) {
              $(e.currentTarget).closest('.row').remove();
            },
            error:function(jqXHR, textStatus, errorThrown) {
                $("#dailies").before(alertPanel(textStatus, errorThrown, jqXHR.responseText));
            }
          }
    );
  });
});
