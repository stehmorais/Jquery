$(document).ready(function() {
  // seleciona a div pai
  var divPai = $('div.pai');
  
  // percorre cada filho da div pai
  divPai.children().each(function(index) {
    // adiciona a classe "minha-classe" ao 2º, 4º, 6º... filho
    if ((index + 1) % 2 === 0) {
      $(this).addClass('minha-classe');
    }
  });
});

// aonde a minha classe seria concatenada ao numero da iteração
