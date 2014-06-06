//= require jquery
//= require handlebars.runtime
//
//= require template
//= require_self


$(function(){
  var test = JST["template"]({title: "the divine comedy"})
  $("#handlebars").append(test)
})
