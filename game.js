
var wannaPlay = prompt('Do you want to have a doggone good time, if yes enter 1, if no enter 2');

var correctAnswer = 19;


while(wannaPlay == 1){
    for (var i = 0; i < 8; i = i + 1){
        var userAnswer = prompt('Please enter a number between 1 and 20');
        if(userAnswer == correctAnswer){
            wannaPlay = prompt('WOOF WOOF WOOF. You got it right. Wanna play again?1 for yes, 2 for no');
            break;
        } else {        
            if (userAnswer < correctAnswer){
                alert('Whimper, to low.  Try Again.');
            } else {
                alert('Whimper, to high.  Try Again.');
            }
        }
    }
}