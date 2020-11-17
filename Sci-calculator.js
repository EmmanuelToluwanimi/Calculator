// document.getElementById('div4').innerHTML = 0
function nums(nums) {
    document.getElementById('div4').innerHTML += nums
}
function opts() {
    // console.log('hello')

    var operate = document.getElementById('div4').innerHTML;
    if (operate.includes('Math.sin(')) {
        var operate = document.getElementById('div4').innerHTML;

        // document.getElementById('div3').innerHTML = sinn;
        // alert(eval(operate))
    }

    var calcul = eval(operate);

    document.getElementById('div3').innerHTML = calcul;
}
function getDelete() {
    document.getElementById('div3').innerHTML = '';
    document.getElementById('div4').innerHTML = '';
}
function getDel() {
    var operate = document.getElementById('div4').innerHTML;
    document.querySelector('#div4').innerHTML = operate.substring(0, operate.length - 1);
}
function sqre() {
    var operate = document.getElementById('div4').innerHTML;
    document.querySelector('#div3').innerHTML = Math.pow(operate, 2);

    // var result = document.getElementById('div1').innerHTML;
    // document.querySelector('#div1').innerHTML = Math.pow(result, 2);
}
function sqroot() {
    var operate = document.getElementById('div4').innerHTML
    document.getElementById('div3').innerHTML = Math.sqrt(operate, 2)
}
function negt() {
    var operate = document.getElementById('div4').innerHTML;
    document.getElementById('div4').innerHTML = ('-' + operate)
}
function tenpow() {
    var operate = document.getElementById('div4').innerHTML;
    document.querySelector('#div3').innerHTML = Math.pow(10, operate);
}
function expo(expo) {
    document.getElementById('div4').innerHTML += expo;
    var operate = document.getElementById('div4').innerHTML;
    // var kdb = Math.exp(operate, operate)
    // document.querySelector('#div3').innerHTML = kdb;
}
// function sinv() {
//     var operate = document.getElementById('div4').innerHTML;
//     document.querySelector('#div3').innerHTML = Math.sin(operate);    
// }
function sinv(sinv) {
    document.getElementById('div4').innerHTML += sinv;
    var operate = document.getElementById('div4').innerHTML;
    // document.querySelector('#div3').innerHTML = Math.sin(operate);
}
function cosv() {
    var operate = document.getElementById('div4').innerHTML;
    document.querySelector('#div3').innerHTML = Math.cos((Math.PI / 180) * operate);
}
function tanv() {
    var operate = document.getElementById('div4').innerHTML;
    document.querySelector('#div3').innerHTML = Math.tan((Math.PI / 180) * operate);
}
function logo() {
    var operate = document.getElementById('div4').innerHTML;
    document.querySelector('#div3').innerHTML = Math.log10(operate);
}
function tanv() {
    var operate = document.getElementById('div4').innerHTML;
    document.querySelector('#div3').innerHTML = Math.tan(operate);
}
function pie() {
    var pii = Math.PI;
    document.getElementById('div4').innerHTML += pii;

}
function factorial(n) {

    return n ? n * factorial(n - 1) : 1;
    alert(factorial(5))
    // document.getElementById('div4').innerHTML = factorial(5);
}
function modd(modd) {
    document.getElementById('div4').innerHTML += modd;
    var operate = document.getElementById('div4').innerHTML;
}

// function invs() {
    //     var operation = document.getElementById('div3').innerHTML
    //     document.getElementById('div4').innerHTML = Math.pow(operation, -1)
    // }
    // function perc() {
    //     var operation = document.getElementById('div4').innerHTML;
    //     var result = document.getElementById('div3').innerHTML;
    //     document.getElementById('div3').innerHTML = result / 100;
    //     document.getElementById('div4').innerHTML = '(' + operation + ')%'
    // }