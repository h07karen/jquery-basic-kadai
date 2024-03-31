$(function (){
  $('#change-color').on('click',function(){
    $('#target').css('color','orange');
  });
});

$(function (){
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
    $('#target').css('color','orange');
  });
});

$(function (){
  $('#fade-out').on('click',function(){
    $('#target').fadeOut(3000);
  });
});

$(function (){
  $('#fade-in').on('click',function(){
    $('#target').fadeIn(3000);
  });
});