# Calculator

Calculator with keyboard support.

# Implementation

## Built With

* JavaScript
* jQuery
* HTML5
* CSS3

## Selecting a Digit

The 'click' event is used to determine whether the digit should be added to the
first number string or the second number string. For example, if there is no
operator present, the digit is concatenated to the first number string.

```
$('.zeroDigitBtn').click(function(){
  if(oprDisplay === ''){
    num1Display += digits[0];
    $('#displayResult').html(num1Display);
  }
  else{
    num2Display += digits[0];
    $('#displayResult').html(num2Display);
  }
});
```

# Keyboard Shortcuts

* Clear = 'c'
* Remember to press 'Shift' to access '+'

# Future Plans

* Add functionality to string together several operations
