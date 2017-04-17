var alignment = ["Alignment:", "alignment 2"];




$("#alignment select").empty();
for(var i in alignment) {
  $("#alignment select").append('<option value='+i+'>'+alignment[i]+'</option>');
}