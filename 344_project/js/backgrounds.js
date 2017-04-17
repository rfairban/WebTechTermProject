var background = ["Background:", "bg 2"];




$("#background select").empty();
for(var i in background) {
  $("#background select").append('<option value='+i+'>'+background[i]+'</option>');
}