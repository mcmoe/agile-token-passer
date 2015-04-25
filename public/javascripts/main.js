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
});
