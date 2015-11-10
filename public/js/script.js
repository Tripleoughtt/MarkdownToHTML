$(document).ready(init)

function init (){
  $('button').on('click', sendRequest)
}

function sendRequest(){
  var text =  $('.input').val();
  
  $.ajax({
    type: "POST",
    url: "/",
    data: {string : text},
  })
  .done(function(data){
    $(".output").empty();
    console.log(data);
    var htmlConvert = $(`${data}`);
    console.log(htmlConvert);
    $('.output').append(htmlConvert);
  })
  .fail(function(err){
    console.log(err)
  })
}
