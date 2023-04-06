<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pegando telefone</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>    

    <!-- Máscara de campo jquery -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <!-- Plugin select2 CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
 
</head>
<body>
    
    <div class="container mt-5">
        <form action="project-image.html">
            <div style="display: flex;">
                <select class="select-imagem" name="nationality" id="nationality" style="width: 100px;">
                    <option value="br" class="p-5" data-imagem="flag-icons-main/flags/1x1/br.svg">BR</option>
                    <option value="usa" class="p-5" data-imagem="flag-icons-main/flags/1x1/us.svg">USA</option>
                    <option value="es" class="p-5" data-imagem="flag-icons-main/flags/1x1/es.svg">ES</option>
                </select>  
                <input type="text" id="telefone" name="telefone" placeholder="Insira um telefone" style="height:28px">
                <script>$("#telefone").mask("(00) 00000-0000");</script>
            </div>
            <p style="display:none" id="msg-error">Número de telefone inválido</p>      
        </form>
    </div>

    <script>
    // Selecionando values dos options

    $("#nationality").click(function() {
        $('#msg-error').hide();
    if(this.value == "br") {
        $("#telefone").mask("(00) 00000-0000");
    } else if(this.value == "usa") {
        $("#telefone").mask("(000) 000-0000");
    } else if(this.value == "es"){
        $("#telefone").mask("(00) 000 00 00 00");
    } else{
        $('#telefone').css('border-color', 'red');
        $('#msg-error').show();
    }
    });

    </script>

    <script>
        $(document).ready(function() {
        $('.select-imagem').select2({
            minimumResultsForSearch: -1,
            templateSelection: function(selection) {
            if (!selection.id || !selection.element) {
                return selection.text;
            }
            var imagemUrl = $(selection.element).data('imagem');
            return $('<span><img src="' + imagemUrl + '" width="23" height="23" style="margin-right: 10px; margin-bottom:5px">' + selection.text + '</span>');
            }
        }).on('select2:select', function (e) {
            var imagemUrl = $(e.params.data.element).data('imagem');
            $('#' + e.params.data.id).find('img').attr('src', imagemUrl);
        });
        });

    </script>

    <!-- Script Plugin Select2 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script> 

</body>
</html>
