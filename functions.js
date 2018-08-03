/*Calculator Functions*/
function add(num1,num2){
  return num1+num2;
}

function subtract(num1,num2){
  return num1-num2;
}

function multiply(num1,num2){
  return num1*num2;
}

function divide(num1,num2){
  return num1/num2;
}

function operate(num1,num2,opr){
  if(opr == '+'){
    return add(num1, num2);
  }
  if(opr == '-'){
    return subtract(num1,num2);
  }
  if(opr == '*'){
    return multiply(num1,num2);
  }
  if(opr == '/'){
    return divide(num1,num2);
  }
}

function backspace(){
  if(oprDisplay === ''){
    num1Display = num1Display.substring(0, num1Display.length - 1);
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display = num2Display.substring(0, num2Display.length - 1);
    $('#displayResult').html(num2Display);
  }
}

/*Button Functionality*/
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/', '='];
var num1Display = '';
var num2Display = '';
var oprDisplay = '';
var ansDisplay = '';
var dotOperator = '.'
var one1Dot = false;
var one2Dot = false;
var backSpace;

/*Digit Buttons*/
$('#0digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[0];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[0];
    $('#displayResult').html(num2Display);
  }
});
$('#1digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[1];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[1];
    $('#displayResult').html(num2Display);
  }
});
$('#2digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[2];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[2];
    $('#displayResult').html(num2Display);
  }
});
$('#3digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[3];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[3];
    $('#displayResult').html(num2Display);
  }
});
$('#4digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[4];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[4];
    $('#displayResult').html(num2Display);
  }
});
$('#5digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[5];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[5];
    $('#displayResult').html(num2Display);
  }
});
$('#6digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[6];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[6];
    $('#displayResult').html(num2Display);
  }
});
$('#7digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[7];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[7];
    $('#displayResult').html(num2Display);
  }
});
$('#8digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[8];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[8];
    $('#displayResult').html(num2Display);
  }
});
$('#9digitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[9];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[9];
    $('#displayResult').html(num2Display);
  }
});

/*Operator Buttons*/
$('#dotBtn').click(function(){
  if(oprDisplay === ''){
    if(one1Dot === false){
      num1Display += dotOperator;
      $('#displayResult').html(num1Display);
      one1Dot = true;
    }
  }
  else{
    if(one2Dot === false){
      num2Display += dotOperator;
      $('#displayResult').html(num2Display);
      one2Dot = true;
    }
  }
});
$('#addBtn').click(function(){
  oprDisplay = operators[0];
  $('#displayResult').html(oprDisplay);
});
$('#subtractBtn').click(function(){
  oprDisplay = operators[1];
  $('#displayResult').html(oprDisplay);
});
$('#multiplyBtn').click(function(){
  oprDisplay = operators[2];
  $('#displayResult').html(oprDisplay);
});
$('#divideBtn').click(function(){
  oprDisplay = operators[3];
  $('#displayResult').html(oprDisplay);
});
$('#equalsBtn').click(function(){
  if(num1Display === '' && num2Display === '' ||
  num1Display !== '' && num2Display === '' ||
  num1Display === '' && num2Display !== ''){
    $('#displayResult').html('Incomplete Expression');
    num1Display = '';
    num2Display = '';
    oprDisplay = '';
    ansDisplay = '';
    one1Dot = false;
    one2Dot = false;
  }
  else if(num1Display === '0' && oprDisplay === '/' ||
  num2Display === '0' && oprDisplay === '/'){
    $('#displayResult').html('Come on bruh...division by 0?');
    num1Display = '';
    num2Display = '';
    oprDisplay = '';
    ansDisplay = '';
    one1Dot = false;
    one2Dot = false;
  }
  else if(oprDisplay === ' '){
    $('#displayResult').html('Use an operator!');
    num1Display = '';
    num2Display = '';
    oprDisplay = '';
    ansDisplay = '';
    one1Dot = false;
    one2Dot = false;
  }
  else{
    ansDisplay = operate(parseFloat(num1Display),parseFloat(num2Display),oprDisplay);
    ansDisplay = parseFloat(ansDisplay.toFixed(2));
    $('#displayResult').html(ansDisplay);
    num1Display = '';
    num2Display = '';
    oprDisplay = '';
    ansDisplay = '';
    one1Dot = false;
    one2Dot = false;
  }
});

/*Clear Button*/
$('#clearBtn').click(function(){
  num1Display = '';
  num2Display = '';
  oprDisplay = '';
  ansDisplay = '';
  one1Dot = false;
  one2Dot = false;
  $('#displayResult').html(' ');
});

/*Backspace Button*/
$('#backspaceBtn').click(function(){
  backSpace = backspace();
  $('#displayResult').html(backSpace);
});

/*Keyboard Support - Numbers*/
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 48){
    num1Display += digits[0];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 48){
    num2Display += digits[0];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 49){
    num1Display += digits[1];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 49){
    num2Display += digits[1];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 50){
    num1Display += digits[2];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 50){
    num2Display += digits[2];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 51){
    num1Display += digits[3];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 51){
    num2Display += digits[3];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 52){
    num1Display += digits[4];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 52){
    num2Display += digits[4];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 53){
    num1Display += digits[5];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 53){
    num2Display += digits[5];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 54){
    num1Display += digits[6];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 54){
    num2Display += digits[6];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 55){
    num1Display += digits[7];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 55){
    num2Display += digits[7];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 56){
    num1Display += digits[8];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 56){
    num2Display += digits[8];
    $('#displayResult').html(num2Display);
  }
});
$(document).keypress(function(e){
  if(oprDisplay === '' && e.which == 57){
    num1Display += digits[9];
    $('#displayResult').html(num1Display);
  }
  else if(oprDisplay !== '' && e.which == 57){
    num2Display += digits[9];
    $('#displayResult').html(num2Display);
  }
});

/*Keyboard Support - Operators*/
$(document).keypress(function(e){
  if(e.key == '+'){
    oprDisplay = operators[0];
    $('#displayResult').html(oprDisplay);
  }
});
$(document).keypress(function(e){
  if(e.key == '-'){
    oprDisplay = operators[1];
    $('#displayResult').html(oprDisplay);
  }
});
$(document).keypress(function(e){
  if(e.key == '*'){
    oprDisplay = operators[2];
    $('#displayResult').html(oprDisplay);
  }
});
$(document).keypress(function(e){
  if(e.key == '/'){
    oprDisplay = operators[3];
    $('#displayResult').html(oprDisplay);
  }
});
$(document).keypress(function(e){
  if(e.key == '=' || e.key == 'Enter'){
    if(num1Display === '' && num2Display === '' ||
    num1Display !== '' && num2Display === '' ||
    num1Display === '' && num2Display !== ''){
      $('#displayResult').html('Incomplete Expression');
      num1Display = '';
      num2Display = '';
      oprDisplay = '';
      ansDisplay = '';
      one1Dot = false;
      one2Dot = false;
    }
    else if(num1Display === '0' && oprDisplay === '/' ||
    num2Display === '0' && oprDisplay === '/'){
      $('#displayResult').html('Come on bruh...division by 0?');
      num1Display = '';
      num2Display = '';
      oprDisplay = '';
      ansDisplay = '';
      one1Dot = false;
      one2Dot = false;
    }
    else if(oprDisplay === ' '){
      $('#displayResult').html('Use an operator!');
      num1Display = '';
      num2Display = '';
      oprDisplay = '';
      ansDisplay = '';
      one1Dot = false;
      one2Dot = false;
    }
    else{
      ansDisplay = operate(parseFloat(num1Display),parseFloat(num2Display),oprDisplay);
      ansDisplay = parseFloat(ansDisplay.toFixed(2));
      $('#displayResult').html(ansDisplay);
      num1Display = '';
      num2Display = '';
      oprDisplay = '';
      ansDisplay = '';
      one1Dot = false;
      one2Dot = false;
    }
  }
});
$(document).keypress(function(e){
  if(e.key == '.'){
    if(oprDisplay === ''){
      if(one1Dot === false){
        num1Display += dotOperator;
        $('#displayResult').html(num1Display);
        one1Dot = true;
      }
    }
    else{
      if(one2Dot === false){
        num2Display += dotOperator;
        $('#displayResult').html(num2Display);
        one2Dot = true;
      }
    }
  }
});

/*Keyboard Support - Clear and Backspace*/
$(document).keypress(function(e){
  if(e.key == 'c'){
    num1Display = '';
    num2Display = '';
    oprDisplay = '';
    ansDisplay = '';
    one1Dot = false;
    one2Dot = false;
    $('#displayResult').html(' ');
  }
});
$(document).keypress(function(e){
  if(e.key == 'Backspace'){
    backSpace = backspace();
    $('#displayResult').html(backSpace);
  }
});
