// var time = 2;
// $('#counter').each(function(){
//   $('div').each(function(){
//     var 
//     i = 1,
//     num = $(this).data('num'),
//     step = 1000 * time / num,
//     that = $(this),
//     int = setInterval(function(){
//       if (i <= num) {
//         that.html(i);
//       }
//       else {
//         clearInterval(int);
//       }
//       i++;
//     },step);
//   });
// });

var time = 2, ss = 1;
$(window).scroll(function() {
  $('#counter').each(function(){
    var 
    cPos = $(this).offset().top,
    topwindow = $(window).scrollTop();
    if (cPos < topwindow + 200) {
      if (ss < 2) {
        $('div').each(function(){
          var 
          i = 1,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
            }
            else {
              ss = ss + 2;
              clearInterval(int);
            }
            i++;
          },step);
        });
      }
    }
  });
});