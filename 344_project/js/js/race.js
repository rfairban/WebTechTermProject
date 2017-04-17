var race = ["Race:", "Dragonborn",  "High Elf", "Wood Elf", "Dragonborn", "Hill Dwarf", "Mountain Dwarf", "Grey Dwarf", "Forest Gnome", "Rock Gnome", "Deep Gnome", "Half-Elf", "Half-Orc", "Lightfoot Halfling", "Stout Halfling", " Human", " Tiefling", "Genasi", "Goliath" ];




$("#race select").empty();
for(var i in race) {
  $("#race select").append('<option value='+i+'>'+race[i]+'</option>');
}

