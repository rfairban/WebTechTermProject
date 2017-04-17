var background = ["Background:", "Acolyte", "Charlatan", "Criminal","Entertainer","Folk Hero","Guild Artisan", "Hermit","Noble","Outlander","Sage","Sailor", "Soldier","Urchin","Haunted One","City Watch","Clan Crafter", "Cloistered Scholar","Courtier","Faction Agent","Far Traveler", "Inheritor","Knight of the Order","Mercenary Veteran","Urban Bounty Hunter","Uthgardt Tribe Member","Waterdhavian Noble"];




$("#background select").empty();
for(var i in background) {
  $("#background select").append('<option value='+i+'>'+background[i]+'</option>');
}