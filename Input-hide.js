
  $("#motorista").change(function() {
      $('#passaporte').hide();
    if(this.value == "Sim")
      $('#passaporte').show();
 });
