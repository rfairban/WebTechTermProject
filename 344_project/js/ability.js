var ability = ["Ability:", "Strength","Dexterity","Constitution","Intellect","Wisdom","Charisma"
];




$("#ability select").empty();
for(var i in ability) {
  $("#ability select").append('<option value='+i+'>'+ability[i]+'</option>');
}
