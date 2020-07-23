function getuserName(){
    var userNameInFunction = prompt('What is your name?');
    alert('Hello There...' + userNameInFunction);
    document.write('<h2>' + userNameInFunction + '</h2>');
    return userNameInFunction;
}
var userName = getuserName();

function confirmAskQuestions(){
    confirm(userName + ' I am going to ask you some questions!');
}
confirmAskQuestions();

function askQuestion(){
    var userCodeAnswer = prompt('Do you have a dog? (yes or no)');
    if (userCodeAnswer == "yes"){
        alert('I do too');
    } else {
        alert('That is too bad. We only groom dogs.');
    }
}
askQuestion();


function askTime(){
    var userTimeInFunction = prompt('What hour is it in military time 0-24?');
    return userTimeInFunction;
}
var userTime = askTime();


function checkTime(){
    if(userTime < 12){
        alert('Good Morning');
    } else if (userTime >= 12 && userTime < 18){
        alert('Good Afternoon');
    } else {
        alert('Good Evening');
    }
}
checkTime();