const $left = $('#Left');
const $cuentaLogin = $('#CuentaOpt .cuenta-login');
const $cuentaSignin= $('#CuentaOpt .cuenta-signin');

$cuentaLogin.click(function(){
    $left.css("background","radial-gradient(30px at right 41%,aliceblue 30px, gray)");
    $left.removeClass("cuenta-left-hole2").addClass("cuenta-left-hole1");
})

$cuentaSignin.click(function(){
    $left.css("background","radial-gradient(30px at right 50%,aliceblue 30px, gray)");
    $left.removeClass("cuenta-left-hole1").addClass("cuenta-left-hole2");
})