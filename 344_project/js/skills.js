var skills = ["skills:", "skills 2"];




$("#skills select").empty();
for(var i in skills) {
  $("#skills select").append('<option value='+i+'>'+skills[i]+'</option>');
}