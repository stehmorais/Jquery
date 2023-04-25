$(document).ready(function() {

  $('#numInputs').change(function() {
    var num = $(this).val(); // Pega o valor selecionado pelo usuário
    $('#inputContainer').empty(); // Limpa quaisquer inputs anteriores

    if (num != 1 && num < 5) {
      $('#msg-error-modal').hide();
      var arrayIdades = [];


      // Gera o número de inputs necessários
      for (var i = 1; i <= num; i++) {
        var input = '<div class="col-sm-6 mb-6">' +
                      '<div class="js-form-message">' +
                        '<div class="js-focus-state input-group form">' +
                          '<input class="form-control form__input" type="number" name="idade'+ i +'" id="idade'+ i +'" required placeholder="Idade do participante" aria-label="Idade do participante" data-msg="Por favor insira uma idade válida" data-error-class="u-has-error" data-success-class="u-has-success">' +
                        '</div>' +
                      '</div>' +
                    '</div>';
        $('#inputContainer').append(input);

        arrayIdades.push($("#idade" + i).val());
      }

      $('#idades-input').val(arrayIdades.join(', '));
   
    } else if (num >= 5) {
      var input = '<div class="col-sm-6 mb-6">' +
            '<div class="js-form-message">' +
              '<div class="js-focus-state input-group form">' +
                '<input class="form-control form__input" type="number" name="mediaIdades" id="mediaIdades" required placeholder="Média da idade dos participantes" aria-label="Media da idade dos participantes ex 20-30 (20 há 30 anos)" data-msg="Por favor insira uma média de idade válida" data-error-class="u-has-error" data-success-class="u-has-success">' +
              '</div>' +
            '</div>' +
          '</div>';
        $('#inputContainer').append(input);
    } else {
      $('#msg-error-modal').show();
    }
  });



});
