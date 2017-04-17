var language = ["Language:", "Abyssal", "Infernal", "Elven", "Draconic", "Celestial", "Common", "Deep Speech", "Draconic", "Dwarvish", "Elvish" ];




$("#language select").empty();
for(var i in language) {
  $("#language select").append('<option value='+i+'>'+language[i]+'</option>');
}


