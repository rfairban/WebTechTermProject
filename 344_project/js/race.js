var race = ["Race:", "race 2"];




$("#race select").empty();
for(var i in race) {
  $("#race select").append('<option value='+i+'>'+race[i]+'</option>');
}