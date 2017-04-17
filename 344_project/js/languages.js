var language = ["language:", "language 2"];




$("#language select").empty();
for(var i in language) {
  $("#language select").append('<option value='+i+'>'+language[i]+'</option>');
}


