var skills = ["Skills:", "Acrobatics (Dex)","Animal Handling (Wis)","Arcana (Int)","Athletics (Str)","Deception (Cha)","History (Int)","Insight (Wis)","Intimidation (Cha)","Investigation (Int)","Medicine (Wis)","Nature (Int)","Perception (Wis)","Performance (Cha)","Persuasion (Cha)","Religion (Int)","Sleight of Hand (Dex)","Stealth (Dex)","Survival (Wis)"
];





$("#skills select").empty();
for(var i in skills) {
  $("#skills select").append('<option value='+i+'>'+skills[i]+'</option>');
}
