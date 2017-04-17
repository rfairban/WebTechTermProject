var alignment = ["Alignment:", 
"Lawful good","	Neutral good","	Chaotic good","Lawful neutral","(True) neutral","	Chaotic neutral","Lawful evil","	Neutral evil","	Chaotic evil"
];





$("#alignment select").empty();
for(var i in alignment) {
  $("#alignment select").append('<option value='+i+'>'+alignment[i]+'</option>');
}
