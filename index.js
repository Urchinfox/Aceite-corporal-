let index = 0;
const $slide = $('#Slide');
const $slideMask = $slide.find('.mask')
let featureInterval;
const duration = 3000; 
// banner的秒數
const $featureBtn = $('#featureBtn > .feature-order');
const $featureNext = $('#featureMove .fa-caret-right');
const $featurePrev = $('#featureMove .fa-caret-left');

featureInterval = setInterval(featureSlide,duration);

function featureSlide(){
    if(index < 2){
        index ++;
    }else{
        index = 0;
    }
    $slideMask.css('left', -index * 100 + '%');
    $featureBtn.eq(index).addClass('feature-btn-auto')
        .siblings().removeClass('feature-btn-auto');
}

$slide.hover(function(){
    clearInterval(featureInterval);
},function(){
    featureInterval = setInterval(featureSlide,duration);
});

$featureBtn.click(function(){
    $(this).addClass('feature-btn-auto').siblings().removeClass('feature-btn-auto')
    index = $(this).index();
    $slideMask.css('left', -index * 100 + '%');
})

$featureNext.click(function(){
    clearInterval(featureInterval)
    $featureBtn.removeClass('feature-btn-auto')
    if(index < 2){
        index ++;
    }else{
        index = 0;
    }
    $featureBtn.eq(index).addClass('feature-btn-auto')
    $slideMask.css('left', -index * 100 + '%');
})

$featurePrev.click(function(){
    clearInterval(featureInterval)
    $featureBtn.removeClass('feature-btn-auto')
    if(index > 0){
        index --;
    }else{
        index = 2;
    }
    $featureBtn.eq(index).addClass('feature-btn-auto')
    $slideMask.css('left', -index * 100 + '%');
})
