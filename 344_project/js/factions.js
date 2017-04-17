var factions = ["Factions:", "faction 2"];




$("#factions select").empty();
for(var i in factions) {
  $("#factions select").append('<option value='+i+'>'+factions[i]+'</option>');
}


