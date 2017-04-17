
var classes = ["Class:","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];




$("#classes select").empty();
for(var i in classes) {
  $("#classes select").append('<option value='+i+'>'+classes[i]+'</option>');
}

