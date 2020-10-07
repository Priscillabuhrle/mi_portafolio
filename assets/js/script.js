/*tooltips*/

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  /*modal*/

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  /*scroll*/
  $(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });
  });
  