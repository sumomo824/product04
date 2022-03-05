//jQuery
$(function(){
    /* 画面遷移 */
    $('body').fadeIn(1000);
  
    /* アコーディオンメニュー */
    $('#hide-list').on('click',function(){
      $('#hide-list').toggleClass('close');
      $('.container00').toggleClass('fade');
      $('body').toggleClass('no-scroll');
    });
    $('#contact-close').click(function(){
        $('#hide-list').removeClass('close');
        $('.container00').removeClass('fade');
        $('body').removeClass('no-scroll');
    });
    
    /* アイコン装飾 */
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        // ❶スマホのみに適用させるJavaScriptを記述
            $(this).find('i').css('color','#C7A23A');
            $(this).find('.line').css('background-color','#C7A23A');
            $(this).find('.hide06').css('color','#4d4d4d');
        } else {
        // ❷その他PC・タブレットに適用させるJavaScriptを記述
        $(this).find('.icon06').hover(function(){
            $(this).find('i').css('color','#C7A23A');
            $(this).find('.line').css('background-color','#C7A23A');
            $(this).find('.hide06').css('color','#4d4d4d');
          },function(){
            $(this).find('i').css('color','#4d4d4d');
            $(this).find('.line').css('background-color','#c7a13a00');
            $(this).find('.hide06').css('color','#4d4d4d00');
          });
        }
  
    });
