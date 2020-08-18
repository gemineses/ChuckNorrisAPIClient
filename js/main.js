function callToCategories(){
    $.ajax({
        url: "https://api.chucknorris.io/jokes/categories", 
        success: function(result){
            var text = "";
            result.forEach(element => {
                text += "<option value='"+element+"'>"+element+"</option>"
            });

            $("#listaDeCategorias").html(text);
        }
    });
}

function callToChuck(){
    let categorySelected = document.getElementById("listaDeCategorias").value;

    $.ajax({
        url: "https://api.chucknorris.io/jokes/random?category="+categorySelected, 
        success: function(result){
            document.getElementById("joke").innerText = result.value;
        }
    });
}

$(document).ready(function(){
    callToCategories();
    $("img").click(function(){
        callToChuck();
    });

});
