
const $headerUl = $('#HeaderUl>li');
const $headerRwd = $('#Hamburguesa');
const $header = $('#HeaderUl');
const $xmark = $('#Xmark');
const $headerul2 = $('#HeaderUl2');
const tiempoAll = 300;
const $arrow1 = $('#Arrow1');
const $arrow2 = $('#Arrow2');




$headerUl.hover(function(){
    $(this).find('ul').stop(true, false).slideDown();
},function(){
    $(this).find('ul').stop(true,false).slideUp();
});

$headerRwd.click(function(){
    $header.fadeIn();
    $xmark.show();
    $headerRwd.hide();
})

$xmark.click(function(){
    $header.fadeOut();
    $xmark.fadeOut();
    $headerRwd.fadeIn();
})

$arrow1.click(function(){
    $(this).animate({rotate:'180deg',tiempoAll});
    $arrow2.animate({rotate:'0deg',tiempoAll});

})
$arrow2.click(function(){
    $(this).animate({rotate:'180deg',tiempoAll});
    $arrow1.animate({rotate:'0deg',tiempoAll});

})



