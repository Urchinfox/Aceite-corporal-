const $categoria = $('#Categoria p');
const $cara = $('#Cara p');
const $cook = $('#Cook p');
const tiempo = 300;
const $productoitem = $('#ProductoItem ul');
// inicio predeterminado
$cara.eq(0).animate({top:-10,tiempo});
$categoria.eq(0).addClass('categoria-p');


$categoria.click(tipo);

function tipo(){
    let index = $(this).index()
    // console.log(index)

    if(index < 1){
        $cara.fadeIn()
        $cook.fadeOut()
        $categoria.eq(0).addClass('categoria-p')
        $categoria.eq(1).removeClass('categoria-p')
        $productoitem.eq(0).fadeIn()
        $cara.eq(0).animate({top:-10,tiempo}).siblings().animate({top:0,tiempo})

        // $categoria.eq(0).animate({top:-10},tiempo)
        // $categoria.eq(1).animate({top:0,tiempo})
    }else{
        $cara.fadeOut()
        $cook.fadeIn()
        $categoria.eq(1).addClass('categoria-p')
        $categoria.eq(0).removeClass('categoria-p')
        $cook.eq(0).animate({top:-10,tiempo}).siblings().animate({top:0,tiempo})
        index = index + 2
        $productoitem.eq(index).fadeIn().siblings().fadeOut()
    
        // $categoria.eq(1).animate({top:-10,tiempo})
        // $categoria.eq(0).animate({top:0},tiempo)
    }
}


$cara.click(function(){
    let index = $(this).index()
    $cara.eq(index).animate({top:-10,tiempo}).siblings().animate({top:0,tiempo})
    $productoitem.eq(index).fadeIn().siblings().fadeOut();
})

$cook.click(function(){
    let index = $(this).index()
    $cook.eq(index).animate({top:-10,tiempo}).siblings().animate({top:0,tiempo})
    index = index + 3 
    $productoitem.eq(index).fadeIn().siblings().fadeOut();
})








