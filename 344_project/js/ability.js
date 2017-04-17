var ability = ["Ability:", "ability 2"];




$("#ability select").empty();
for(var i in ability) {
  $("#ability select").append('<option value='+i+'>'+ability[i]+'</option>');
}