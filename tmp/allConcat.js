var Git = require("./../js/github.js").gitModule;


$(document).ready(function() {
  $('#getName').click(function() {
    var name = $('#name').val();
    $('#name').val("");
    var gitObject = new Git();
    gitObject.getGit(name);
    console.log(gitObject);


  });
});
