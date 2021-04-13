function show_menu(){
    document.getElementById("menu").style.display = "inline-block";
}
var html;
var array = [];
function add_item(){
    var input = document.getElementById("add_item").value;
    array.push(input);
    array.sort();
    html = "<section class='cards'>";
    for (var i = 0; i<array.length; i++){
        html = html + "<div class='card'>" + "<img src='pizzaImg.png'>" + array[i] + "</div";
    }
    html = html + "</section>";
    document.getElementById("display_addedmenu").innerHTML = html;
}