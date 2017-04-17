var factions = ["Factions:","The Lords' Alliance"," The Zhentarim"," The Emerald Enclave"," The Order Of The Gauntlet ","The Harpers"];




$("#factions select").empty();
for(var i in factions) {
  $("#factions select").append('<option value='+i+'>'+factions[i]+'</option>');
}


