  $(document).ready(function() {
  // Esconde a div com o ID "header7"
  $('.header7').hide();

  $(window).scroll(function() {

    // Calcula a posição de rolagem em % com base na altura da janela
    var scrollPercent = ($(this).scrollTop() / $(this).height()) * 100;

    // Verifica se a posição de rolagem é maior ou igual a 30%
    if (scrollPercent >= 30) {
      
      // Exibe a div com o ID "header7"
      $('.header7').fadeIn(200);
    }  else if ($(this).scrollTop() <= 0) {
        
      // Remove a div com o ID "header7" quando a posição de rolagem é menor ou igual a zero
      $('.header7').fadeOut(200); 
    }
  });
});
