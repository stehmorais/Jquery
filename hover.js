<style>
  #pai{
   width: 200px;
   height: 100px;
   background: red;
}

#filho{
   width: 100px;
   height: 50px;
   background: yellow;
}
</style>

<div class="container my-9">
    <h2 class="text-center" style="font-weight:bold; text-transform: uppercase;">Nossa localização</h2>
</div>

<div class="container">
    <div id="pai">
        pai
        <div id="filho">
           filho
        </div>
      </div>
</div>

<script>
    $("#filho").hover(

    function(){
        
    $(this).css("background", "blue");
    }
    ,
    function(){
    $(this).css("background", "red");
    }

    );
</script>
