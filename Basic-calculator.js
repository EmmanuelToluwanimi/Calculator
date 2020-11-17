function num(num) {
    document.getElementById('div2').innerHTML += num
}
function ops() {
    var operation = document.getElementById('div2').innerHTML;
    var calc = eval(operation);
    document.getElementById('div1').innerHTML = calc;

}
function getClear() {
    document.getElementById('div1').innerHTML = '';
    document.getElementById('div2').innerHTML = '';
}
function getCle() {
    var operation = document.getElementById('div2').innerHTML;
    document.querySelector('#div2').innerHTML = operation.substring(0, operation.length - 1);
}
function sqe() {
    var operation = document.getElementById('div2').innerHTML;
    document.querySelector('#div1').innerHTML = Math.pow(operation, 2);

    // var result = document.getElementById('div1').innerHTML;
    // document.querySelector('#div1').innerHTML = Math.pow(result, 2);
}
function srt() {
    var operation = document.getElementById('div2').innerHTML
    document.getElementById('div1').innerHTML = Math.sqrt(operation, 2)
}
function inv() {
    var operation = document.getElementById('div2').innerHTML
    document.getElementById('div1').innerHTML = Math.pow(operation, -1)
}
function perc() {
    var operation = document.getElementById('div2').innerHTML;
    var result = document.getElementById('div1').innerHTML;
    document.getElementById('div1').innerHTML = result / 100;
    document.getElementById('div2').innerHTML = '(' + operation + ')%'
}
function neg() {
    var operation = document.getElementById('div2').innerHTML;
    document.getElementById('div2').innerHTML = ('-' + operation)
}
