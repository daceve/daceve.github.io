$(document).ready(function() {
  // $(".next").click(function (event) {
  //   $(".con-swork").css("left","-450px");
  // });
  //
  // $(".prev").click(function (event) {
  //   $(".con-swork").css("right","-450px");
  // });
  //
  // var sleft   = $('.con-swork').css('left');
  // var sright  = $('.con-swork').css('right');
  // alert(sright)
  // if (left == '0') {
  //   $('.prev').css('display','none');
  // }

  // $('.prev').on('click', function(){
  //   $('.con-swork').animate({left: '0%'},300,function(){
  //     $('.con-swork').css('left','-450px');
  //
  //     $('.swork').first().before($('.swork').last());
  //   });
  // });
  //
  // $('.next').on('click', function(){
  //   $('.con-swork').animate({right: '0%'},300,function(){
  //     $('.con-swork').css('right','-450px');
  //
  //     $('.swork').last().before($('.swork').first());
  //   });
  // });
  var sworkWidth  = $('.swork').css('width');
  var csWork = $('.con-swork');
  $('.next').on('click',function(){
    csWork.animate({left: '-='+sworkWidth+''},300,function() {
    });
  });

  $('.prev').on('click',function(){
    csWork.animate({left: '+='+sworkWidth+''},300);
  });

});
