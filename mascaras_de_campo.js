<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pegando telefone</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    <!-- Máscara de campo jquery -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
</head>
<body>
    
    <div class="container mt-5">
        <form action="project.html">
            <div class="container">
                <select name="nationality" id="nationality">
                    <option selected value="br">BR</option>
                    <option value="usa">USA</option>
                    <option value="es">ES</option>
                </select>
                <input type="text" id="telefone" name="telefone" placeholder="Insira um telefone">
                <script>$("#telefone").mask("(00) 00000-0000");</script>
                <p style="display:none" id="msg-error">Número de telefone inválido</p>
            </div>
        </form>
    </div>

    <script>
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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>    
</body>
</html>
